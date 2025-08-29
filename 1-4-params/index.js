import OpenAI from "openai";
import { printInput, printOutput, printLog } from "../lib/formatting.js";

const client = new OpenAI();

const model = "gpt-4.1";

async function run_with_params(paramName, params, input) {
  if (!Array.isArray(params)) {
    return;
  }

  for (const paramValue of params) {
    printLog(`${paramName}: ${paramValue}`);
    printInput(input);

    const response = await client.responses.create({ 
      model,
      input,
      [paramName]: paramValue
    });

    printOutput(response.output_text); 
  }
}

await run_with_params('temperature', [0.2, 0.8], 'Tell me something interesting about space.');
await run_with_params('top_p', [0.2, 0.9], 'Explain the importance of recycling.');
await run_with_params('max_output_tokens', [50, 150], 'Describe the process of photosynthesis.');