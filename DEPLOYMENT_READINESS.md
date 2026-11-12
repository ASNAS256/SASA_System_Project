# SASA EduAssess v0.3.1 — Cloud preparation status

## What has been prepared

- Removed the embedded OpenAI credential from backend source configuration.
- OpenAI credentials are now supplied only through `OPENAI_API_KEY`.
- Added a Render Blueprint (`render.yaml`) for the FastAPI service.
- Updated environment examples and Git ignore rules.
- Excluded the local SQLite database and uploaded lesson-note PDF from this clean deployment package.
- Kept the existing application routes, models, frontend pages and curriculum/question workflows unchanged.

## Public launch is intentionally blocked

This source release is **not yet safe to expose publicly**, even for 5–10 teachers. The supplied v0.3.0 application has no authentication, no open-registration flow, no role-based authorization, and no per-user data ownership. Curriculum review endpoints can modify shared official-content status. Prompt Studio and uploaded documents are also globally accessible. Adding a public URL now would let anonymous visitors read or modify shared application data.

There is also no cloud object-storage adapter in the current application. Uploaded files are written to the backend's local `backend/storage` directory. Render Free uses an ephemeral filesystem, so uploads may disappear on redeploy/restart. The Render blueprint is a deployment scaffold, not approval to publish the app.

## Required before public open registration

1. Implement registration, login, password hashing, session/token expiry, logout and account recovery.
2. Add roles (`teacher`, `reviewer`, `administrator`) and enforce authorization server-side on every write/review route.
3. Add user ownership/tenant boundaries for teacher-created questions, prompt sessions, drafts and examinations. Keep official curriculum catalogue data shared but reviewer-only for edits.
4. Add rate limits and basic abuse controls to registration and AI-generation endpoints.
5. Move uploaded files to persistent object storage (for example, a private Supabase Storage bucket) and authorize downloads through the API.
6. Configure PostgreSQL migrations and test upgrade from the supplied SQLite data. Do not assume `create_all` is a complete production migration strategy.
7. Add automated API and frontend tests, then test signup, isolation, permissions, file persistence, restart/redeploy and backup/restore.

## Render environment variables

Set these in the Render dashboard (never commit actual values):

- `APP_NAME=SASA EduAssess Uganda`
- `APP_ENV=production`
- `DATABASE_URL=<Supabase PostgreSQL connection string>`
- `OPENAI_API_KEY=<newly rotated key>`
- `OPENAI_MODEL=gpt-4.1-mini`
- `FRONTEND_ORIGIN=<exact deployed Vercel origin>`

The frontend's Vercel environment variable is `NEXT_PUBLIC_API_URL=<Render API URL>`.

## Credential incident

The original archive contained an OpenAI credential embedded in source code. Revoke/rotate that credential immediately in the OpenAI dashboard. This package does not contain the embedded credential. Do not reuse it.
