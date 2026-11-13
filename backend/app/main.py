import json
from io import BytesIO
from xml.sax.saxutils import escape
from fastapi import FastAPI, Depends, HTTPException, Query
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session, selectinload
from sqlalchemy import select
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet

from app.database import Base, engine, get_db, migrate_schema
from app.core.config import settings
from app.models import Grade, Subject, Topic, Question, TeacherReview, Examination, ExaminationQuestion, CurriculumDocument, CurriculumNode, LearningOutcome
from app.schemas import GenerateRequest, ApproveRequest, BuildExaminationRequest
from app.services.question_generator import generate_questions
from app.routers.curriculum import router as curriculum_router
from app.routers.prompt_studio import router as prompt_studio_router


# Subject catalogue aliases. NCDC source spreadsheets commonly label the
# primary/lower-secondary subject simply as "English", while SASA's catalogue
# uses the canonical name "English Language". Resolve both to the same subject.
_SUBJECT_ALIAS_GROUPS = {
    "english language": {"english", "english language"},
}

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
    # Prefer the catalogue's canonical display label when an alias duplicate
    # exists; otherwise use the exact requested match.
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

Base.metadata.create_all(bind=engine)
migrate_schema()

app = FastAPI(title=settings.app_name, description="SASA teaching, curriculum intelligence and assessment API", version="0.3.2")
app.include_router(curriculum_router)
app.include_router(prompt_studio_router)
app.add_middleware(CORSMiddleware, allow_origins=list({settings.frontend_origin, "http://127.0.0.1:3000", "http://localhost:3000"}),
                   allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

def serialize_question(q):
    return {
        "id": q.id, "grade_code": q.grade.code, "subject_name": q.subject.name,
        "topic_name": (q.curriculum_node.title if q.curriculum_node else (q.topic.name if q.topic else None)),
        "curriculum_node_id": q.curriculum_node_id, "question_text": q.question_text,
        "question_type": q.question_type, "difficulty": q.difficulty, "marks": q.marks,
        "expected_answer": q.expected_answer, "marking_guide": q.marking_guide,
        "curriculum_reference": q.curriculum_reference, "source": q.source,
        "approval_status": q.approval_status, "moderation_category": q.moderation_category or "Curriculum", "bloom_level": q.bloom_level,
        "learning_outcome": q.learning_outcome,
        "options": json.loads(q.options_json or "[]"), "explanation": q.explanation,
    }

def serialize_exam(exam):
    return {
        "id": exam.id, "title": exam.title, "grade_code": exam.grade.code,
        "subject_name": exam.subject.name, "duration_minutes": exam.duration_minutes,
        "total_marks": exam.total_marks, "status": exam.status,
        "question_count": len(exam.items),
        "questions": [{"position": item.position, "question": serialize_question(item.question)} for item in exam.items],
    }

@app.get("/")
def root():
    return {"system": settings.app_name, "version": "0.3.2", "docs": "/docs"}

@app.get("/health")
def health():
    return {"status": "healthy", "environment": settings.app_env, "version": "0.3.2"}

@app.get("/api/v1/curriculum/grades")
def grades(db: Session = Depends(get_db)):
    return [{"code": g.code, "name": g.name, "level": g.level} for g in db.scalars(select(Grade).order_by(Grade.code)).all()]

@app.get("/api/v1/curriculum/subjects")
def subjects(db: Session = Depends(get_db)):
    return [{"name": s.name, "catalogue_status": s.catalogue_status} for s in db.scalars(select(Subject).order_by(Subject.name)).all()]

def _curriculum_selection_rows(db: Session, grade: Grade, subject: Subject):
    """Return only verified, source-backed selectable curriculum units and outcomes."""
    subject_ids = _subject_ids(db, subject)
    nodes = db.scalars(select(CurriculumNode).where(
        CurriculumNode.grade_id == grade.id,
        CurriculumNode.subject_id.in_(subject_ids),
        CurriculumNode.verification_status == "verified",
    ).order_by(CurriculumNode.created_at.desc(), CurriculumNode.id.desc())).all()
    docs = {d.id: d for d in db.scalars(select(CurriculumDocument).where(
        CurriculumDocument.verification_status == "verified")).all()}
    nodes = [n for n in nodes if n.document_id in docs]
    # A few records in the supplied database were imported under Mathematics
    # even though their registered source titles identify another subject.
    # Do not surface those as Mathematics curriculum.
    if subject.name.casefold() == "mathematics":
        mismatched_markers = ("integrated science", "social studies", "sst")
        nodes = [n for n in nodes if not any(
            marker in (docs[n.document_id].title or "").casefold()
            for marker in mismatched_markers
        )]
    by_id = {n.id: n for n in nodes}
    children = {}
    for n in nodes:
        if n.parent_id:
            children.setdefault(n.parent_id, []).append(n)

    outcomes = db.scalars(select(LearningOutcome).where(
        LearningOutcome.verification_status == "verified")).all()
    outcomes_by_node = {}
    for outcome in outcomes:
        outcomes_by_node.setdefault(outcome.node_id, []).append(outcome)

    is_thematic_primary = grade.code in {"P1", "P2", "P3"}
    # The P1-P3 English imports can use a thematic learning-area strand as the
    # selectable unit; descendant verified outcomes are collected below.
    allowed_types = {"theme", "topic", "strand"} if is_thematic_primary else {"topic"}
    result = []
    for node in nodes:
        if node.entry_type not in allowed_types:
            continue
        descendant_ids = []
        stack = [node.id]
        while stack:
            current = stack.pop()
            descendant_ids.append(current)
            stack.extend(child.id for child in children.get(current, []))
        verified_outcomes = []
        for node_id in descendant_ids:
            for outcome in outcomes_by_node.get(node_id, []):
                verified_outcomes.append({
                    "id": outcome.id,
                    "outcome_text": outcome.outcome_text,
                    "competency": outcome.competency,
                    "page_reference": outcome.page_reference,
                    "curriculum_node_id": node_id,
                })
        # In P1-P3 the NCDC curriculum is thematic/integrated. Expose a unit
        # only when it has at least one verified outcome on itself or below it.
        if is_thematic_primary and not verified_outcomes:
            continue
        doc = docs[node.document_id]
        parent = by_id.get(node.parent_id) if node.parent_id else None
        result.append({
            "id": node.id,
            "name": node.title,
            "entry_type": node.entry_type,
            "description": node.description,
            "source_title": doc.title,
            "source_url": doc.source_url,
            "source_version": doc.curriculum_version,
            "source_page": node.page_reference,
            "verification_status": node.verification_status,
            "strand_name": parent.title if parent else "",
            "learning_outcomes": verified_outcomes,
        })
    # Avoid duplicate dropdown labels where the same topic was imported from
    # more than one edition/document. Prefer the record with more verified
    # outcomes, then the latest registered source document.
    deduped = {}
    for item in result:
        key = (item["entry_type"], item["name"].casefold())
        previous = deduped.get(key)
        # Nodes are already ordered newest-first. Prefer more verified outcomes;
        # on ties retain the first (newest) registered source document.
        if previous is None or len(item["learning_outcomes"]) > len(previous["learning_outcomes"]):
            deduped[key] = item
    result = list(deduped.values())
    result.sort(key=lambda x: (x["name"].casefold(), x["id"]))
    return result


@app.get("/api/v1/curriculum/topics")
def topics(grade_code: str = Query(...), subject_name: str = "Mathematics", db: Session = Depends(get_db)):
    grade = db.scalar(select(Grade).where(Grade.code == grade_code.upper()))
    subject = _resolve_subject(db, subject_name)
    if not grade or not subject:
        return []
    return _curriculum_selection_rows(db, grade, subject)


@app.post("/api/v1/questions/generate")
def generate(payload: GenerateRequest, db: Session = Depends(get_db)):
    grade = db.scalar(select(Grade).where(Grade.code == payload.grade_code.upper()))
    subject = _resolve_subject(db, payload.subject_name)
    if not grade or not subject:
        raise HTTPException(404, "Grade or subject not found. Run python -m app.seed.")

    selectable = _curriculum_selection_rows(db, grade, subject)
    selectable_by_id = {item["id"]: item for item in selectable}
    node = None
    if payload.curriculum_node_id:
        node = db.get(CurriculumNode, payload.curriculum_node_id)
        if not node or node.id not in selectable_by_id:
            raise HTTPException(422, "Select a verified curriculum topic/theme from the current class and subject.")
    elif payload.topic_name:
        matches = [item for item in selectable if item["name"].casefold() == payload.topic_name.strip().casefold()]
        if len(matches) > 1:
            raise HTTPException(409, "This topic name occurs in more than one source. Refresh the topic list and select the specific curriculum entry.")
        if matches:
            node = db.get(CurriculumNode, matches[0]["id"])
    if not node:
        raise HTTPException(404, f"No verified {subject.name} curriculum units are available for {grade.code}. Check the subject mapping, import the relevant NCDC entries, then verify the curriculum units and their learning outcomes.")

    selected = selectable_by_id[node.id]
    allowed_outcomes = selected["learning_outcomes"]
    outcome = ""
    if payload.learning_outcome_id:
        matched_outcome = next((o for o in allowed_outcomes if o["id"] == payload.learning_outcome_id), None)
        if not matched_outcome:
            raise HTTPException(422, "The selected learning outcome is not verified for this curriculum topic.")
        outcome = matched_outcome["outcome_text"]
    elif payload.learning_outcome.strip():
        matched_outcome = next((o for o in allowed_outcomes if o["outcome_text"].strip().casefold() == payload.learning_outcome.strip().casefold()), None)
        if not matched_outcome:
            raise HTTPException(422, "Only verified learning outcomes linked to the selected curriculum topic can be used.")
        outcome = matched_outcome["outcome_text"]

    doc = db.get(CurriculumDocument, node.document_id)
    hierarchy = []
    current = node
    while current:
        hierarchy.append(current.title)
        current = db.get(CurriculumNode, current.parent_id) if current.parent_id else None
    hierarchy.reverse()
    curriculum_ref = (
        f"Subject: {subject.name} | {doc.title} ({doc.publication_year}; version {doc.curriculum_version}) | "
        f"{ ' > '.join(hierarchy) } | page/section: {node.page_reference} | "
        f"source: {doc.source_url} | document and entry verified"
    )
    legacy_topic = db.scalar(select(Topic).where(
        Topic.grade_id == grade.id, Topic.subject_id.in_(_subject_ids(db, subject)),
        Topic.name.ilike(node.title), Topic.verification_status == "verified"))
    try:
        generated, source = generate_questions(
            node.title, grade.name, payload.number_of_questions, payload.difficulty,
            payload.question_type, payload.context, curriculum_ref,
            payload.bloom_level, outcome, subject.name
        )
    except Exception as exc:
        raise HTTPException(502, f"Generation failed: {str(exc)}")
    saved = []
    for item in generated:
        q = Question(
            grade_id=grade.id, subject_id=subject.id,
            topic_id=legacy_topic.id if legacy_topic else None,
            curriculum_node_id=node.id,
            question_text=item["question_text"], question_type=item["question_type"],
            difficulty=item["difficulty"], marks=float(item["marks"]),
            expected_answer=item.get("expected_answer", "") if payload.include_answers else "",
            marking_guide=item.get("marking_guide", "") if payload.include_answers else "",
            curriculum_reference=curriculum_ref, source=source, approval_status="pending",
            moderation_category="Demo/Test" if source == "demo_ai" else "Curriculum",
            bloom_level=item.get("bloom_level", "understand"),
            learning_outcome=outcome,  # persist only the teacher-selected verified outcome; never AI-invented alignment
            options_json=json.dumps(item.get("options", [])),
            explanation=item.get("explanation", "") if payload.include_answers else "",
        )
        db.add(q)
        saved.append(q)
    db.commit()
    for q in saved:
        db.refresh(q)
    return {"message": "Draft questions generated from verified curriculum content. Teacher review is required.",
            "source": source, "count": len(saved), "questions": [serialize_question(q) for q in saved]}

@app.get("/api/v1/questions")
def list_questions(grade_code: str | None = None, subject_name: str | None = None,
                   status: str | None = None, category: str | None = None,
                   db: Session = Depends(get_db)):
    stmt = select(Question).options(
        selectinload(Question.grade), selectinload(Question.subject), selectinload(Question.topic),
        selectinload(Question.curriculum_node)
    ).order_by(Question.created_at.desc())
    if grade_code:
        g = db.scalar(select(Grade).where(Grade.code == grade_code.upper()))
        if not g:
            return []
        stmt = stmt.where(Question.grade_id == g.id)
    if subject_name:
        s = _resolve_subject(db, subject_name)
        if not s:
            return []
        stmt = stmt.where(Question.subject_id.in_(_subject_ids(db, s)))
    if status and status != "All":
        if status not in {"pending", "approved", "rejected"}:
            raise HTTPException(422, "Status must be pending, approved or rejected.")
        stmt = stmt.where(Question.approval_status == status)
    if category and category != "All":
        if category not in {"Curriculum", "Demo/Test", "Supplementary", "Archived"}:
            raise HTTPException(422, "Unknown question category.")
        stmt = stmt.where(Question.moderation_category == category)
    return [serialize_question(q) for q in db.scalars(stmt).all()]

@app.post("/api/v1/questions/{question_id}/approve")
def approve(question_id: str, payload: ApproveRequest, db: Session = Depends(get_db)):
    q = db.scalar(select(Question).options(
        selectinload(Question.grade), selectinload(Question.subject), selectinload(Question.topic),
        selectinload(Question.curriculum_node)
    ).where(Question.id == question_id))
    if not q:
        raise HTTPException(404, "Question not found.")
    q.approval_status = payload.decision
    db.add(TeacherReview(question_id=q.id, reviewer_name=payload.reviewer_name,
                         decision=payload.decision, comments=payload.comments))
    db.commit()
    db.refresh(q)
    return serialize_question(q)


class QuestionCategoryUpdate(BaseModel):
    category: str


class BulkQuestionDelete(BaseModel):
    ids: list[str] = Field(min_length=1, max_length=500)


ALLOWED_QUESTION_CATEGORIES = {"Curriculum", "Demo/Test", "Supplementary", "Archived"}


@app.patch("/api/v1/questions/{question_id}/category")
def update_question_category(question_id: str, payload: QuestionCategoryUpdate, db: Session = Depends(get_db)):
    if payload.category not in ALLOWED_QUESTION_CATEGORIES:
        raise HTTPException(422, f"Category must be one of: {', '.join(sorted(ALLOWED_QUESTION_CATEGORIES))}.")
    question = db.get(Question, question_id)
    if not question:
        raise HTTPException(404, "Question not found.")
    question.moderation_category = payload.category
    db.commit()
    return {"id": question.id, "moderation_category": question.moderation_category}


def _delete_questions_safely(question_ids: list[str], db: Session):
    unique_ids = list(dict.fromkeys(question_ids))
    found = db.scalars(select(Question).where(Question.id.in_(unique_ids))).all()
    found_ids = {q.id for q in found}
    missing = [qid for qid in unique_ids if qid not in found_ids]
    if missing:
        raise HTTPException(404, f"Question(s) not found: {', '.join(missing[:10])}")
    linked = set(db.scalars(select(ExaminationQuestion.question_id).where(
        ExaminationQuestion.question_id.in_(unique_ids)
    )).all())
    if linked:
        raise HTTPException(409, {
            "message": "Some selected questions are already used in examination papers and were not deleted.",
            "protected_question_ids": sorted(linked),
        })
    db.query(TeacherReview).filter(TeacherReview.question_id.in_(unique_ids)).delete(synchronize_session=False)
    for question in found:
        db.delete(question)
    db.commit()
    return {"message": "Questions deleted.", "deleted_count": len(found), "ids": unique_ids}


@app.delete("/api/v1/questions/{question_id}")
def delete_question(question_id: str, db: Session = Depends(get_db)):
    return _delete_questions_safely([question_id], db)


@app.post("/api/v1/questions/bulk-delete")
def bulk_delete_questions(payload: BulkQuestionDelete, db: Session = Depends(get_db)):
    return _delete_questions_safely(payload.ids, db)


@app.post("/api/v1/examinations/build")
def build_examination(payload: BuildExaminationRequest, db: Session = Depends(get_db)):
    grade = db.scalar(select(Grade).where(Grade.code == payload.grade_code.upper()))
    subject = _resolve_subject(db, payload.subject_name)
    if not grade or not subject:
        raise HTTPException(404, "Class or subject not found.")
    stmt = select(Question).options(
        selectinload(Question.grade), selectinload(Question.subject), selectinload(Question.topic)
    ).where(
        Question.grade_id == grade.id,
        Question.subject_id == subject.id,
        Question.approval_status == "approved",
    ).order_by(Question.created_at.asc())
    if payload.difficulty != "any":
        stmt = stmt.where(Question.difficulty == payload.difficulty)
    if payload.bloom_levels:
        stmt = stmt.where(Question.bloom_level.in_(payload.bloom_levels))
    if payload.topic_names:
        stmt = stmt.join(Topic, Question.topic_id == Topic.id).where(Topic.name.in_(payload.topic_names))
    candidates = db.scalars(stmt).unique().all()

    target = int(round(payload.total_marks * 100))
    dp = {0: []}
    for q in candidates:
        value = int(round(float(q.marks) * 100))
        if value <= 0 or value > target:
            continue
        for subtotal in sorted(list(dp.keys()), reverse=True):
            new_total = subtotal + value
            if new_total <= target and new_total not in dp:
                dp[new_total] = dp[subtotal] + [q]
        if target in dp:
            break
    if target not in dp:
        available = sum(float(q.marks) for q in candidates)
        raise HTTPException(
            422,
            f"Could not assemble exactly {payload.total_marks:g} marks from approved questions matching these filters. "
            f"Found {len(candidates)} eligible questions ({available:g} marks in total). Approve or generate more suitable questions."
        )
    selected = dp[target]
    exam = Examination(title=payload.title, grade_id=grade.id, subject_id=subject.id,
                       duration_minutes=payload.duration_minutes, total_marks=payload.total_marks, status="draft")
    db.add(exam)
    db.flush()
    for position, q in enumerate(selected, start=1):
        db.add(ExaminationQuestion(examination_id=exam.id, question_id=q.id, position=position))
    db.commit()
    exam = db.scalar(select(Examination).options(
        selectinload(Examination.grade), selectinload(Examination.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.grade),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.topic),
    ).where(Examination.id == exam.id))
    return {"message": "Draft examination assembled from approved questions.",
            "examination": serialize_exam(exam)}

