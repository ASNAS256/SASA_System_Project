from app.database import Base, engine, SessionLocal, migrate_schema
from app.models import Grade, Subject, Topic

P6 = "https://www.ncdc.go.ug/wp-content/uploads/2024/02/P6-Final-Set-One-Sept-2010_book_new-versiom.pdf"
LS = "https://ncdc.go.ug/wp-content/uploads/2024/02/Mathematics_Syllabus_compressed.pdf"
AL = "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf"

GRADE_ROWS = (
    [(f"P{i}", f"Primary {['One','Two','Three','Four','Five','Six','Seven'][i-1]}", "Primary") for i in range(1, 8)]
    + [(f"S{i}", f"Senior {['One','Two','Three','Four','Five','Six'][i-1]}",
        "Lower Secondary" if i <= 4 else "Advanced Secondary") for i in range(1, 7)]
)

# National subject catalogue starter list. This is a directory, not a verified
# statement that every subject is offered in every class or school.
SUBJECT_NAMES = [
    "Agriculture", "Arabic", "Art and Design", "Biology", "Chemistry",
    "Christian Religious Education", "Commerce", "Computer Studies", "Creative Arts",
    "Economics", "Entrepreneurship", "English Language", "Fine Art",
    "Food and Nutrition", "French", "General Paper", "Geography", "History",
    "Information and Communication Technology", "Integrated Science", "Kiswahili",
    "Literature in English", "Local Language", "Mathematics", "Music",
    "Physical Education", "Physics", "Religious Education", "Social Studies",
    "Technology and Design"
]

def seed():
    Base.metadata.create_all(bind=engine)
    migrate_schema()
    db = SessionLocal()
    try:
        grades = {}
        for code, name, level in GRADE_ROWS:
            obj = db.query(Grade).filter_by(code=code).first()
            if not obj:
                obj = Grade(code=code, name=name, level=level)
                db.add(obj)
                db.flush()
            grades[code] = obj

        subjects = {}
        for name in SUBJECT_NAMES:
            obj = db.query(Subject).filter_by(name=name).first()
            if not obj:
                obj = Subject(name=name, catalogue_status="unverified")
                db.add(obj)
                db.flush()
            subjects[name] = obj

        math = subjects["Mathematics"]
        data = {
            "P6": [("Fractions", P6), ("Money", P6), ("Algebra", P6), ("Data Handling", P6), ("Measurement", P6)],
            "S2": [("Fractions, Percentages and Decimals", LS), ("Algebra", LS), ("Business Arithmetic", LS), ("Data and Probability", LS)],
            "S5": [("Functions", AL), ("Calculus", AL), ("Statistics", AL), ("Vectors", AL)],
        }
        for code, entries in data.items():
            for name, url in entries:
                found = db.query(Topic).filter_by(grade_id=grades[code].id, subject_id=math.id, name=name).first()
                if not found:
                    db.add(Topic(
                        grade_id=grades[code].id, subject_id=math.id, name=name,
                        description="Starter example only. Verify exact class scope and learning outcomes.",
                        source_title="NCDC resource — manual verification required", source_url=url,
                        verification_status="unverified"
                    ))
        db.commit()
        print(f"Curriculum directory seeded: {len(GRADE_ROWS)} classes, {len(SUBJECT_NAMES)} subject catalogue entries.")
        print("Existing topics and questions were preserved. Starter topics remain unverified.")
    finally:
        db.close()

if __name__ == "__main__":
    seed()
