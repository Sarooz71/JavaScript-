// 1. Sum of Two Numbers
// Create two variables and store numbers in them. Print their sum.
let num1 = 2;
let num2 = 2;

console.log(`The sum of ${num1 + num2}`);

// 2. Calculate Age Next Year
// Store your current age in a variable and print what your age will be next year.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your birth year: ", (birthYear) => {
    let currentYear = new Date().getFullYear();
    let age = currentYear - Number(birthYear);

    console.log(`Your age is ${age}`);

    rl.close();
// });

// 3. Calculate Total Price
// Store the price of a book and the quantity purchased. Calculate and print the total cost.
let bikeprice = 10000 ; 
let quantity = 10
let item = bikeprice * quantity;
console.log(`Total Price of item is ${item}`)


// 4. Find the Average
// Store three test scores in variables and calculate their average.
 let h1 = 10;
 let h2 = 30;
 let h3 = 10;
 let h4 = 30;

 let sum = h1 + h2 + h3 + h4;

 console.log(`The Average of the total is ${sum/4}`);


// 5. Convert Minutes to Seconds
// Store a number of minutes in a variable and convert it to seconds.
let time = 5;
console.log(`let convert minutes into second ${time*60}`);