@app.get("/api/v1/examinations")
def list_examinations(db: Session = Depends(get_db)):
    rows = db.scalars(select(Examination).options(
        selectinload(Examination.grade), selectinload(Examination.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.grade),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.topic),
    ).order_by(Examination.created_at.desc())).all()
    return [serialize_exam(e) for e in rows]

def make_pdf(story, filename):
    buf = BytesIO()
    doc = SimpleDocTemplate(buf, pagesize=A4, title=filename)
    doc.build(story)
    buf.seek(0)
    return buf

def safe_paragraph(value):
    return escape(str(value or "")).replace("\n", "<br/>")

@app.get("/api/v1/questions/{question_id}/paper.pdf")
def question_pdf(question_id: str, teacher_copy: bool = True, db: Session = Depends(get_db)):
    q = db.scalar(select(Question).options(
        selectinload(Question.grade), selectinload(Question.subject), selectinload(Question.topic)
    ).where(Question.id == question_id))
    if not q:
        raise HTTPException(404, "Question not found.")
    styles = getSampleStyleSheet()
    story = [Paragraph("SASA", styles["Title"]),
        Paragraph(safe_paragraph(f"{q.grade.name} | {q.subject.name} | {q.curriculum_node.title if q.curriculum_node else (q.topic.name if q.topic else '')}"), styles["Heading2"]),
        Spacer(1, 12), Paragraph(f"Question ({q.marks:g} marks)", styles["Heading3"]),
        Paragraph(safe_paragraph(q.question_text), styles["BodyText"])]
    if teacher_copy:
        story += [Spacer(1, 14), Paragraph("Teacher copy — suggested answer and marking guide", styles["Heading2"]),
            Paragraph(safe_paragraph(q.expected_answer), styles["BodyText"]),
            Paragraph(safe_paragraph(q.marking_guide), styles["BodyText"])]
    story += [Spacer(1, 12), Paragraph(safe_paragraph(f"Status: {q.approval_status} | Source: {q.curriculum_reference}"), styles["Italic"])]
    buf = make_pdf(story, "SASA question")
    return StreamingResponse(buf, media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="sasa-question-{q.id[:8]}.pdf"'})

@app.get("/api/v1/examinations/{examination_id}/paper.pdf")
def examination_pdf(examination_id: str, teacher_copy: bool = False, db: Session = Depends(get_db)):
    exam = db.scalar(select(Examination).options(
        selectinload(Examination.grade), selectinload(Examination.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.grade),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.subject),
        selectinload(Examination.items).selectinload(ExaminationQuestion.question).selectinload(Question.topic),
    ).where(Examination.id == examination_id))
    if not exam:
        raise HTTPException(404, "Examination not found.")
    styles = getSampleStyleSheet()
    story = [Paragraph("SASA", styles["Title"]),
        Paragraph(safe_paragraph(exam.title), styles["Heading1"]),
        Paragraph(safe_paragraph(f"{exam.grade.name} | {exam.subject.name} | Duration: {exam.duration_minutes} minutes | Total: {exam.total_marks:g} marks"), styles["Heading2"]),
        Spacer(1, 16), Paragraph("Instructions: Answer all questions. Show your working where applicable.", styles["BodyText"]), Spacer(1, 12)]
    for item in exam.items:
        q = item.question
        story.append(Paragraph(safe_paragraph(f"{item.position}. {q.question_text} ({q.marks:g} marks)"), styles["BodyText"]))
        if q.question_type == "multiple_choice":
            for option_index, option in enumerate(json.loads(q.options_json or "[]")):
                story.append(Paragraph(safe_paragraph(f"{chr(65 + option_index)}. {option}"), styles["BodyText"]))
        story.append(Spacer(1, 12))
        if teacher_copy:
            story.append(Paragraph(safe_paragraph(f"Suggested answer: {q.expected_answer}"), styles["BodyText"]))
            story.append(Paragraph(safe_paragraph(f"Marking guide: {q.marking_guide}"), styles["BodyText"]))
            story.append(Spacer(1, 8))
    if teacher_copy:
        story.append(PageBreak())
        story.append(Paragraph("Teacher marking information", styles["Heading1"]))
        story.append(Paragraph("This is an AI-assisted draft paper. Check every item and marking allocation before use.", styles["BodyText"]))
    buf = make_pdf(story, "SASA examination")
    suffix = "teacher" if teacher_copy else "student"
    return StreamingResponse(buf, media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="sasa-exam-{exam.id[:8]}-{suffix}.pdf"'})
