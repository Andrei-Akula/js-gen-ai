import OpenAI from "openai";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { printInput, printOutput } from "../lib/formatting.js";

const client = new OpenAI();

// Create a readline interface for user input and output.
const rl = readline.createInterface({ input, output });


const model = "gpt-5-nano";

// A system (or developer) message inserted into the model's context.
const instructions = "You are a helpful assistant.";


async function dialog() {
  try {
    console.log('Type "exit" or "quit" to end the conversation.');

    // Ask the user a question via the readline interface.
    const userInput = await rl.question("\nYou: ");

    // Log the user's input for clarity.
    printInput(userInput);

    // Check if the user wants to exit the conversation.
    if (["exit", "quit"].includes(userInput.trim().toLowerCase())) {
      console.log("Goodbye!"); // Say goodbye and close the readline interface.
      rl.close();
      return;
    }

    const response = await client.responses.create({ 
      model,
      input: userInput,
      instructions
    });

    printOutput(response.output_text);

    // Call the dialog function recursively to continue the conversation.
    await dialog();
  } catch (error) {
    console.error("Error in dialog:", error); // Handle any errors that occur.
  }
}


await dialog();


