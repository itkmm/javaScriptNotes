//Relational operators are used for comparing values and the result of comparison is always either true or false.
//Relational operators shown below do implicit data type conversion of one of the operands before comparison.

10 > 10;    // false 
10 >= 10;   // true 
10 < 10;    // false 
10 <= 10;   // true 
10 == 10;   // true (loose equality)
10 != 10;   // false (loose inequality)
10 === 10;  // true (strict equality)
10 !== 10;  // false (strict inequality)
// The loose equality operator (==) will perform type coercion if necessary to make compare

// Loose Equality Examples
console.log(5 == '5');    // true, type coercion happens
console.log(true == 1);   // true, type coercion happens
console.log(null == undefined); // true, special case

// Strict Equality Examples
console.log(5 === '5');   // false, no type coercion
console.log(true === 1);  // false, no type coercion
console.log(null === undefined); // false, different types


