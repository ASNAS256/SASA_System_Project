import csv
import hashlib
import io
import re
import uuid
from pathlib import Path

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
from sqlalchemy import select, case, func
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.models import (
    Grade, Subject, Topic, Question, CurriculumDocument, CurriculumNode, LearningOutcome,
)

router = APIRouter(prefix="/api/v1/curriculum", tags=["Curriculum content"])
STORAGE_DIR = Path(__file__).resolve().parents[2] / "storage" / "curriculum"
MAX_UPLOAD_BYTES = 25 * 1024 * 1024
ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt", ".md"}
NODE_TYPES = {"strand", "theme", "topic", "subtopic"}


_SUBJECT_ALIAS_GROUPS = {"english language": {"english", "english language"}}
def _normalise_subject_name(value: str) -> str:
    return " ".join((value or "").casefold().replace("&", "and").split())
def _subject_alias_names(value: str) -> set[str]:
    normalised = _normalise_subject_name(value)
    for canonical, aliases in _SUBJECT_ALIAS_GROUPS.items():
        if normalised == canonical or normalised in aliases:
            return set(aliases)
    return {normalised}
def _resolve_subject(db: Session, value: str):
    aliases = _subject_alias_names(value)
    subjects = db.scalars(select(Subject).order_by(Subject.name)).all()
    matches = [item for item in subjects if _normalise_subject_name(item.name) in aliases]
    if not matches:
        return None
    canonical = "english language" if aliases == {"english", "english language"} else None
    if canonical:
        for item in matches:
            if _normalise_subject_name(item.name) == canonical:
                return item
    requested = _normalise_subject_name(value)
    for item in matches:
        if _normalise_subject_name(item.name) == requested:
            return item
    return matches[0]
def _subject_ids(db: Session, subject) -> list[str]:
    aliases = _subject_alias_names(subject.name)
    return [item.id for item in db.scalars(select(Subject)).all()
            if _normalise_subject_name(item.name) in aliases]

class BulkDeleteEntries(BaseModel):
    ids: list[str] = Field(min_length=1, max_length=500)

class DocumentReview(BaseModel):
    decision: str = Field(pattern="^(verified|rejected|unverified)$")
    reviewer_name: str = Field(default="Curriculum Reviewer", max_length=150)
    notes: str = ""

class NodeReview(BaseModel):
    decision: str = Field(pattern="^(verified|rejected|draft)$")
    reviewer_name: str = Field(default="Curriculum Reviewer", max_length=150)
    notes: str = ""

class OutcomeCreate(BaseModel):
    outcome_code: str = ""
    outcome_text: str = Field(min_length=5)
    competency: str = ""
    page_reference: str = ""
    source_excerpt: str = ""

class OutcomeReview(BaseModel):
    decision: str = Field(pattern="^(verified|rejected|draft)$")
    reviewer_name: str = Field(default="Curriculum Reviewer", max_length=150)
    notes: str = ""


def _extract_text(filename: str, content: bytes) -> tuple[str, str]:
    ext = Path(filename).suffix.lower()
    if ext in {".txt", ".md"}:
        return content.decode("utf-8-sig", errors="replace"), "extracted"
    if ext == ".pdf":
        try:
            from pypdf import PdfReader
            reader = PdfReader(io.BytesIO(content))
            pages = []
            for index, page in enumerate(reader.pages, start=1):
                pages.append(f"\n\n[PAGE {index}]\n{page.extract_text() or ''}")
            text = "".join(pages).strip()
            return text, "extracted" if text else "no_text_found"
        except Exception as exc:
            return f"Extraction failed: {exc}", "failed"
    if ext == ".docx":
        try:
            from docx import Document
            doc = Document(io.BytesIO(content))
            parts = [p.text for p in doc.paragraphs if p.text.strip()]
            for table in doc.tables:
                for row in table.rows:
                    parts.append(" | ".join(cell.text.strip() for cell in row.cells))
            text = "\n".join(parts)
            return text, "extracted" if text else "no_text_found"
        except Exception as exc:
            return f"Extraction failed: {exc}", "failed"
    return "", "unsupported"


