import json
from pydantic import BaseModel, Field
from app.core.config import settings

class QuestionDraft(BaseModel):
    question_text: str = Field(min_length=5)
    question_type: str = "structured"
    difficulty: str = "moderate"
    marks: float = Field(gt=0, le=100)
    expected_answer: str = ""
    marking_guide: str = ""
    bloom_level: str = "understand"
    learning_outcome: str = ""
    options: list[str] = Field(default_factory=list)
    explanation: str = ""

def demo_questions(topic, grade, count, difficulty, qtype, context, bloom, outcome, subject=""):
    # Demo items are explicitly labelled as demonstrations and are not
    # represented as official curriculum-aligned questions.
    subject_label = subject or "the selected subject"
    templates = [
        ("Describe an important idea in {subject} related to {topic} and give an example.", "short_answer", 2, "A relevant and accurate explanation with an example.", "Award marks for accuracy and relevant example."),
        ("Explain how the {subject} idea of {topic} could be used in a familiar Ugandan setting.", "scenario", 3, "A contextually relevant explanation.", "Award marks for identifying the situation, applying the idea and explaining the result."),
        ("Create a simple {subject} task about {topic}, then explain how you would assess the response.", "structured", 4, "A suitable task with a clear assessment approach.", "Award marks for task relevance, clarity and assessment criteria."),
    ]
    rows = []
    for i in range(count):
        q, kind, marks, answer, guide = templates[i % len(templates)]
        rows.append({
            "question_text": q.format(topic=topic, subject=subject_label), "question_type": kind,
            "difficulty": difficulty if difficulty != "mixed" else "moderate",
            "marks": marks, "expected_answer": answer, "marking_guide": guide,
            "bloom_level": bloom if bloom != "mixed" else "understand",
            "learning_outcome": outcome, "options": [], "explanation": "",
        })
    return rows

def generate_questions(topic, grade, count, difficulty, qtype, context, curriculum_reference, bloom="mixed", outcome="", subject=""):
    if not settings.openai_api_key:
        return demo_questions(topic, grade, count, difficulty, qtype, context, bloom, outcome, subject), "demo_ai"
    from openai import OpenAI
    client = OpenAI(api_key=settings.openai_api_key)
    system_prompt = (
        "You assist Ugandan teachers. Generate draft assessment items, never claim they are official. "
        "Use only supplied curriculum facts. Never invent or attribute an official learning outcome. "
        "Return one JSON object with a 'questions' array. Each item must contain question_text, "
        "question_type (multiple_choice, short_answer, structured, essay, practical, scenario), "
        "difficulty (easy, moderate, challenging), marks (positive number), expected_answer, "
        "marking_guide, bloom_level (remember, understand, apply, analyse, evaluate, create), "
        "learning_outcome, options (array; use four plausible options for multiple choice), "
        "and explanation. Match requested grade, SUBJECT, topic, count and Bloom level. "
        "For English Language, assess only the language skill or content evidenced by the selected "
        "curriculum unit and supplied outcome (for example reading, comprehension, writing, grammar, "
        "vocabulary, listening or speaking when supported); use correct age-appropriate English and "
        "do not turn the task into Mathematics or generic knowledge questions. For any subject, "
        "make answers and marking allocations internally consistent and age appropriate. "
        "For insufficient curriculum evidence, set learning_outcome to an empty string and avoid "
        "claiming verified curriculum alignment. Use accessible Ugandan English and relevant local contexts."
    )
    payload = {"grade": grade, "subject": subject, "topic": topic, "count": count, "difficulty": difficulty,
               "question_type": qtype, "bloom_level": bloom, "learning_outcome": outcome,
               "context": context, "curriculum_reference": curriculum_reference}
    response = client.chat.completions.create(
        model=settings.openai_model,
        messages=[{"role":"system","content":system_prompt},{"role":"user","content":json.dumps(payload)}],
        response_format={"type":"json_object"}, temperature=0.25
    )
    content = response.choices[0].message.content
    if not content:
        raise ValueError("AI returned an empty response.")
    data = json.loads(content)
    raw = data.get("questions", [])
    if not raw:
        raise ValueError("AI returned no questions.")
    validated = [QuestionDraft.model_validate(item).model_dump() for item in raw[:count]]
    if len(validated) != count:
        raise ValueError(f"AI returned {len(validated)} questions; {count} were requested. Please retry.")
    return validated, "openai"
