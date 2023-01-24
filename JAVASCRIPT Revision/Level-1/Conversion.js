// TYPE CONVERSION AND TYPE COERCION :-
// ====================================

// 1) TYPE CONVERSION -> EXPLICIT CONVERSION DONE BY DEVELOPER
// 2) TYPE COERCION -> IT HAPPENS AUTOMATICALLY.
// ===========================================================

// (Step-1) Type Conversion :-
// CONVERTING A NUMBER TYPE TO STRING & STRING TO NUMBER :-
//---------------------------------------------------------
let number = String(6)
console.log(number, typeof number) // 6 String
let uname = Number('45')
console.log(uname, typeof uname) //45 number

// (Step-2) Type Coercion :-
//----------------------------
/*a) When + operator finds different data types to its both sides its gets confused, 
     then coercion comes in picture.
     
  b) JavaScripts says to + operator that everytime when u have diff data on both sides, 
     and if u need to perform some operation , you have to come to some result, 
     hence + operator makes :- 
     i)  Number + String = String 
         and  '-' operator makes :-
     ii) String - Number = number
     iii) boolean(True) + boolean(True) = Number, hence ans is 1 + 1 = 2  */

let x
console.log(x, typeof x) // undefined undefined

x = 8
console.log(x, typeof x) // 8 number

x = x + ' '
console.log(x, typeof x) // 8 String

// x is a String now hence x-> 8 + 2 = not 10, but 82
console.log(x + 2)

// if we want 8 + 2 = 10, 
// which means x should be a number while addition then use unary opearator '+'
console.log(+x + 2)

// since now x is a String
x = 10 - x
console.log(x, typeof x) // 2 number

// boolean, ! operator only works with boolean
x = !x
console.log(x, typeof x)

let y = '123 Ujjwal'
console.log(y) // 123 Ujjwal as String

// now converting it to number
y = Number('123 Ujjwal')
console.log(y) // NAN, because there are two diff data types(Number and String),

// hence use"123 Ujjwal" parseInt to get output
y = parseInt('123 Ujjwal')
console.log(y)

// boolean :- True + True = 2
let num1 = true
let num2 = true
let result = num1 + num2
console.log(result) // 2, because both are true hence converted to number as 1 + 1 = 2

// (step-3) Converting a Number into boolean,
// ------------------------------------------------------
// NOTE: While number -> boolean conversion All the numbers are True but 0 is false.
/* The values which returns True while boolean conversion are called Truthy values, 
   values which return False are called as Falsy values. */
console.log(Boolean(7)) // first 4 are true
console.log(Boolean(9))
console.log(Boolean(-7))
console.log(Boolean('Virat'))

console.log(Boolean(0)) // false
console.log(Boolean(null)) // false 
console.log(Boolean(undefined)) // false

// (step-4) Pre and Post Increment :-
// -----------------------------------

let value = 8
let newValue = ++value // pre-increment -> first increment then assignment
console.log(newValue, value) // (9,9)

let value1 = 33
let newValue1 = value1++ // post-increment -> first assignment then increment
console.log(newValue1, value1) // (33, 34)

// (step-5) Find square & cube root, normal approach vs Using Math Interface 
//          pow method(Math.pow()) :-
// ---------------------------------------------------------------------------------------------
let digit = 5
let cubeValue = digit * digit * digit
console.log(cubeValue)

cubeValue = Math.pow(5, 3)
console.log(cubeValue)

// using ES6 , use ** for power
cubeValue = 5 ** 3   
console.log(cubeValue);