def _doc_dict(d: CurriculumDocument):
    return {
        "id": d.id, "title": d.title, "issuing_authority": d.issuing_authority,
        "document_type": d.document_type, "education_level": d.education_level,
        "curriculum_version": d.curriculum_version, "publication_year": d.publication_year,
        "source_url": d.source_url, "original_filename": d.original_filename,
        "sha256": d.sha256, "extraction_status": d.extraction_status,
        "verification_status": d.verification_status, "created_at": d.created_at.isoformat() if d.created_at else None,
        "extracted_characters": len(d.extracted_text or ""),
    }


def _node_dict(n: CurriculumNode, include_outcomes=True):
    result = {
        "id": n.id, "grade_code": n.grade.code, "subject_name": n.subject.name,
        "document_id": n.document_id, "document_title": n.document.title,
        "parent_id": n.parent_id, "parent_title": n.parent.title if n.parent else None,
        "entry_type": n.entry_type, "title": n.title, "description": n.description,
        "page_reference": n.page_reference, "source_excerpt": n.source_excerpt,
        "verification_status": n.verification_status, "reviewer_name": n.reviewer_name,
        "review_notes": n.review_notes,
        "created_at": n.created_at.isoformat() if n.created_at else None,
    }
    if include_outcomes:
        result["learning_outcomes"] = [{
            "id": o.id, "outcome_code": o.outcome_code, "outcome_text": o.outcome_text,
            "competency": o.competency, "page_reference": o.page_reference,
            "source_excerpt": o.source_excerpt, "verification_status": o.verification_status,
        } for o in n.outcomes]
    return result


@router.get("/documents")
def list_documents(db: Session = Depends(get_db)):
    rows = db.scalars(select(CurriculumDocument).order_by(CurriculumDocument.created_at.desc())).all()
    entry_counts = dict(db.execute(
        select(CurriculumNode.document_id, func.count(CurriculumNode.id))
        .group_by(CurriculumNode.document_id)
    ).all())
    topic_counts = dict(db.execute(
        select(Topic.source_title, func.count(Topic.id))
        .group_by(Topic.source_title)
    ).all())
    question_counts = dict(db.execute(
        select(Question.curriculum_reference, func.count(Question.id))
        .group_by(Question.curriculum_reference)
    ).all())
    result = []
    for document in rows:
        item = _doc_dict(document)
        item["linked_entries"] = int(entry_counts.get(document.id, 0))
        item["linked_topics"] = int(topic_counts.get(document.title, 0))
        item["linked_questions"] = sum(
            int(count) for reference, count in question_counts.items()
            if document.title.casefold() in (reference or "").casefold()
        )
        result.append(item)
    return result


@router.delete("/documents/{document_id}")
def delete_document(document_id: str, db: Session = Depends(get_db)):
    """Delete only an unused source document; never cascade-delete curriculum content."""
    doc = db.get(CurriculumDocument, document_id)
    if not doc:
        raise HTTPException(404, "Curriculum document not found.")

    linked_entries = db.scalar(
        select(func.count(CurriculumNode.id)).where(CurriculumNode.document_id == doc.id)
    ) or 0
    linked_topics = db.scalar(
        select(func.count(Topic.id)).where(Topic.source_title == doc.title)
    ) or 0
    linked_questions = db.scalar(
        select(func.count(Question.id)).where(Question.curriculum_reference.ilike(f"%{doc.title}%"))
    ) or 0
    if linked_entries or linked_topics or linked_questions:
        details = []
        if linked_entries:
            details.append(f"{linked_entries} linked curriculum entr{'y' if linked_entries == 1 else 'ies'}")
        if linked_topics:
            details.append(f"{linked_topics} topic record{'s' if linked_topics != 1 else ''} carrying this source title")
        if linked_questions:
            details.append(f"{linked_questions} generated question record{'s' if linked_questions != 1 else ''} referencing this title")
        raise HTTPException(
            409,
            "This document is still referenced by " + " and ".join(details) +
            ". Remove or reassign those curriculum references first. "
            "The document and its content were not changed."
        )

    stored_name = Path(doc.stored_filename or "").name
    stored_path = STORAGE_DIR / stored_name if stored_name else None

    db.delete(doc)
    db.commit()

    # Remove the stored source file only after the database deletion succeeds.
    if stored_path and stored_path.parent == STORAGE_DIR and stored_path.is_file():
        try:
            stored_path.unlink()
        except OSError:
            # The database record is gone; a leftover file can be cleaned up manually.
            pass

    return {"message": "Unused curriculum source document deleted.", "document_id": document_id}


