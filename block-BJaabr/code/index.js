// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// // - Write a Function Decleration
// function convertToString(n) {
//   return String(n);
// }

// // - Write a Function Expression
// let convertToString = function (n) {
//   return String(n);
// };

// // - Write an Arrow Function without curly brackets (if possible)
// let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"


/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

// function addOne(number){
//   return 1 + number ;
// }
// // - Write a Function Expression

// const addOne = function (number){
//   return 1+number;
// }
// // - Write an Arrow Function without curly brackets(if possible)
// const addOne =(number)=> 1+number; // implicit  return  property


// // - Write an Arrow Function with curly brackets

// const addOne = (number)=>{
//   return 1 +number;

// }
// // - Execute the function

// addOne(1);

// // - Execute the function and store the return value in a variable.

// let addContainer = addOne(1);
// // - What is the typeof returnValue

// typeof addContainer ;// number


// /* 2. Subtract one

// Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

// Do the following with above problem.
// */

// // - Write a Function Declaration
// function subtractOne(number){
//   return number - 1;
// }
// // - Write a Function Expression
// const subtractOne = function(number){
//   return number - 1;
// }
// // - Write an Arrow Function without curly brackets(if possible)

// const subtractOne =(number) => number - 1;

// // - Write an Arrow Function with curly brackets
// const subtractOne = (number) => {
//   return number -1 ;
// }
// // - Execute the function
// subtractOne(3); // This will throw  an error  because  a single named function is  decalred many times so after commenting  the other  only one i had executed

// // - Execute the function and store the return value in a variable.
// let subTract = subtractOne(3);
// // - What is the typeof returnValue
// typeof subTract ; // number

// /* 3. Add two numbers

// Write a function named `sum` that accepts two numbers and returns the sum of them.

// Do the following with above problem.
// */

// // - Write a Function Declaration
// function sum(firstNum , secondNum){
//   return firstNum + secondNum ;
// }
// // - Write a Function Expression

// let sum = function (firstNum , secondNum){
//   return firstNum + secondNum ;
// }
// // - Write an Arrow Function without curly brackets(if possible)
// const sum = (firstNum ,secondNum ) => firstNum+secondNum ;/// implicit  return property 
// // - Write an Arrow Function with curly brackets
// const sum = (firstNum ,secondNum ) =>{
//   return firstNum+secondNum ;
// }
// // - Execute the function
// sum(1,4);
// // - Execute the function and store the return value in a variable
// const Total = sum(3,4);
// // - What is the typeof returnValue
// typeof Total ;// number
// /* 4. Square of the given value

// Write a function named `square` that accepts a number and returns the square of the number.

// Do the following with above problem.
// */

// // - Write a Function Declaration
// function square(number){
//   return number * number;

// }
// // - Write a Function Expression

// const square = function (number){
//   return number * number;

// }
// // - Write an Arrow Function without curly brackets(if possible)
// const square =(number)=> number*number;
// // - Write an Arrow Function with curly brackets
// const square =(number) =>{
//   return number *number;
// }
// // - Execute the function
// square(4);
// // - Execute the function and store the return value in a variable
// let squareContainer = square(5);
// // - What is the typeof returnValue
//  typeof  squareContainer ; // number
// /* 5. Find isGreater

// Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

// Do the following with above problem.
// */

// // - Write a Function Declaration
// function isGreater( x ,y){
//   if(x > y){
//     return true;
//   }
//   else{
//     return false;
//   }
// } 
// // - Write a Function Expression

// const isGreater  = function( x ,y){
//   if(x > y){
//     return true;
//   }
//   else{
//     return false;
//   }
// } 
// - Write an Arrow Function without curly brackets(if possible)

const isGreater = (x,y) => if( x >y){ true} else {false};
// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write an anonymous Function Expression

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
