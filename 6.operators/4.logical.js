//In JavaScript, logical operators are used to perform logical operations on values or expressions. 
//There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).
// These operators are often used in conditional statements and expressions to control
//the flow of the program based on certain conditions.

//1. Logical AND (&&): The logical AND operator (&&) returns true if both operands are true; otherwise, it returns false.

let x = 5;
let y = 10;

if (x > 0 && y > 0) {
    console.log("Both x and y are positive.");
} else {
    console.log("At least one of x or y is not positive.");
}
console.log("\n");

//2. Logical OR (||): The logical OR operator (||) returns true if at least one of the operands is true; otherwise, it returns false.
let isWeekend = true;
let hasHoliday = false;

if (isWeekend || hasHoliday) {
    console.log("It's time to relax!");
} else {
    console.log("It's a regular workday.");
}
console.log("\n");

//3. Logical NOT (!): The logical NOT operator (!) is a unary operator that negates the value of its operand. If the operand is true, ! makes it false, and vice versa.

let isRaining = true;

if (!isRaining) {
    console.log("It's not raining. You can go outside!");
} else {
    console.log("It's raining. Stay indoors!");
}
console.log("\n");
