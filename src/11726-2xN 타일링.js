const fs = require("fs");
const input = +fs.readFileSync("./dev/stdin").toString().trim();

let arr = [0, 1, 2];

if (input > 2) {
  for (let i = 3; i <= 1000; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 10007;
  }
}

console.log(arr[input]);

// 1 2 3 5 8 13

// fibonacci 규칙
