const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const arr = input.map((el) => +el);
const target = arr.reduce((acc, cur) => acc + cur) - 100;

let result;

for (let i = 0; i < arr.length; i++) {
  let forBreak = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      result = arr
        .filter((item) => item !== arr[i] && item !== arr[j])
        .sort((a, b) => a - b);
      forBreak = true;
      break;
    }
  }
  if (forBreak) break;
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
