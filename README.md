# pdf_summarizer_api

Welcome to the **pdf_summarizer_api** project! 🎉 This project provides a REST API that allows users to upload a 1-page PDF file and get a summary of its content using the OpenAI API. The application is containerized using Docker for easy deployment.

## 🛠️ Requirements

Before you get started, make sure you have the following tools installed:

- [**Docker**](https://www.docker.com/products/docker-desktop) 🐳
- [**Node.js**](https://nodejs.org/) (version 14 or later) 🌐

## 🚀 Setup

Follow these steps to set up the project on your local machine:

1. Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/olduma/pdf_summarizer_api.git
   cd pdf_summarizer_api

2. Create a .env file in the project root and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=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
   PORT=3000

3. Build the Docker image:
   ```bash
   docker build -t pdf_summarizer .

4. Run the Docker container:
   ```bash
   docker run -p 3000:3000 --env-file .env pdf_summarizer
