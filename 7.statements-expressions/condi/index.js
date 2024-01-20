//Conditional statements help in performing different actions for different conditions. 

//It is also termed as decision-making statements.

//It is a conditional operator that evaluates to one of the values based on whether the condition is true or false. 

/*It happens to be the only operator in JavaScript that takes three operands.
 It is mostly used as a shortcut of 'if-else' condition.*/
 let workingHours = 9.20; 
let additionalHours; 
(workingHours > 9.15) ?  //is used as a shorthand for an if-else
additionalHours = "You have positive additional hours" : 
additionalHours = "You have negative additional hours"; 
console.log(additionalHours); 
