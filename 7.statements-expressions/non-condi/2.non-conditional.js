/* Non-Conditional statements are those statements that do not need any condition to control the program execution flow.  
In JavaScript, it can be broadly classified into three categories as follows:*/
//Comment
//break;
//continue;

//Break Statement:
/*var counter = 0; 
for (var loop = 0; loop < 5; loop++) { 
    if (loop == 3) 
        break;
    counter++; 
} 
console.log(loop);
console.log(counter);*/
var counter = 0;
var data = [];

for (var loop = 0; loop < 5; loop++) {
    if (loop == 3)
        break;
    counter++;
    data.push({ Loop: loop, Counter: counter });
}

console.table(data);



// *********************************************************************************
// continue statement
// var counter = 0; 
// for (var loop = 0; loop < 5; loop++) { 
//     if (loop == 3)
//         continue; 
//  counter++; 
// } 
//  console.table(loop)
//  console.log(counter);

 /*var counter = 0;
console.table([{ loop: 'Initial', counter }]); // Print initial values

for (var loop = 0; loop < 5; loop++) {
    if (loop == 3)
        continue;
    
    counter++;
    console.table([{ loop, counter }]);
}

console.log('Final Counter:', counter);*/

