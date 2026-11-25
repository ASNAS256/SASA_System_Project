# SASA EduAssess Uganda

AI-assisted teaching, curriculum intelligence and assessment for Uganda's NCDC/UNEB classrooms.

Teachers pick a class, subject and **verified** curriculum topic, generate draft questions (with marking guides and Bloom levels), review them into a question bank, and assemble examination papers exported as student and teacher PDFs. Curriculum content is imported from official NCDC source documents, extracted, reviewed and verified before the AI may use it.

---

## 1. Repository layout

```text
SASA_System_Project/
├── backend/                  FastAPI + SQLAlchemy API (SQLite by default)
│   ├── app/
│   │   ├── main.py           API entry point
│   │   ├── routers/          curriculum.py, prompt_studio.py
│   │   ├── services/         question_generator.py, ai_client.py
│   │   ├── seed.py           class/subject catalogue seeding
│   │   └── database.py       engine, session, migrate_schema()
│   ├── storage/              uploaded curriculum + prompt-studio files (git-ignored)
│   └── requirements.txt
├── frontend/                 Next.js (App Router, TypeScript)
│   └── src/app/
│       ├── page.tsx               landing page
│       ├── workspace/page.tsx     teacher workspace (question bank, papers)
│       ├── curriculum/page.tsx    Curriculum Content Manager
│       └── prompt-studio/page.tsx AI Prompt Studio
├── infrastructure/           optional PostgreSQL/pgvector compose file
├── curriculum_import_template.csv
├── render.yaml               Render deployment scaffold (API)
├── DEPLOYMENT_READINESS.md   what must be fixed before public deployment
└── INSTALLATION_AND_NOTES.txt release notes
```

The application runs as **two processes**: the FastAPI backend and the Next.js frontend. There is no single-container dev command — run both, or use `render.yaml` for the API in deployment.

---

## 2. Prerequisites

| Requirement | Version used                | Notes                     |
| ----------- | --------------------------- | ------------------------- |
| Python      | 3.12 or newer (3.14 tested) | Creates `backend/venv`  |
| Node.js     | 20 or newer (24 tested)     | Runs the Next.js frontend |
| Git         | any recent                  | To clone and update       |

Docker is **optional**. It is only needed if you switch from SQLite to PostgreSQL (`infrastructure/docker-compose.yml`).

---

## 3. First-time setup

### 3.1 Clone

```powershell
git clone https://github.com/ASNAS256/SASA_System_Project.git
cd SASA_System_Project
```

### 3.2 Backend

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1        # macOS/Linux: source venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Create the environment file from the committed template:

```powershell
Copy-Item .env.example .env        # macOS/Linux: cp .env.example .env
```

Then edit `backend/.env` and choose **one** AI provider:

| Provider | Settings                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| OpenAI   | `AI_PROVIDER=openai`, `OPENAI_API_KEY=sk-...`, `OPENAI_MODEL=gpt-4.1-mini`                                                     |
| DeepSeek | `AI_PROVIDER=deepseek`, `DEEPSEEK_API_KEY=...`, `DEEPSEEK_BASE_URL=https://api.deepseek.com`, `DEEPSEEK_MODEL=deepseek-chat` |

With no key configured the API still runs: question generation falls back to clearly-labelled demo items instead of failing.

Seed the class and subject catalogue (safe to re-run; it never deletes existing data):

```powershell
python -m app.seed
```

### 3.3 Frontend

```powershell
cd ..\frontend
npm install
Copy-Item .env.local.example .env.local    # optional
```

`NEXT_PUBLIC_API_URL` defaults to `http://127.0.0.1:8000`, so `.env.local` is only needed if the API runs elsewhere.

> **Next.js version:** `package.json` requires `next@^16.4.6`. Versions 16.0.0–16.4.4 are affected by published security advisories (and `next dev` exits on startup, see §6). If a stale lock file ever resolves an older build, run `npm install next@latest`.

---

## 4. Running the application

Open **two** terminals from the repository root.

**Terminal 1 — backend**

```powershell
cd backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload --port 8000
```

**Terminal 2 — frontend**

```powershell
cd frontend
npm run dev
```

`uvicorn --reload` and `next dev` both auto-reload on file changes during development.

### Where things are

| Page                                      | URL                                                 |
| ----------------------------------------- | --------------------------------------------------- |
| Landing page                              | http://localhost:3000                               |
| Teacher workspace                         | http://localhost:3000/workspace                     |
| Curriculum Content Manager                | http://localhost:3000/curriculum                    |
| AI Prompt Studio (tab: **SASA AI**) | http://localhost:3000/prompt-studio                 |
| API root / docs                           | http://127.0.0.1:8000 · http://127.0.0.1:8000/docs |
| Health check                              | http://127.0.0.1:8000/health                        |

