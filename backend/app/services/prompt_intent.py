"""Read generation requirements out of a teacher's free-text prompt.

The form controls on the SASA AI page are only *defaults*. Whatever the teacher states in the
prompt itself ("give me 8 easy multiple choice questions at apply level") always wins.
Anything the prompt does not state falls back to the form value.
"""
import re

MAX_QUESTIONS = 50

_NUMBER_WORDS = {
    "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8,
    "nine": 9, "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
    "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,
    "twenty": 20, "twenty-five": 25, "thirty": 30, "forty": 40, "fifty": 50,
}
_NUM = r"\d{1,3}|" + "|".join(sorted((re.escape(w) for w in _NUMBER_WORDS), key=len, reverse=True))
_NOUN = r"(?:questions?|mcqs?|items?|problems?|exercises?)"
# words that, sitting between the number and "questions", show the number is NOT a question count
_NOT_COUNT_BETWEEN = {"minute", "minutes", "min", "mins", "mark", "marks", "option", "options", "hour", "hours",
                      "page", "pages", "word", "words", "line", "lines", "paragraph", "paragraphs", "point", "points",
                      "marker", "each", "per", "every", "about", "of"}
# words right before the number that show it is a class/term/unit reference ("Grade 5 questions")
_NOT_COUNT_BEFORE = {"grade", "class", "p", "s", "term", "unit", "week", "lesson", "chapter", "page", "level", "section",
                     "part", "form", "year", "topic", "number", "no", "question", "q", "paper", "day", "theme"}
_COUNT_RE = re.compile(rf"\b({_NUM})\b((?:\s+[A-Za-z][A-Za-z\-/]*){{0,3}}?)\s+{_NOUN}\b", re.I)


def _to_int(token: str) -> int | None:
    token = token.lower()
    if token.isdigit():
        return int(token)
    return _NUMBER_WORDS.get(token)


def detect_number(prompt: str) -> int | None:
    for match in _COUNT_RE.finditer(prompt):
        between = {w.lower() for w in re.findall(r"[A-Za-z]+", match.group(2))}
        if between & _NOT_COUNT_BETWEEN:
            continue
        before = re.findall(r"[A-Za-z]+", prompt[max(0, match.start() - 14):match.start()])
        if before and before[-1].lower() in _NOT_COUNT_BEFORE:
            continue
        value = _to_int(match.group(1))
        if value and value >= 1:
            return min(value, MAX_QUESTIONS)
    return None


_DIFFICULTY_WORDS = {"easy": "easy", "moderate": "moderate", "medium": "moderate",
                     "challenging": "challenging", "hard": "challenging", "difficult": "challenging"}
_DIFF = "|".join(_DIFFICULTY_WORDS)
_DIFF_NEAR_NOUN = re.compile(rf"\b({_DIFF})\b(?=(?:\s+(?:and|or|&|/|,)?\s*(?:{_DIFF}))*\s+(?:level\s+)?(?:questions?|items?|mcqs?|problems?|exercises?|difficulty|level))", re.I)
_DIFF_AFTER_LABEL = re.compile(rf"difficulty(?:\s+level)?\s*(?:of|is|:|=|at)?\s*({_DIFF})\b", re.I)
_DIFF_AT_LEVEL = re.compile(rf"\bat\s+(?:an?\s+)?({_DIFF})\s+(?:level|difficulty)", re.I)
_MIXED_DIFF = re.compile(r"\b(mixed|varied|varying|range of|different)\s+(?:levels?\s+of\s+)?difficult", re.I)


def detect_difficulty(prompt: str) -> str | None:
    found = {_DIFFICULTY_WORDS[m.group(1).lower()] for rx in (_DIFF_NEAR_NOUN, _DIFF_AFTER_LABEL, _DIFF_AT_LEVEL)
             for m in rx.finditer(prompt)}
    if _MIXED_DIFF.search(prompt) or len(found) > 1:
        return "mixed"
    return next(iter(found), None)


