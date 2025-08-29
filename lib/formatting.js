import colors from "./colors.js"
export function printInput(input) {
  console.log(`${colors.yellow}# model input:${colors.reset}`);
  console.log(input);
}

export function printOutput(output) {
  console.log("");
  console.log(`${colors.green}# model output:${colors.reset}`);
  console.log(output);
}

export function printLog(...params) {
  console.log(`${colors.magenta}`);
  console.log(...params);
  console.log(` ${colors.reset}`);
}
