require("dotenv").config();
const OpenAIApi = require("openai");
const Configuration = require("openai");

const summarizeText = async (text) => {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  );

  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `Summarize this text: ${text}`,
    max_tokens: 100,
  });

  return response.choices[0].text;
};

module.exports = { summarizeText };
