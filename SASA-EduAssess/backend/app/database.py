from sqlalchemy import create_engine, inspect, text
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from app.core.config import settings

connect_args = {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}
engine = create_engine(settings.database_url, connect_args=connect_args, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

class Base(DeclarativeBase):
    pass

def migrate_schema():
    """Additive migrations only; existing curriculum, questions and papers are preserved."""
    additions = {
        "subjects": {"catalogue_status": "VARCHAR(40) NOT NULL DEFAULT 'unverified'"},
        "topics": {
            "strand_name": "VARCHAR(255) NOT NULL DEFAULT ''",
            "subtopic_name": "VARCHAR(255) NOT NULL DEFAULT ''",
            "source_version": "VARCHAR(100) NOT NULL DEFAULT ''",
            "source_page": "VARCHAR(50) NOT NULL DEFAULT ''",
            "verification_status": "VARCHAR(40) NOT NULL DEFAULT 'unverified'",
        },
        "questions": {
            "curriculum_node_id": "VARCHAR(36)",
            "moderation_category": "VARCHAR(40) NOT NULL DEFAULT 'Curriculum'",
            "bloom_level": "VARCHAR(30) NOT NULL DEFAULT 'understand'",
            "learning_outcome": "TEXT NOT NULL DEFAULT ''",
            "options_json": "TEXT NOT NULL DEFAULT '[]'",
            "explanation": "TEXT NOT NULL DEFAULT ''",
        },
    }
    inspector = inspect(engine)
    existing_tables = set(inspector.get_table_names())
    newly_added_category = False
    with engine.begin() as conn:
        for table, columns in additions.items():
            if table not in existing_tables:
                continue
            present = {c["name"] for c in inspect(engine).get_columns(table)}
            for name, sql_type in columns.items():
                if name not in present:
                    conn.execute(text(f"ALTER TABLE {table} ADD COLUMN {name} {sql_type}"))
                    if table == "questions" and name == "moderation_category":
                        newly_added_category = True
        if "questions" in existing_tables:
            # Fill only missing categories. Never overwrite a category a teacher
            # has already assigned. This also repairs NULL values created while
            # v0.4.1 temporarily omitted the ORM category field.
            conn.execute(text("""
                UPDATE questions
                SET moderation_category = CASE
                    WHEN source = 'demo_ai' THEN 'Demo/Test'
                    ELSE 'Curriculum'
                END
                WHERE moderation_category IS NULL OR moderation_category = ''
            """))
            conn.execute(text("CREATE INDEX IF NOT EXISTS ix_questions_moderation_category ON questions (moderation_category)"))

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
