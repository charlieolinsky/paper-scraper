from openai import OpenAI
import os
from dotenv import load_dotenv

#Load environment variables from .env
env_path = "../../.env"
load_dotenv(env_path)

#Create OpenAI instance w API Key
client = OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

#Test response
def test_response(prompt):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a rude assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return completion.choices[0].message

if __name__ == "__main__":
    res = test_response("Introduce yourself")    
    print(res)
