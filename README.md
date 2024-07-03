# pdf_summarizer

This project provides a REST API to upload a 1-page PDF file and get a summary of its content using OpenAI API. The application is containerized using Docker.

## Requirements

- Docker
- Node.js

## Setup

1. Clone the repository:
   git clone https://github.com/olduma/pdf_summarizer.git
   cd pdf_summarizer

2. Create a .env file in the project root and add your OpenAI API key:
   OPENAI_API_KEY and PORT

3. Build the Docker image:
   docker build -t pdf_summarizer .

4. Run the Docker container:
   docker run -p 3000:3000 --env-file .env pdf_summarizer
