"""Shared OpenAI-compatible client factory for SASA AI features."""

from app.core.config import settings


def get_ai_provider() -> str:
    provider = (settings.ai_provider or "openai").strip().lower()
    if provider not in {"openai", "deepseek"}:
        raise ValueError(
            f"Unsupported AI_PROVIDER '{settings.ai_provider}'. Choose 'openai' or 'deepseek'."
        )
    return provider


def get_ai_api_key() -> str:
    provider = get_ai_provider()
    key = settings.deepseek_api_key if provider == "deepseek" else settings.openai_api_key
    return (key or "").strip()


def is_ai_configured() -> bool:
    return bool(get_ai_api_key())


def get_ai_model() -> str:
    provider = get_ai_provider()
    model = settings.deepseek_model if provider == "deepseek" else settings.openai_model
    return (model or "").strip()


def get_ai_client():
    """Return an OpenAI SDK client configured for the selected provider."""
    provider = get_ai_provider()
    api_key = get_ai_api_key()
    if not api_key:
        variable = "DEEPSEEK_API_KEY" if provider == "deepseek" else "OPENAI_API_KEY"
        raise RuntimeError(
            f"{variable} is not configured. Add it to backend/.env and restart the backend."
        )

    from openai import OpenAI

    if provider == "deepseek":
        return OpenAI(
            api_key=api_key,
            base_url=settings.deepseek_base_url.rstrip("/"),
            timeout=120.0,
            max_retries=2,
        )

    return OpenAI(api_key=api_key, timeout=120.0, max_retries=2)