@router.post("/documents/upload")
async def upload_document(
    file: UploadFile = File(...),
    title: str = Form(""),
    issuing_authority: str = Form("National Curriculum Development Centre"),
    document_type: str = Form("syllabus"),
    education_level: str = Form(""),
    curriculum_version: str = Form(""),
    publication_year: str = Form(""),
    source_url: str = Form(""),
    db: Session = Depends(get_db),
):
    original = Path(file.filename or "curriculum-upload").name
    ext = Path(original).suffix.lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(415, "Supported formats: PDF, DOCX, TXT and MD. Scanned PDFs may require OCR before text can be extracted.")
    content = await file.read(MAX_UPLOAD_BYTES + 1)
    if len(content) > MAX_UPLOAD_BYTES:
        raise HTTPException(413, "File exceeds the 25 MB upload limit.")
    digest = hashlib.sha256(content).hexdigest()
    duplicate = db.scalar(select(CurriculumDocument).where(CurriculumDocument.sha256 == digest))
    if duplicate:
        raise HTTPException(409, f"This exact file is already registered as document {duplicate.id}.")
    STORAGE_DIR.mkdir(parents=True, exist_ok=True)
    stored = f"{uuid.uuid4().hex}{ext}"
    (STORAGE_DIR / stored).write_bytes(content)
    extracted, status = _extract_text(original, content)
    doc = CurriculumDocument(
        title=(title.strip() or Path(original).stem)[:255],
        issuing_authority=issuing_authority.strip()[:150], document_type=document_type.strip()[:60],
        education_level=education_level.strip()[:80], curriculum_version=curriculum_version.strip()[:120],
        publication_year=publication_year.strip()[:20], source_url=source_url.strip(),
        original_filename=original[:255], stored_filename=stored, sha256=digest,
        extracted_text=extracted, extraction_status=status, verification_status="unverified",
    )
    db.add(doc)
    db.commit()
    db.refresh(doc)
    return {"message": "Source document stored. Human verification is required before curriculum entries can be approved.", "document": _doc_dict(doc)}


@router.get("/documents/{document_id}/text")
def get_document_text(document_id: str, db: Session = Depends(get_db)):
    doc = db.get(CurriculumDocument, document_id)
    if not doc:
        raise HTTPException(404, "Curriculum document not found.")
    return {"document_id": doc.id, "title": doc.title, "extraction_status": doc.extraction_status,
            "text": doc.extracted_text or "", "note": "Extracted text is a reading aid, not verified curriculum data. Confirm entries and page references against the original document."}


@router.post("/documents/{document_id}/re-extract")
def re_extract_document(document_id: str, db: Session = Depends(get_db)):
    doc = db.get(CurriculumDocument, document_id)
    if not doc:
        raise HTTPException(404, "Curriculum document not found.")
    path = STORAGE_DIR / doc.stored_filename
    if not path.is_file():
        raise HTTPException(404, "The stored source file is missing. Restore it from your project backup before retrying extraction.")
    content = path.read_bytes()
    extracted, status = _extract_text(doc.original_filename, content)
    doc.extracted_text = extracted
    doc.extraction_status = status
    if status != "extracted":
        doc.verification_status = "unverified"
    db.commit()
    db.refresh(doc)
    return {"message": "Text extraction retried.", "document": _doc_dict(doc)}

@router.post("/documents/{document_id}/review")
def review_document(document_id: str, payload: DocumentReview, db: Session = Depends(get_db)):
    doc = db.get(CurriculumDocument, document_id)
    if not doc:
        raise HTTPException(404, "Curriculum document not found.")
    if payload.decision == "verified" and doc.extraction_status == "failed":
        raise HTTPException(422, "Document text extraction failed. Review the original file and re-upload a readable copy before verification.")
    doc.verification_status = payload.decision
    if payload.decision != "verified":
        affected_nodes = db.scalars(select(CurriculumNode).where(CurriculumNode.document_id == doc.id)).all()
        for node in affected_nodes:
            node.verification_status = payload.decision
            if node.entry_type == "topic":
                existing_topic = db.scalar(select(Topic).where(
                    Topic.grade_id == node.grade_id, Topic.subject_id == node.subject_id,
                    Topic.name.ilike(node.title)))
                if existing_topic:
                    existing_topic.verification_status = payload.decision
            for outcome in db.scalars(select(LearningOutcome).where(LearningOutcome.node_id == node.id)).all():
                outcome.verification_status = payload.decision
    db.commit()
    return _doc_dict(doc)


