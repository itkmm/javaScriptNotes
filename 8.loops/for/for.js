/* 'for' loop is used when the block of code is expected to execute for a specific number of times. To implement it, 
use the following syntax.*/

/*let counter = 0;
for (let loopVar = 0; loopVar < 5; loopVar++) {
  counter = counter + 1;
  console.log(counter);
  console.log(loopVar);
}*/

let counter = 0;
let data = [];

for (let loopVar = 0; loopVar < 5; loopVar++) {
  counter = counter + 1;
  data.push({ Counter: counter, LoopVar: loopVar });
}

console.table(data);


/*Here, in the above loop

           let loopVar=0; // Initialization 
           loopVar < 5; // Condition 
           loopVar++; // Update
           counter = counter + 1; // Action */ 
   