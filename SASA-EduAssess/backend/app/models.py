import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Text, DateTime, ForeignKey, Float, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base

def uid():
    return str(uuid.uuid4())

class Grade(Base):
    __tablename__ = "grades"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    code: Mapped[str] = mapped_column(String(10), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(100))
    level: Mapped[str] = mapped_column(String(50))

class Subject(Base):
    __tablename__ = "subjects"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    name: Mapped[str] = mapped_column(String(150), unique=True)
    catalogue_status: Mapped[str] = mapped_column(String(40), default="unverified")

class Topic(Base):
    __tablename__ = "topics"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    grade_id: Mapped[str] = mapped_column(ForeignKey("grades.id"), index=True)
    subject_id: Mapped[str] = mapped_column(ForeignKey("subjects.id"), index=True)
    name: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(Text, default="")
    source_title: Mapped[str] = mapped_column(String(255), default="Starter NCDC reference; verify")
    source_url: Mapped[str] = mapped_column(Text, default="")
    strand_name: Mapped[str] = mapped_column(String(255), default="")
    subtopic_name: Mapped[str] = mapped_column(String(255), default="")
    source_version: Mapped[str] = mapped_column(String(100), default="")
    source_page: Mapped[str] = mapped_column(String(50), default="")
    verification_status: Mapped[str] = mapped_column(String(40), default="unverified")
    grade = relationship("Grade")
    subject = relationship("Subject")

class Question(Base):
    __tablename__ = "questions"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    grade_id: Mapped[str] = mapped_column(ForeignKey("grades.id"), index=True)
    subject_id: Mapped[str] = mapped_column(ForeignKey("subjects.id"), index=True)
    topic_id: Mapped[str | None] = mapped_column(ForeignKey("topics.id"), nullable=True)
    curriculum_node_id: Mapped[str | None] = mapped_column(ForeignKey("curriculum_nodes.id"), nullable=True, index=True)
    question_text: Mapped[str] = mapped_column(Text)
    question_type: Mapped[str] = mapped_column(String(40), default="structured")
    difficulty: Mapped[str] = mapped_column(String(30), default="moderate")
    marks: Mapped[float] = mapped_column(Float, default=1)
    expected_answer: Mapped[str] = mapped_column(Text, default="")
    marking_guide: Mapped[str] = mapped_column(Text, default="")
    curriculum_reference: Mapped[str] = mapped_column(Text, default="")
    source: Mapped[str] = mapped_column(String(30), default="demo_ai")
    moderation_category: Mapped[str] = mapped_column(String(40), default="Curriculum", index=True)
    approval_status: Mapped[str] = mapped_column(String(30), default="pending", index=True)
    bloom_level: Mapped[str] = mapped_column(String(30), default="understand")
    learning_outcome: Mapped[str] = mapped_column(Text, default="")
    options_json: Mapped[str] = mapped_column(Text, default="[]")
    explanation: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    grade = relationship("Grade")
    subject = relationship("Subject")
    topic = relationship("Topic")
    curriculum_node = relationship("CurriculumNode", foreign_keys=[curriculum_node_id])

class TeacherReview(Base):
    __tablename__ = "teacher_reviews"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    question_id: Mapped[str] = mapped_column(ForeignKey("questions.id"), index=True)
    reviewer_name: Mapped[str] = mapped_column(String(150), default="Teacher")
    decision: Mapped[str] = mapped_column(String(30))
    comments: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class Examination(Base):
    __tablename__ = "examinations"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    title: Mapped[str] = mapped_column(String(255))
    grade_id: Mapped[str] = mapped_column(ForeignKey("grades.id"), index=True)
    subject_id: Mapped[str] = mapped_column(ForeignKey("subjects.id"), index=True)
    duration_minutes: Mapped[int] = mapped_column(Integer)
    total_marks: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(30), default="draft")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    grade = relationship("Grade")
    subject = relationship("Subject")
    items = relationship("ExaminationQuestion", back_populates="examination", cascade="all, delete-orphan", order_by="ExaminationQuestion.position")

class ExaminationQuestion(Base):
    __tablename__ = "examination_questions"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    examination_id: Mapped[str] = mapped_column(ForeignKey("examinations.id"), index=True)
    question_id: Mapped[str] = mapped_column(ForeignKey("questions.id"), index=True)
    position: Mapped[int] = mapped_column(Integer)
    examination = relationship("Examination", back_populates="items")
    question = relationship("Question")

class CurriculumDocument(Base):
    __tablename__ = "curriculum_documents"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    title: Mapped[str] = mapped_column(String(255))
    issuing_authority: Mapped[str] = mapped_column(String(150), default="National Curriculum Development Centre")
    document_type: Mapped[str] = mapped_column(String(60), default="syllabus")
    education_level: Mapped[str] = mapped_column(String(80), default="")
    curriculum_version: Mapped[str] = mapped_column(String(120), default="")
    publication_year: Mapped[str] = mapped_column(String(20), default="")
    source_url: Mapped[str] = mapped_column(Text, default="")
    original_filename: Mapped[str] = mapped_column(String(255), default="")
    stored_filename: Mapped[str] = mapped_column(String(255), default="")
    sha256: Mapped[str] = mapped_column(String(64), default="")
    extracted_text: Mapped[str] = mapped_column(Text, default="")
    extraction_status: Mapped[str] = mapped_column(String(40), default="pending")
    verification_status: Mapped[str] = mapped_column(String(40), default="unverified")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class CurriculumNode(Base):
    __tablename__ = "curriculum_nodes"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    grade_id: Mapped[str] = mapped_column(ForeignKey("grades.id"), index=True)
    subject_id: Mapped[str] = mapped_column(ForeignKey("subjects.id"), index=True)
    document_id: Mapped[str] = mapped_column(ForeignKey("curriculum_documents.id"), index=True)
    parent_id: Mapped[str | None] = mapped_column(ForeignKey("curriculum_nodes.id"), nullable=True, index=True)
    entry_type: Mapped[str] = mapped_column(String(40), index=True)
    title: Mapped[str] = mapped_column(String(500))
    description: Mapped[str] = mapped_column(Text, default="")
    page_reference: Mapped[str] = mapped_column(String(80), default="")
    source_excerpt: Mapped[str] = mapped_column(Text, default="")
    verification_status: Mapped[str] = mapped_column(String(40), default="draft", index=True)
    reviewer_name: Mapped[str] = mapped_column(String(150), default="")
    review_notes: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    grade = relationship("Grade")
    subject = relationship("Subject")
    document = relationship("CurriculumDocument")
    parent = relationship("CurriculumNode", remote_side="CurriculumNode.id", backref="children")
    outcomes = relationship("LearningOutcome", back_populates="node", cascade="all, delete-orphan")

class LearningOutcome(Base):
    __tablename__ = "learning_outcomes"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    node_id: Mapped[str] = mapped_column(ForeignKey("curriculum_nodes.id"), index=True)
    outcome_code: Mapped[str] = mapped_column(String(100), default="")
    outcome_text: Mapped[str] = mapped_column(Text)
    competency: Mapped[str] = mapped_column(Text, default="")
    page_reference: Mapped[str] = mapped_column(String(80), default="")
    source_excerpt: Mapped[str] = mapped_column(Text, default="")
    verification_status: Mapped[str] = mapped_column(String(40), default="draft", index=True)
    reviewer_name: Mapped[str] = mapped_column(String(150), default="")
    review_notes: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    node = relationship("CurriculumNode", back_populates="outcomes")