_TYPES = {
    "multiple_choice": r"multiple[\s\-]*choice|mcqs?\b",
    "short_answer": r"short[\s\-]*answers?",
    "structured": r"structured",
    "essay": r"essays?",
    "practical": r"practical",
    "scenario": r"scenario(?:[\s\-]*based)?",
}
_UNAMBIGUOUS = {"multiple_choice", "short_answer"}
_TYPE_NOUN = r"(?:questions?|items?|tasks?|problems?|exercises?|format|type|style)"


def detect_question_type(prompt: str) -> str | None:
    if re.search(r"\b(?:mixed|varied|variety of|different)\s+(?:question\s+)?(?:formats?|types?)\b", prompt, re.I):
        return "mixed"
    found = set()
    for name, pattern in _TYPES.items():
        if name in _UNAMBIGUOUS:
            if re.search(rf"\b(?:{pattern})", prompt, re.I):
                found.add(name)
            continue
        followed = re.search(rf"\b(?:{pattern})[\s\-]*(?:based\s+)?(?:type\s+)?{_TYPE_NOUN}\b", prompt, re.I)
        labelled = re.search(rf"\b(?:format|type|style)s?\s*(?:of\s+questions?)?\s*(?:of|is|:|=)\s*(?:an?\s+)?(?:{pattern})\b", prompt, re.I)
        as_form = re.search(rf"\b(?:in|as)\s+(?:an?\s+|the\s+)?(?:{pattern})\s+(?:format|form)\b", prompt, re.I)
        if followed or labelled or as_form:
            found.add(name)
    if len(found) == 1:
        return next(iter(found))
    if len(found) > 1:
        return "mixed"
    return None


_BLOOM = {"remember": "remember", "recall": "remember", "understand": "understand", "apply": "apply",
          "analyse": "analyse", "analyze": "analyse", "evaluate": "evaluate", "create": "create"}
_BLOOM_W = "|".join(_BLOOM)
_BLOOM_LEVEL = re.compile(rf"\b((?:{_BLOOM_W})(?:\s*(?:,|/|&|and|or)\s*(?:{_BLOOM_W}))*)\s+(?:levels?|cognitive|thinking)\b", re.I)
_BLOOM_LABEL = re.compile(r"bloom[’']?s?(?:\s+taxonomy)?([^.\n]{0,90})", re.I)


def detect_bloom(prompt: str) -> str | None:
    found: set[str] = set()
    for m in _BLOOM_LEVEL.finditer(prompt):
        found |= {_BLOOM[w.lower()] for w in re.findall(rf"{_BLOOM_W}", m.group(1), re.I)}
    for m in _BLOOM_LABEL.finditer(prompt):
        found |= {_BLOOM[w.lower()] for w in re.findall(rf"\b(?:{_BLOOM_W})\b", m.group(1), re.I)}
    if re.search(r"\bmixed\s+bloom|\ball\s+bloom|\bvaried\s+(?:cognitive|bloom)", prompt, re.I):
        return "mixed"
    if len(found) == 1:
        return next(iter(found))
    if len(found) > 1:
        return "mixed"
    return None


def resolve_generation_settings(prompt: str, form: dict) -> dict:
    """Return the effective settings plus where each one came from ('prompt' or 'default').

    `form` holds the UI defaults; any value may be None/empty meaning "teacher set nothing".
    """
    fallbacks = {"number_of_questions": 5, "difficulty": "moderate", "question_type": "mixed", "bloom_level": "mixed"}
    detected = {
        "number_of_questions": detect_number(prompt),
        "difficulty": detect_difficulty(prompt),
        "question_type": detect_question_type(prompt),
        "bloom_level": detect_bloom(prompt),
    }
    effective, origin = {}, {}
    for key, fallback in fallbacks.items():
        if detected[key] is not None:
            effective[key], origin[key] = detected[key], "prompt"
        else:
            value = form.get(key)
            effective[key] = value if value not in (None, "") else fallback
            origin[key] = "default"
    return {"values": effective, "origin": origin}
