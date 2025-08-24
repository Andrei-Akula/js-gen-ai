import OpenAI from "openai";
import { printInput, printOutput } from "../lib/formatting.js";

const client = new OpenAI();

const model = "gpt-5-nano";
const input = "Provide me advise what exercises should I do for my back pain?";

printInput(input);

const response = await client.responses.create({ model, input });

printOutput(response.output_text);
