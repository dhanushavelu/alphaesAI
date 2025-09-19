
// TEST DATA 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log("--- TEST DATA 1 ---");
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

//-----------------------------------

// TEST DATA 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

markHigherBMI = bmiMark > bmiJohn;

console.log("\n--- TEST DATA 2 ---");
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);





// TEST DATA 1


console.log("--- TEST DATA 1 ---");
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})!`);
}

//-----------------------------------

// TEST DATA 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);

console.log("\n--- TEST DATA 2 ---");
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})!`);
}