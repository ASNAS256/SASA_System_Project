from pydantic import BaseModel, Field
from typing import Literal

BloomLevel = Literal["remember", "understand", "apply", "analyse", "evaluate", "create"]
QuestionType = Literal["multiple_choice", "short_answer", "structured", "essay", "practical", "scenario"]

class GenerateRequest(BaseModel):
    grade_code: str
    subject_name: str = "Mathematics"
    topic_name: str = ""
    curriculum_node_id: str = ""
    learning_outcome_id: str = ""
    learning_outcome: str = ""
    number_of_questions: int = Field(default=5, ge=1, le=20)
    difficulty: Literal["easy", "moderate", "challenging", "mixed"] = "moderate"
    question_type: Literal["multiple_choice", "short_answer", "structured", "essay", "practical", "scenario", "mixed"] = "mixed"
    bloom_level: BloomLevel | Literal["mixed"] = "mixed"
    include_answers: bool = True
    context: str = "Use familiar Ugandan contexts where appropriate."

class ApproveRequest(BaseModel):
    reviewer_name: str = "Teacher"
    comments: str = ""
    decision: Literal["approved", "rejected"] = "approved"

class BuildExaminationRequest(BaseModel):
    title: str = Field(min_length=3, max_length=255)
    grade_code: str
    subject_name: str
    total_marks: float = Field(gt=0, le=500)
    duration_minutes: int = Field(ge=10, le=600)
    topic_names: list[str] = Field(default_factory=list)
    difficulty: Literal["any", "easy", "moderate", "challenging"] = "any"
    bloom_levels: list[BloomLevel] = Field(default_factory=list)
