// Normal Printing vs Using Template Literal
//===========================================

let num1 = 8
let num2 = 13

let result = num1 + num2

// Normal Printing just like java
//-------------------------------------

console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + result)

// Printing using ` and $ (Template Literal)
//----------------------------------------------
console.log(`The sum of ${num1} and ${num2} is ${result}`)

// can also be used to print in a new line without help of \n 
// ---------------------------------------------------------------
console.log(`My name is Ujjwal Singh 
         from Ballia`);
