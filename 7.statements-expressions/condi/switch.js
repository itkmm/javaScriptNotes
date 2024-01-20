//The Switch statement is used to select and evaluate one of the many blocks of code.

/*switch (expression) {
    case value1: code block;
                 break;
    case value2: code block;
                 break;
    case valueN: code block;
                 break;
    default: code block;              
}  */
/*'break' statement is used to come out of the switch and continue execution
 of statement(s) the following switch. */

 var perfRating = 5;

 switch (perfRating) {
     case 1:
         console.log("Very Poor");
         break;
     case 2:
         console.log("Needs Improvement");
         break;
     case 3:
         console.log("Met Expectations");
         break;
     case 4:
         console.log("Commendable");
         break;
     case 5:
         console.log("Outstanding");
         break;
     default:
         console.log("Sorry!! Invalid Rating.");
 }
 
 