import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Mini Hack Assistant, a patient technical mentor for
Team1 Kenya's Cohort 3 builders. Explain concepts in plain English before
using jargon. Keep answers under 150 words unless asked for more detail.`;

const MODEL = "claude-sonnet-4-6";
const MAX_TOKENS = 1024;

async function main() {
  const rl = readline.createInterface({ input, output });
  const messages = []; // conversation history lives here, in memory only

  console.log("Mini Hack CLI Chatbot — type 'exit' to quit\n");

  while (true) {
    const userInput = await rl.question("You: ");
    if (userInput.trim().toLowerCase() === "exit") break;

    messages.push({ role: "user", content: userInput });

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages, // full history sent every turn — Claude has no memory of its own
    });

    const reply = response.content[0].text;
    console.log(`\nClaude: ${reply}\n`);

    messages.push({ role: "assistant", content: reply }); // remember Claude's turn too
  }

  rl.close();
}

main().catch((err) => {
  console.error("Agent error:", err.message);
  process.exit(1);
});
