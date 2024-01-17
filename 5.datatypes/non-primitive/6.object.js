// The data type is said to be non-primitive if it is a collection of multiple values.
//JavaScript gives non-primitive data types named Object and Array, to implement this.

//Objects
//Objects in JavaScript are a collection of properties and are represented in the form of [key-value pairs].
//The 'key' of a property is a string or a symbol and should be a legal identifier.
//The 'value' of a property can be any JavaScript value like Number, String, Boolean, or another object.

//ex1:-

let student = { name: "Ashok", id: 6374, email: "ashok@gmail.com" };
console.log(student.name);

//ex2:-
const a = null;
console.log(typeof(a)); // it returns the type of datatype "object"

//ex3:-
const data3 = { name: "ak", index: 5 };
if (data3.name == "ak") {
  console.log("Yes");
} else {
  console.log("No");
}
