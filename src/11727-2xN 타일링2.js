const fs = require("fs");
const input = +fs.readFileSync("./dev/stdin").toString().trim();

let arr = [0, 1, 3];

if (input > 2) {
  for (let i = 3; i <= 1000; i++) {
    arr[i] = (arr[i - 1] + 2 * arr[i - 2]) % 10007;
  }
}

console.log(arr[input]);
