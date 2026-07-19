// require loads Node.js modules.
// fs is Node.js's built-in file system module to create output.json.
const fs = require("fs");

// A function keeps the conversion rules separate and reusable if the program grows larger.
// Array.from will call this function once for every number.
function convertNumber(number) {
  // Check 15 first because it means divisible by both 3 and 5.
  // Otherwise, 15 could return "BIG" before reaching the other checks.
  if (number % 15 === 0) {
    return "BIGBANG";
  }

  if (number % 3 === 0) {
    return "BIG";
  }

  if (number % 5 === 0) {
    return "BANG";
  }

  return String(number);
}

// Array.from creates a new array with 100 elements.
// index starts at 0, so index + 1 produces numbers from 1 to 100.
const result = Array.from(
  { length: 100 },
  (_, index) => convertNumber(index + 1)
);

fs.writeFileSync("output.json", JSON.stringify(result));
console.log("output.json created successfully");
