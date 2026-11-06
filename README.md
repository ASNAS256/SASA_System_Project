# SASA-EduAssess

**An Intelligent Educational Assessment and Management System**
---
## 1. Project Overview

SASA-EduAssess is an educational assessment and management system designed to support the creation, management, administration, and analysis of educational assessments.

This project uses a modern technology stack comprising FastAPI, Next.js, PostgreSQL, Redis, and Docker.

## 2. Prerequisites

Before installing and running the project, ensure that the following software is installed on your computer.

### Software Requirements (Version 1)

| Software | Purpose |
|---|---|
| Visual Studio Code | Code editor and development environment |
| Python 3.12+ | Backend development |
| Node.js (LTS) | Frontend development |
| Docker Desktop | Container management and services |
| Git | Version control and repository cloning |

### Recommended Downloads

- [Visual Studio Code](https://code.visualstudio.com/)
- [Python](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads/)

---

## 3. Installation and Setup

Follow the steps below to set up the development environment.

### Step 1: Clone the Repository

Clone the project from its Git repository:

```bash
git clone <REPOSITORY_URL>
```

Navigate into the project directory:

```bash
cd SASA-EduAssess
```

### Step 2: Set Up the Backend Virtual Environment

Navigate to the backend directory:

```powershell
cd backend
```

Create a Python virtual environment:

```powershell
python -m venv venv
```

Activate the virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

**If PowerShell prevents virtual environment activation**, execute:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then activate the environment again:

```powershell
.\venv\Scripts\Activate.ps1
```

### Step 3: Install Backend Dependencies

With the virtual environment activated, install the required Python packages:

```bash
pip install fastapi "uvicorn[standard]"
pip install sqlalchemy alembic "psycopg[binary]"
pip install pydantic pydantic-settings
pip install openai
pip install pgvector
pip install python-multipart
pip install "passlib[bcrypt]"
pip install pytest httpx
pip install celery redis
pip install reportlab
```

### Step 4: Generate the Requirements File

Freeze the installed dependencies into a `requirements.txt` file:

```bash
pip freeze > requirements.txt
```

This file records the installed package versions for consistent environment setup.

For subsequent installations, use:

```bash
pip install -r requirements.txt
```

### Step 5: Set Up the Next.js Frontend

Return to the project root directory:

```powershell
cd ..
```

Create the Next.js frontend application:

```bash
npx create-next-app@latest frontend
```

During installation, select the following configuration:

| Configuration | Selection |
|---|---|
| TypeScript | Yes |
| ESLint | Yes |
| Tailwind CSS | Yes |
| App Router | Yes |
| Source Directory | Yes |
| Import Alias | @/* |

### Step 6: Install Additional Frontend Packages

Navigate into the frontend directory:

```bash
cd frontend
```

Install the required packages:

**Icons**
```bash
npm install lucide-react
```

**API Communication**
```bash
npm install axios
```

**Form Management and Validation**
```bash
npm install react-hook-form zod
```

**Data Fetching and State Management**
```bash
npm install @tanstack/react-query
```

**Charts and Data Visualization**
```bash
npm install recharts
```

**Local Database Storage**
```bash
npm install dexie
```

### Step 7: Start Infrastructure Services

Navigate to the infrastructure directory:

```powershell
cd ..
cd infrastructure
```

Start the required Docker services:

```bash
docker compose up -d
```

Verify that the containers are running:

```bash
docker ps
```

You should see the following services running:

- PostgreSQL – Relational database management.
- Redis – In-memory data store and task queue support.

Ensure Docker Desktop is running before executing these commands.

### Step 8: Configure Backend Environment Variables

Navigate to the backend directory:

```powershell
cd ..\backend
```

Locate the `.env` configuration file:

```text
backend/.env
```

Open the file using Visual Studio Code and configure the required environment variables.

**OpenAI API Configuration**

Locate the placeholder:

```env
OPENAI_API_KEY=your_ope_ai_api_key_here
```

Replace the placeholder with your actual OpenAI API key:

```env
OPENAI_API_KEY=your_actual_openai_api_key
```

Ensure that all other required environment variables, including database and Redis connection settings, are correctly configured.

**Important:** Never commit your `.env` file or expose your API keys publicly. Keep sensitive credentials private.

---

## 4. Running the Application

Once installation and configuration are complete, you can start the backend and frontend services.

### 4.1 Start the Backend Server

Open a terminal in Visual Studio Code.

Navigate to the backend directory:

```powershell
cd SASA-EduAssess\backend
```

Activate the virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

Start the FastAPI development server:

```bash
uvicorn app.main:app --reload
```

The backend API should be accessible at:

- **API Base URL:** http://127.0.0.1:8000
- **Swagger API Documentation:** http://127.0.0.1:8000/docs
- **ReDoc Documentation:** http://127.0.0.1:8000/redoc

### 4.2 Start the Frontend Server

Open another terminal in Visual Studio Code.

Navigate to the frontend directory:

```powershell
cd C:\SASA-EduAssess\frontend
```

Install the frontend dependencies:

```bash
npm install
```

Create the frontend environment configuration file:

```powershell
Copy-Item .env.local.example .env.local
```

Update `.env.local` with the appropriate frontend configuration values.

Start the Next.js development server:

```bash
npm run dev
```

The frontend application should now be accessible at:

**http://localhost:3000**

---

## 5. Technology Stack

| Component | Technology |
|---|---|
| Frontend Framework | Next.js |
| Programming Language | TypeScript |
| Styling | Tailwind CSS |
| Backend Framework | FastAPI |
| Backend Language | Python |
| Database | PostgreSQL |
| Database Migrations | Alembic |
| Vector Database Extension | pgvector |
| Cache and Message Broker | Redis |
| Background Task Processing | Celery |
| API Communication | Axios |
| Data Fetching | TanStack Query |
| Form Validation | React Hook Form and Zod |
| Data Visualization | Recharts |
| Containerization | Docker |
| AI Integration | OpenAI API |

---

## 6. Project Structure

The project follows a modular architecture with separate frontend, backend, and infrastructure directories.

```text
SASA-EduAssess/
│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── venv/
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env.local
│   ├── package.json
│   └── next.config.ts
│
├── infrastructure/
│   └── docker-compose.yml
│
└── README.md
```

*Note: The structure above represents the initial development layout. Additional modules and directories may be introduced as development progresses.*

---

## 7. Common Troubleshooting

| Problem | Recommended Solution |
|---|---|
| Python command not recognized | Install Python and ensure it is added to PATH. |
| Virtual environment activation blocked | Run the PowerShell execution policy command provided above. |
| Docker containers not starting | Ensure Docker Desktop is running. |
| PostgreSQL connection failure | Verify database credentials and container status. |
| Redis connection failure | Confirm that the Redis container is running. |
| Frontend dependency errors | Run `npm install` inside the frontend directory. |
| OpenAI API errors | Verify that the API key is valid and API access is available. |
| Port already in use | Stop the conflicting process or configure an alternative port. |

---

## 8. Development Notes

- Always activate the Python virtual environment before running backend commands.
- Keep backend and frontend dependencies properly maintained.
- Use Git for version control and collaboration.
- Do not expose API keys, database passwords, or other sensitive credentials.
- Ensure PostgreSQL and Redis are running before starting application components that depend on them.
- Use the FastAPI Swagger interface to test and inspect backend endpoints.

---

**SASA-EduAssess**  
*Building smarter, more efficient, and intelligent educational assessment solutions.*