@router.get("/csv-template")
def csv_template():
    content = (
        "grade_code,subject_name,entry_type,parent_title,title,description,page_reference,source_excerpt,learning_outcome,competency,outcome_code\n"
        "P6,Mathematics,strand,,Number,,12,Exact source wording,,,,\n"
        "P6,Mathematics,topic,Number,Fractions,,13,Exact source wording,Compare fractions,Reason mathematically,LO-01\n"
        "P6,Mathematics,subtopic,Fractions,Equivalent fractions,,14,Exact source wording,,,,\n"
    )
    return StreamingResponse(io.BytesIO(content.encode("utf-8")), media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=sasa-curriculum-import-template.csv"})


@router.post("/documents/{document_id}/import-csv")
async def import_curriculum_csv(document_id: str, file: UploadFile = File(...), db: Session = Depends(get_db)):
    doc = db.get(CurriculumDocument, document_id)
    if not doc:
        raise HTTPException(404, "Curriculum document not found.")
    if doc.verification_status != "verified":
        raise HTTPException(409, "Verify the source document first. Curriculum rows cannot be imported against an unverified source.")
    if Path(file.filename or "").suffix.lower() != ".csv":
        raise HTTPException(415, "Upload a CSV file using the SASA curriculum template.")
    raw = await file.read(5 * 1024 * 1024 + 1)
    if len(raw) > 5 * 1024 * 1024:
        raise HTTPException(413, "CSV exceeds the 5 MB limit.")
    try:
        reader = csv.DictReader(io.StringIO(raw.decode("utf-8-sig")))
    except UnicodeDecodeError:
        raise HTTPException(400, "CSV must be UTF-8 encoded.")
    required = {"grade_code", "subject_name", "entry_type", "title"}
    if not reader.fieldnames or not required.issubset(set(reader.fieldnames)):
        raise HTTPException(400, "CSV requires columns: grade_code, subject_name, entry_type and title. Download the template.")

    created_nodes, created_outcomes, errors = [], [], []
    parent_lookup = {}
    for line_no, row in enumerate(reader, start=2):
        try:
            grade_code = (row.get("grade_code") or "").strip().upper()
            subject_name = (row.get("subject_name") or "").strip()
            entry_type = (row.get("entry_type") or "").strip().lower()
            title = (row.get("title") or "").strip()
            if not title:
                raise ValueError("title is blank")
            grade = db.scalar(select(Grade).where(Grade.code == grade_code))
            subject = _resolve_subject(db, subject_name)
            if not grade or not subject:
                raise ValueError(f"unknown class or subject: {grade_code} / {subject_name}")
            parent_title = (row.get("parent_title") or "").strip()
            parent = None
            if parent_title:
                parent = parent_lookup.get((grade_code, subject.name.casefold(), parent_title.casefold()))
                if parent is None:
                    parent = db.scalar(select(CurriculumNode).where(
                        CurriculumNode.grade_id == grade.id, CurriculumNode.subject_id == subject.id,
                        CurriculumNode.document_id == doc.id, CurriculumNode.title.ilike(parent_title)))
                if parent is None:
                    raise ValueError(f"parent_title '{parent_title}' not found; place parent rows before child rows")
            if entry_type in {"outcome", "learning_outcome"}:
                if not parent:
                    raise ValueError("outcome rows require parent_title pointing to a strand/topic/subtopic")
                outcome = LearningOutcome(node_id=parent.id, outcome_code=(row.get("outcome_code") or "").strip(),
                    outcome_text=title, competency=(row.get("competency") or "").strip(),
                    page_reference=(row.get("page_reference") or "").strip(),
                    source_excerpt=(row.get("source_excerpt") or "").strip(), verification_status="draft")
                db.add(outcome); created_outcomes.append(outcome)
                continue
            if entry_type not in NODE_TYPES:
                raise ValueError(f"entry_type must be one of {sorted(NODE_TYPES)} or outcome")
            node = CurriculumNode(
                grade_id=grade.id, subject_id=subject.id, document_id=doc.id,
                parent_id=parent.id if parent else None, entry_type=entry_type, title=title,
                description=(row.get("description") or "").strip(),
                page_reference=(row.get("page_reference") or "").strip(),
                source_excerpt=(row.get("source_excerpt") or "").strip(), verification_status="draft")
            db.add(node); db.flush()
            parent_lookup[(grade_code, subject.name.casefold(), title.casefold())] = node
            created_nodes.append(node)
            outcome_text = (row.get("learning_outcome") or "").strip()
            if outcome_text:
                outcome = LearningOutcome(node_id=node.id, outcome_code=(row.get("outcome_code") or "").strip(),
                    outcome_text=outcome_text, competency=(row.get("competency") or "").strip(),
                    page_reference=(row.get("page_reference") or "").strip(),
                    source_excerpt=(row.get("source_excerpt") or "").strip(), verification_status="draft")
                db.add(outcome); created_outcomes.append(outcome)
        except Exception as exc:
            errors.append({"row": line_no, "error": str(exc)})
    db.commit()
    return {"message": "CSV import completed. Imported entries are drafts and require review.",
            "document_id": doc.id, "nodes_created": len(created_nodes), "learning_outcomes_created": len(created_outcomes),
            "errors": errors, "rows_with_errors": len(errors)}


@router.post("/entries/delete-bulk")
def delete_entries(payload: BulkDeleteEntries, db: Session = Depends(get_db)):
    unique_ids = list(dict.fromkeys(payload.ids))
    nodes = db.scalars(select(CurriculumNode).where(CurriculumNode.id.in_(unique_ids))).all()
    if len(nodes) != len(unique_ids):
        raise HTTPException(404, "One or more selected curriculum entries could not be found. No entries were deleted.")
    # Include descendants so deleting a parent cannot leave orphaned child entries.
    all_nodes = {node.id: node for node in nodes}
    queue = list(nodes)
    while queue:
        current = queue.pop()
        children = db.scalars(select(CurriculumNode).where(CurriculumNode.parent_id == current.id)).all()
        for child in children:
            if child.id not in all_nodes:
                all_nodes[child.id] = child
                queue.append(child)
    # Delete outcomes explicitly, then child curriculum nodes before their parents.
    for node in all_nodes.values():
        db.query(LearningOutcome).filter(LearningOutcome.node_id == node.id).delete(synchronize_session=False)
        if node.entry_type == "topic":
            topic = db.scalar(select(Topic).where(Topic.grade_id == node.grade_id,
                Topic.subject_id == node.subject_id, Topic.name.ilike(node.title)))
            if topic:
                # Keep topic rows referenced by generated questions, but make them unavailable for new generation.
                topic.verification_status = "unverified"
    # Reverse the collected order so descendants are removed before their parents.
    for node in reversed(list(all_nodes.values())):
        db.delete(node)
    db.commit()
    return {"message": "Selected curriculum entries and their child entries were deleted.",
            "deleted_entries": len(all_nodes)}

@router.get("/entries")
def list_entries(grade_code: str | None = None, subject_name: str | None = None,
                 status: str | None = None, entry_type: str | None = None, db: Session = Depends(get_db)):
    stmt = select(CurriculumNode).options(
        selectinload(CurriculumNode.grade), selectinload(CurriculumNode.subject),
        selectinload(CurriculumNode.document), selectinload(CurriculumNode.parent),
        selectinload(CurriculumNode.outcomes),
    ).order_by(
        CurriculumNode.created_at.desc(),
        CurriculumNode.id.desc(),
    )
    if grade_code:
        grade = db.scalar(select(Grade).where(Grade.code == grade_code.upper()))
        if not grade: return []
        stmt = stmt.where(CurriculumNode.grade_id == grade.id)
    if subject_name:
        subject = _resolve_subject(db, subject_name)
        if not subject: return []
        stmt = stmt.where(CurriculumNode.subject_id.in_(_subject_ids(db, subject)))
    if status: stmt = stmt.where(CurriculumNode.verification_status == status)
    if entry_type: stmt = stmt.where(CurriculumNode.entry_type == entry_type)
    return [_node_dict(n) for n in db.scalars(stmt).all()]


@router.post("/entries/{node_id}/review")
def review_node(node_id: str, payload: NodeReview, db: Session = Depends(get_db)):
    node = db.scalar(select(CurriculumNode).options(
        selectinload(CurriculumNode.grade), selectinload(CurriculumNode.subject),
        selectinload(CurriculumNode.document), selectinload(CurriculumNode.parent),
        selectinload(CurriculumNode.outcomes),
    ).where(CurriculumNode.id == node_id))
    if not node: raise HTTPException(404, "Curriculum entry not found.")
    if payload.decision == "verified" and node.document.verification_status != "verified":
        raise HTTPException(409, "Verify the source document before approving its curriculum entries.")
    if payload.decision == "verified" and node.parent and node.parent.verification_status != "verified":
        raise HTTPException(409, "Verify the parent strand/theme/topic before approving this child entry.")
    if payload.decision == "verified" and not (node.page_reference.strip() or node.source_excerpt.strip()):
        raise HTTPException(422, "Add a source page/section reference or exact source excerpt before verifying this entry.")
    node.verification_status = payload.decision
    node.reviewer_name = payload.reviewer_name
    node.review_notes = payload.notes
    if node.entry_type == "topic":
        existing = db.scalar(select(Topic).where(
            Topic.grade_id == node.grade_id, Topic.subject_id == node.subject_id, Topic.name.ilike(node.title)))
        if payload.decision == "verified":
            if not existing:
                existing = Topic(grade_id=node.grade_id, subject_id=node.subject_id, name=node.title)
                db.add(existing)
            existing.description = node.description
            existing.strand_name = node.parent.title if node.parent and node.parent.entry_type in {"strand", "theme"} else ""
            existing.source_title = node.document.title
            existing.source_url = node.document.source_url
            existing.source_version = node.document.curriculum_version
            existing.source_page = node.page_reference
            existing.verification_status = "verified"
        elif existing:
            existing.verification_status = payload.decision
    db.commit()
    return _node_dict(node)


@router.post("/entries/{node_id}/outcomes")
def add_outcome(node_id: str, payload: OutcomeCreate, db: Session = Depends(get_db)):
    node = db.get(CurriculumNode, node_id)
    if not node: raise HTTPException(404, "Curriculum entry not found.")
    outcome = LearningOutcome(node_id=node.id, outcome_code=payload.outcome_code,
        outcome_text=payload.outcome_text, competency=payload.competency,
        page_reference=payload.page_reference, source_excerpt=payload.source_excerpt,
        verification_status="draft")
    db.add(outcome); db.commit(); db.refresh(outcome)
    return {"id": outcome.id, "node_id": outcome.node_id, "outcome_text": outcome.outcome_text,
            "verification_status": outcome.verification_status}


@router.post("/outcomes/{outcome_id}/review")
def review_outcome(outcome_id: str, payload: OutcomeReview, db: Session = Depends(get_db)):
    outcome = db.get(LearningOutcome, outcome_id)
    if not outcome: raise HTTPException(404, "Learning outcome not found.")
    node = db.get(CurriculumNode, outcome.node_id)
    doc = db.get(CurriculumDocument, node.document_id)
    if payload.decision == "verified" and (doc.verification_status != "verified" or node.verification_status != "verified"):
        raise HTTPException(409, "Verify the source document and parent curriculum entry before approving this outcome.")
    if payload.decision == "verified" and not (outcome.page_reference.strip() or outcome.source_excerpt.strip()):
        raise HTTPException(422, "Add a source page/section reference or exact source excerpt before verifying this outcome.")
    outcome.verification_status = payload.decision
    outcome.reviewer_name = payload.reviewer_name
    outcome.review_notes = payload.notes
    db.commit()
    return {"id": outcome.id, "node_id": outcome.node_id, "outcome_text": outcome.outcome_text,
            "verification_status": outcome.verification_status, "reviewer_name": outcome.reviewer_name}


@router.get("/summary")
def curriculum_summary(db: Session = Depends(get_db)):
    docs = db.scalars(select(CurriculumDocument)).all()
    nodes = db.scalars(select(CurriculumNode)).all()
    outcomes = db.scalars(select(LearningOutcome)).all()
    return {
        "documents": len(docs), "documents_verified": sum(d.verification_status == "verified" for d in docs),
        "entries": len(nodes), "entries_verified": sum(n.verification_status == "verified" for n in nodes),
        "learning_outcomes": len(outcomes), "learning_outcomes_verified": sum(o.verification_status == "verified" for o in outcomes),
        "note": "Counts describe imported records, not total NCDC curriculum coverage.",
    }
