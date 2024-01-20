/*'do-while' is a variant of 'while' loop.
This will execute a block of code once before checking any condition.
Then, after executing the block it will evaluate the condition given at
 the end of the block of code.
Now the statements inside the block of code will be repeated till condition 
evaluates to true. To implement 'do-while' loop, use the following syntax:
 */
/*let counter = 0;
let loopVar = 0;

do {
	console.log(loopVar);
	counter++;
	loopVar++;
	console.log(counter);
} 
while (loopVar < 5); */
let counter = 0;
let loopVar = 0;
let data = [];

do {
  data.push({ LoopVar: loopVar, Counter: counter });
  console.log(loopVar);
  counter++;
  loopVar++;
  console.log(counter);
} while (loopVar < 5);

console.table(data);



