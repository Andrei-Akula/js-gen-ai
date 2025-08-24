import OpenAI from "openai";
import { printInput, printOutput } from "../lib/formatting.js";

const client = new OpenAI();

const model = "gpt-5-nano";
const instructions = "You are a health coach and fitness trainer.";
const input = "Provide me advice on what exercises should I do for my back pain?";

printInput(input);

const response = await client.responses.create({ 
  model,
  input,
  instructions
});

printOutput(response.output_text);
