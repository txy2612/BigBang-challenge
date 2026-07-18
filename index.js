const fs = require("fs");

function convertNumber(number) {
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

const result = Array.from(
  { length: 100 },
  (_, index) => convertNumber(index + 1)
);

fs.writeFileSync("output.json", JSON.stringify(result));
console.log("output.json created successfully");