### Production build (frontend)

```powershell
cd frontend
npm run build
npm run start
```

---

## 5. Verify the stack is healthy

```powershell
Invoke-RestMethod http://127.0.0.1:8000/health
Invoke-RestMethod http://127.0.0.1:8000/api/v1/curriculum/summary
```

* `/health` must return `status: healthy` (it also reports the API build version).
* `/api/v1/curriculum/summary` returns counts of imported documents, entries and learning outcomes. Non-zero counts mean the database is populated; a fresh database legitimately reports zeros until you import a curriculum source.

Then confirm both ports are actually bound:

```powershell
Get-NetTCPConnection -State Listen -LocalPort 3000,8000 |
  Select-Object LocalPort, OwningProcess
```

---

## 6. Troubleshooting

| Symptom                                                                                   | Cause and fix                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Browser says **"site can't be reached"** although the terminal printed `✓ Ready` | `next dev` on Next.js 16.0.0–16.4.4 starts, prints `Ready`, then **exits** to show an upgrade advisory, so port 3000 is never served. Upgrade (`npm install next@latest`) and re-run `npm run dev`. |
| Frontend loads but every panel says "Backend unavailable"                                 | Backend not running, or `NEXT_PUBLIC_API_URL` points elsewhere. Check `http://127.0.0.1:8000/health`.                                                                                                          |
| `Port 3000/8000 is already in use`                                                      | Stop the old process: `Get-NetTCPConnection -State Listen -LocalPort 8000                                                                                                                                          |
| `.\venv\Scripts\Activate.ps1` is blocked                                                | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`, then activate again.                                                                                                                               |
| Backend ignores `.env`                                                                  | Uvicorn must be started **from `backend/`** — the settings file is resolved relative to the working directory.                                                                                            |
| AI errors / empty generations                                                             | `AI_PROVIDER` and the matching key must agree (see §3.2). Restart the backend after editing `.env`.                                                                                                           |
| `ModuleNotFoundError` in the API                                                        | The virtual environment is not activated, or dependencies are stale: `pip install -r requirements.txt`.                                                                                                          |
| CORS error in the browser console                                                         | `FRONTEND_ORIGIN` must match the browser origin (default `http://localhost:3000`).                                                                                                                             |
| Need a clean database                                                                     | Stop the backend, delete `backend/sasa_eduassess.db`, run `python -m app.seed` again. **This deletes all questions, papers and curriculum records.**                                                     |

---

## 7. Curriculum workflow (why content must be verified)

1. Register an official NCDC source document (PDF, DOCX, TXT or Markdown; 25 MB limit).
2. Extract selectable text (scanned PDFs need external OCR — not included).
3. A human reviews the original document and marks the **source** verified.
4. Import structured rows from `curriculum_import_template.csv` (strands → themes → topics → sub-topics → outcomes).
5. Each imported entry and learning outcome starts as a **draft** and must be verified.
6. Only verified **topic** entries reach the question generator.

The system never invents official learning outcomes from a PDF; AI output is always draft material requiring teacher approval. API endpoints and CSV columns are documented in the app's **Curriculum Content Manager** page and in `INSTALLATION_AND_NOTES.txt`.

---

## 8. Optional: PostgreSQL instead of SQLite

```powershell
$env:DB_PASSWORD = "choose-a-password"
docker compose -f infrastructure/docker-compose.yml up -d
```

Then set in `backend/.env`:

```env
DATABASE_URL=postgresql+psycopg://sasa_admin:choose-a-password@localhost:5432/sasa_eduassess
```

Restart the backend and re-run `python -m app.seed`. Schema creation/migration runs automatically on startup.

---

## 9. Security and deployment status

* **Never commit `backend/.env` or `frontend/.env.local`.** They are git-ignored; keep them that way.
* The prototype has **no authentication, roles, tenancy or per-user data isolation**. Do not expose it publicly yet.
* `DEPLOYMENT_READINESS.md` lists the blocking items before a public or high-stakes deployment.
* `render.yaml` deploys the API only; the frontend must be hosted separately.

---

## 10. Release notes

Release-by-release detail lives in [INSTALLATION_AND_NOTES.txt](INSTALLATION_AND_NOTES.txt). In short:

* **v0.1** — class/subject catalogue, AI question generation, question bank, examination papers (PDF export).
* **v0.3–v0.4** — curriculum source registry, document extraction, CSV import, review/verification, Curriculum Content Manager.
* **v1.0** — AI Prompt Studio, provider abstraction (OpenAI/DeepSeek), deployment scaffold, embedded-credential removal.
