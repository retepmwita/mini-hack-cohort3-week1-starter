import "dotenv/config";
import OpenAI from "openai";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const client = new OpenAI();

const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL;
const MAX_TOKENS = 1024;

const SYSTEM_PROMPT = `You are Mini Hack Assistant, a patient technical mentor for
Team1 Kenya's Cohort 3 builders. Explain concepts in plain English before
using jargon. Keep answers under 150 words unless asked for more detail.`;

async function main() {
  const rl = readline.createInterface({ input, output });
  const messages = [{
    role: "assistant",
    content: SYSTEM_PROMPT
  }];

  console.log("Mini Hack CLI Chatbot — type 'exit' to quit\n");

  while (true) {
    const userInput = await rl.question("You: ");
    if (userInput.trim().toLowerCase() === "exit") break;

    messages.push({ role: "user", content: userInput });

    const response = await client.chat.completions.create({
      apiKey: OPENAI_API_KEY,
      baseURL: OPENAI_BASE_URL,
      max_completion_tokens: MAX_TOKENS.
      messages,
      model: OPENAI_MODEL,
    });

    const reply = response.choices[0].message.content;

    console.log(`\nGPT: ${reply}\n`);

    messages.push({ role: "assistant", content: reply });
  }

  rl.close();
}

main().catch((err) => {
  console.error("Agent error:", err.message);
  process.exit(1);
});
