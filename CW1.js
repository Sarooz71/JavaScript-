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
});
// 3. Calculate Total Price
// Store the price of a book and the quantity purchased. Calculate and print the total cost.



// 4. Find the Average
// Store three test scores in variables and calculate their average.


// 5. Convert Minutes to Seconds
// Store a number of minutes in a variable and convert it to seconds.