//Variable Declaration
var a = 1.5;
let b = 1.5;
const c = "string";

console.log(a); //1.5

a = 10;
b = 20;
a = 30;
// c = "abc";

console.log(a); //30
console.log(b); //20
console.log(c); //string

a = 10;

///Heap Memory

a = 10;
b = 20;
// c = "string";

let obj = {
  roll: 1,
  address: "Nepal",
};

console.log(obj);

function square(num) {
  return num * num; //4*4=16
}

const sudip = square(2); //4
const anaotherVal = square(4); //16

console.log(sudip, anaotherVal);

/**
 * 
 * Memory
square= square(num) {
  return num * num; //4*4=16
}
val=4
anotherVal=16
 */

/**
 * 1. Write a object called Student with personal information like: roll, firstName, lastName, address, college and print.
 * 2. Wriite a function to which returns concatenated name i.e firstName lastName.
 * eg: firstName= Sudip, lastName=Chaudhary => Sudip Chaudhary.
 *
 */

//String Concatenation
let firstName = "Sudip";
let lastName = "Chaudhary";
let concatenated = firstName + " " + lastName + "Nepalese";

console.log(concatenated);
//String Concatenation end

//If class
const num = 2;
const something = "better";

if (num == 1 || something == "better") {
  //East
  console.log("One");
} else if (num == 2) {
  //West
  console.log("Two");
} else if (num == 3) {
  //South
  console.log("Three");
} else {
  //North
  console.log("Cannot verify");
}

//If Class End

//Switch Class Starts
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Cannot verify");
    break;
}
//Switch Class Ends

/**
 * Assign variable age, age is above or equal to 18 print 'Eligible for Voting' else print 'Not Eligible'. If Condition use gara
 *
 * Assign variable num, if num<11='Below' , num 11='eleven',12='twelve',.....19='nineteen', num>19='Above'
 */
