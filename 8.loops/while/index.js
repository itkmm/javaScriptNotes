/* 'while' loop is used when the block of code is to be executed as long as 
the specified condition is true. To implement the following syntax:
 */
/*let counter = 0;
let loopVar = 0;
while (loopVar < 5) {
console.log(loopVar);
counter++;
loopVar++;
console.log(counter);
} */

let counter = 0;
let loopVar = 0;
let data = [];

while (loopVar < 5) {
  data.push({ LoopVar: loopVar, Counter: counter });
  console.log(loopVar);
  counter++;
  loopVar++;
  console.log(counter);
}

console.table(data);
