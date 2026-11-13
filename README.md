# SASA EduAssess Uganda — Version 0.1

Milestone 0.3 adds a curriculum source registry, document text extraction, structured CSV curriculum import, review/verification workflow, and a dedicated Curriculum Content Manager page. It builds on the v0.2 question-generation and examination-paper features.

> **v0.3.2 production-fix notice:** This package removes the embedded API credential and adds a Render deployment scaffold. It is not approved for public deployment yet. The application still needs registration/login, role-based authorization, per-user data isolation and persistent object storage. See [DEPLOYMENT_READINESS.md](DEPLOYMENT_READINESS.md) before deploying.

## Important: what v0.3 does and does not mean

This release is the **curriculum content management and ingestion system**, not a complete pre-populated transcription of every current NCDC syllabus. The P1–S6 class directory and broad subject catalogue are retained. The existing Mathematics starter topics remain unverified examples. No unverified or invented topic is presented as official curriculum content.

The workflow is:

1. Register and upload an official curriculum source document.
2. Extract selectable text from PDF, DOCX, TXT or Markdown.
3. A human checks the original document, issuing authority, applicable classes, edition and page references, then marks the source verified.
4. Prepare a CSV from the source using the supplied template and import it.
5. Imported strands/themes/topics/subtopics and learning outcomes begin as drafts.
6. A curriculum reviewer verifies each entry and outcome against the original document.
7. Verified topic entries are synchronised into the existing question-generation topic catalogue.

Text extraction is a convenience, not curriculum interpretation. Scanned PDFs may have no extractable text and need OCR; OCR is not included in this release. The system does not automatically infer official learning outcomes from a PDF. This prevents AI extraction errors from silently becoming authoritative curriculum records.

## Requirements

- Windows 11
- Python 3.12 recommended
- Node.js 20 or later (your existing Node 24 is suitable)
- Existing v0.2 project and database

## Upgrade from v0.2 (Windows PowerShell)

1. Stop backend and frontend with `Ctrl+C`.
2. Back up `backend\sasa_eduassess.db`, `backend\.env` and `frontend\.env.local`.
3. Extract this release over the existing `C:\SASA-EduAssess` project folder. Do not delete your existing database or environment files.
4. Install the additional backend dependencies and start the API.

```powershell
cd C:\SASA-EduAssess\backend
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python -m app.seed
uvicorn app.main:app --reload
```

The schema additions are additive. `Base.metadata.create_all` creates the new curriculum tables without deleting existing v0.2 questions, examinations or curriculum topics. The seed command remains safe to rerun. On Render, use `python -m app.seed && uvicorn app.main:app --host 0.0.0.0 --port $PORT` as the start command so the class and subject catalogue is initialized before the API starts.

In a second PowerShell window:

```powershell
cd C:\SASA-EduAssess\frontend
npm install
npm run build
npm run dev
```

Keep the existing `backend\.env` and `frontend\.env.local`. Do not copy the example environment files over them; doing so can overwrite the real OpenAI API key. Never upload or paste `.env` files into chat.

Open:
- Teacher workspace: http://localhost:3000
- Curriculum Content Manager: http://localhost:3000/curriculum
- API: http://127.0.0.1:8000
- API docs: http://127.0.0.1:8000/docs

## Curriculum Content Manager

Use the new **Curriculum Content Manager** link in the teacher workspace or open `/curriculum` directly.

### Supported source files

- PDF (`.pdf`) — selectable text is extracted with pypdf; scanned/image-only PDFs need OCR outside this release.
- Word (`.docx`) — paragraphs and tables are extracted.
- Plain text (`.txt`) and Markdown (`.md`).
- Maximum source upload size: 25 MB.

Files are stored under `backend\storage\curriculum` with generated storage names. Original filenames and SHA-256 hashes are retained in the database. Exact duplicate files are rejected. Uploaded curriculum documents may be copyrighted; ensure you have permission to store and process them. The local storage directory is excluded from Git.

### CSV structure

Download `curriculum_import_template.csv` from the project root or use the template endpoint in the web interface.

Required columns:

- `grade_code`: P1–P7 or S1–S6.
- `subject_name`: must match a subject in the catalogue.
- `entry_type`: `strand`, `theme`, `topic`, `subtopic`, or `outcome`.
- `title`: entry title or exact learning outcome text.
- `parent_title`: parent entry title; parent rows must appear before child rows. Outcome rows require a parent.

Optional columns:

- `description`, `page_reference`, `source_excerpt`, `learning_outcome`, `competency`, `outcome_code`.

A topic row may include a `learning_outcome` in the same row. Alternatively, use a separate `outcome` row whose `parent_title` names the topic/subtopic and whose `title` contains the outcome text. Keep wording faithful to the source. Use the printed page number or another unambiguous page reference.

## Verification sequence

- A source document must be marked `verified` before CSV import is enabled.
- Curriculum nodes and learning outcomes are imported as `draft`.
- A node can be marked verified only if its source document is verified.
- A learning outcome can be marked verified only if its source document and parent node are verified.
- Only a verified `topic` node is synchronised into the legacy topic list used by the AI question generator.

The reviewer actions are local prototype controls; authentication and role-based permissions are not included yet. Do not expose this interface publicly before access controls are implemented.

## New API endpoints

- `GET /api/v1/curriculum/documents`
- `POST /api/v1/curriculum/documents/upload` (multipart file plus source metadata)
- `GET /api/v1/curriculum/documents/{document_id}/text`
- `POST /api/v1/curriculum/documents/{document_id}/review`
- `GET /api/v1/curriculum/csv-template`
- `POST /api/v1/curriculum/documents/{document_id}/import-csv`
- `GET /api/v1/curriculum/entries`
- `POST /api/v1/curriculum/entries/{node_id}/review`
- `POST /api/v1/curriculum/entries/{node_id}/outcomes`
- `POST /api/v1/curriculum/outcomes/{outcome_id}/review`
- `GET /api/v1/curriculum/summary`

Existing v0.2 endpoints for classes, subjects, topics, question generation, question moderation and examination papers remain available.

## Smoke tests

After startup:

```powershell
Invoke-RestMethod http://127.0.0.1:8000/health
Invoke-RestMethod http://127.0.0.1:8000/api/v1/curriculum/summary
```

Expected health version: `0.3.0`. Initially, the curriculum summary may report zero registered source documents and zero imported curriculum entries. This is expected; the v0.2 seed does not invent or bulk-populate NCDC content.

## Known limitations and next work

- No complete verified NCDC curriculum dataset is bundled.
- OCR for scanned PDFs is not included.
- CSV import is the controlled structured ingestion path; there is no automatic AI syllabus parser in this release.
- The prototype has no login, role-based access, school tenancy or audit-grade reviewer identity.
- No external/public deployment or high-stakes exam use until security, permissions, content validation and testing are completed.

Next: collect current official NCDC curriculum documents, build a source inventory, and ingest one level/subject batch at a time. Validate the class/subject applicability, strands, topics, learning outcomes, competencies and page references before marking records verified.
