"""Normalisation that keeps AI-written questions compatible with the activity / paper builders."""
import re

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import Topic

QUESTION_TYPES = {"multiple_choice", "short_answer", "structured", "essay", "practical", "scenario"}
DIFFICULTIES = {"easy", "moderate", "challenging"}
BLOOM_LEVELS = {"remember", "understand", "apply", "analyse", "evaluate", "create"}
_TYPE_ALIASES = {"mcq": "multiple_choice", "multiple_choice_question": "multiple_choice", "multiplechoice": "multiple_choice",
                 "shortanswer": "short_answer", "short": "short_answer", "scenario_based": "scenario",
                 "structure": "structured", "long_answer": "essay"}
_DIFF_ALIASES = {"medium": "moderate", "intermediate": "moderate", "hard": "challenging", "difficult": "challenging",
                 "simple": "easy", "basic": "easy", "advanced": "challenging"}
_BLOOM_ALIASES = {"analyze": "analyse", "analysis": "analyse", "application": "apply", "recall": "remember",
                  "knowledge": "remember", "comprehension": "understand", "evaluation": "evaluate", "creating": "create"}
_OPTION_PREFIX = re.compile(r"^\s*(?:\(?[A-Ha-h][\.\):]|\([ivx]+\))\s+")


def normalise_options(options) -> list[str]:
    if not isinstance(options, list):
        return []
    cleaned = []
    for option in options:
        text = str(option.get("text", option) if isinstance(option, dict) else option).strip()
        text = _OPTION_PREFIX.sub("", text).strip()
        if text:
            cleaned.append(text)
    return cleaned


def normalise_type(value, options=()) -> str:
    key = re.sub(r"[\s\-]+", "_", str(value or "").strip().lower())
    key = _TYPE_ALIASES.get(key, key)
    if key in QUESTION_TYPES:
        return key
    return "multiple_choice" if len(options) >= 2 else "structured"


def normalise_difficulty(value, fallback="moderate") -> str:
    key = _DIFF_ALIASES.get(str(value or "").strip().lower(), str(value or "").strip().lower())
    if key in DIFFICULTIES:
        return key
    return fallback if fallback in DIFFICULTIES else "moderate"


def normalise_bloom(value, fallback="understand") -> str:
    key = _BLOOM_ALIASES.get(str(value or "").strip().lower(), str(value or "").strip().lower())
    return key if key in BLOOM_LEVELS else fallback


def normalise_marks(value, fallback=1.0) -> float:
    try:
        marks = float(value)
    except (TypeError, ValueError):
        return fallback
    return round(marks, 2) if 0 < marks <= 100 else fallback


def find_legacy_topic(db: Session, grade_id: str, subject_ids: list[str], topic_name: str):
    """Link an AI question to the legacy topic row (if one exists) so topic filters in the paper builder find it."""
    if not topic_name:
        return None
    return db.scalar(select(Topic).where(
        Topic.grade_id == grade_id, Topic.subject_id.in_(subject_ids), Topic.name.ilike(topic_name.strip())))
