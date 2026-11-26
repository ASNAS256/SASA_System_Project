"""Shared retrieval (RAG) helpers.

Used by both SASA AI (Prompt Studio) and the Teacher Workspace question generator, so that
documents uploaded in either place form ONE knowledge base.
"""
import io
import re
from pathlib import Path

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import PromptStudioDocument, CurriculumDocument

ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt", ".md"}
DOCUMENT_SOURCE_TYPES = {"lesson_note", "scheme_of_work", "past_paper", "reference_material", "other"}


def extract_text(filename: str, content: bytes) -> tuple[str, str]:
    ext = Path(filename).suffix.lower()
    if ext in {".txt", ".md"}:
        return content.decode("utf-8-sig", errors="replace"), "extracted"
    if ext == ".pdf":
        try:
            from pypdf import PdfReader
            reader = PdfReader(io.BytesIO(content))
            parts = [f"\n\n[PAGE {i}]\n{page.extract_text() or ''}" for i, page in enumerate(reader.pages, 1)]
            value = "".join(parts).strip()
            return value, "extracted" if value else "no_text_found"
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
            value = "\n".join(parts)
            return value, "extracted" if value else "no_text_found"
        except Exception as exc:
            return f"Extraction failed: {exc}", "failed"
    return "", "unsupported"


def split_chunks(text: str, size: int = 1400, overlap: int = 180):
    text = re.sub(r"[ \t]+", " ", text or "").strip()
    if not text:
        return []
    chunks, start = [], 0
    while start < len(text):
        end = min(len(text), start + size)
        if end < len(text):
            boundary = max(text.rfind("\n", start, end), text.rfind(". ", start, end))
            if boundary > start + size // 2:
                end = boundary + 1
        chunk = text[start:end].strip()
        if chunk:
            page = ""
            match = re.search(r"\[PAGE\s+(\d+)\]", chunk, re.I)
            if match:
                page = f"Page {match.group(1)}"
            chunks.append((chunk, page))
        if end >= len(text):
            break
        start = max(start + 1, end - overlap)
    return chunks


def tokens(value: str):
    words = {w for w in re.findall(r"[a-zA-Z0-9']+", (value or "").casefold()) if len(w) > 2}
    # Small deterministic normalisation handles common English plurals and
    # inflections without requiring an additional NLP dependency.
    normalised = set()
    for word in words:
        token = word
        if len(token) > 5 and token.endswith("ies"):
            token = token[:-3] + "y"
        elif len(token) > 4 and token.endswith("es"):
            token = token[:-2]
        elif len(token) > 4 and token.endswith("s") and not token.endswith("ss"):
            token = token[:-1]
        elif len(token) > 6 and token.endswith("ing"):
            token = token[:-3]
        elif len(token) > 5 and token.endswith("ed"):
            token = token[:-2]
        normalised.add(token)
    return normalised


def same_subject(left: str, right: str) -> bool:
    normalise = lambda value: " ".join((value or "").casefold().replace("&", "and").split())
    a, b = normalise(left), normalise(right)
    return a == b or {a, b} == {"english", "english language"}


def retrieve(db: Session, query: str, limit: int = 7):
    qtokens = tokens(query)
    if not qtokens:
        return []
    candidates = []
    docs = db.scalars(select(PromptStudioDocument).where(
        PromptStudioDocument.extraction_status == "extracted"
    ).order_by(PromptStudioDocument.created_at.desc())).all()
    for doc in docs:
        for chunk in doc.chunks:
            words = tokens(chunk.content)
            overlap = len(qtokens & words)
            title_overlap = len(qtokens & tokens(doc.title))
            if overlap or title_overlap:
                score = overlap / max(1, len(qtokens)) + (0.18 * title_overlap)
                candidates.append((score, {
                    "document_id": doc.id, "title": doc.title, "page_reference": chunk.page_reference,
                    "content": chunk.content[:2600], "source_type": doc.source_type,
                }))
    # Verified NCDC source documents are also part of the retrieval corpus.
    verified_docs = db.scalars(select(CurriculumDocument).where(
        CurriculumDocument.verification_status == "verified",
        CurriculumDocument.extraction_status == "extracted",
    )).all()
    for doc in verified_docs:
        for index, (content, page) in enumerate(split_chunks(doc.extracted_text, 1200, 120)):
            overlap = len(qtokens & tokens(content))
            if overlap:
                score = overlap / max(1, len(qtokens)) + 0.08
                candidates.append((score, {
                    "document_id": doc.id, "title": doc.title, "page_reference": page or f"Extract {index+1}",
                    "content": content[:2400], "source_type": "verified_curriculum",
                }))
    if not candidates and re.search(r"\\b(notes?|uploaded|lesson|documents?|materials?|files?)\\b", query, re.I):
        for doc in docs[:3]:
            for chunk in doc.chunks[:2]:
                candidates.append((0.01, {
                    "document_id": doc.id, "title": doc.title, "page_reference": chunk.page_reference,
                    "content": chunk.content[:2600], "source_type": doc.source_type,
                }))
    candidates.sort(key=lambda x: x[0], reverse=True)
    seen, result = set(), []
    for score, item in candidates:
        key = (item["document_id"], item["page_reference"], item["content"][:100])
        if key in seen:
            continue
        seen.add(key)
        item["score"] = round(score, 4)
        result.append(item)
        if len(result) >= limit:
            break
    return result
