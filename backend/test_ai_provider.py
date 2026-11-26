"""Small live connectivity test for the AI provider selected in backend/.env.
Run from the backend directory with the project's virtual environment active.
"""
from app.services.ai_client import get_ai_client, get_ai_model, get_ai_provider


def main() -> None:
    provider = get_ai_provider()
    model = get_ai_model()
    print(f"Selected provider: {provider}")
    print(f"Selected model: {model}")
    print("Sending a short connectivity test...")

    client = get_ai_client()
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "user", "content": "Reply with exactly: SASA AI connection successful."}
        ],
        max_tokens=40,
        temperature=0,
    )
    message = response.choices[0].message.content or "(The provider returned an empty message.)"
    print("Provider response:")
    print(message)
    print("Connectivity test completed.")


if __name__ == "__main__":
    main()
