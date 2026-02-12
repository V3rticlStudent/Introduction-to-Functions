//Part 1: Declaring and Invoking Functions
function greet(name) {
  return `Hello ${name}`;
}

console.log("-Part 1: Declaring and Invoking Functions-");
const greeting = greet("Devon");
console.log(greeting);

//Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log("\n-Part 2: Parameters and Return-");
const sumResult = addNumbers(7, 13);
console.log(`addNumbers(7, 13) -> ${sumResult}`);

//Part 3: Function Scope
console.log("\n-Part 3: Function Scope-");

let x = 10;
console.log(`Global x before changeValue(): ${x}`);

function changeValue() {
  let x = 42;
  console.log(`Local x inside changeValue(): ${x}`);
}

changeValue();
console.log(`Global x after changeValue(): ${x}`);

function changeGlobalValue() {
  x = 99;
  console.log(`Global x reassigned inside changeGlobalValue(): ${x}`);
}
changeGlobalValue();
console.log(`Global x after changeGlobalValue(): ${x}`);

//Part 4: Closures
function outerFunction() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

console.log("\n-Part 4: Closures-");
const counterA = outerFunction();
console.log(`counterA call 1 -> ${counterA()}`);
console.log(`counterA call 2 -> ${counterA()}`);
console.log(`counterA call 3 -> ${counterA()}`); 

const counterB = outerFunction();
console.log(`counterB call 1 -> ${counterB()}`);
console.log(`counterB call 2 -> ${counterB()}`);

console.log(`counterA call 4 -> ${counterA()}`);