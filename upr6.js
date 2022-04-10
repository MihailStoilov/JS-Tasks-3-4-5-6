let num1 = 0;
let num2 = 1;
let nextNum;

console.log(num1);
console.log(num2);
nextNum = num1 + num2;

while (nextNum <= 500) {
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
  nextNum = num1 + num2;
}

