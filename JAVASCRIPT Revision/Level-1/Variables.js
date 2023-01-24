console.log('Hi ujjwal Lets Start')

// (Step-1) VARIABLES IN JAVA_SCRIPT
//=========================================
/*1) Variables can be declared using "let" keyword.

  2) Variables are used to store data(number, Strings etc) in a code.

  3) The Value of a variable can be changed.

  4) Variable names can have characters, numbers except at beginning and 
     some special symbols like $ , _ etc.

  5) Once a variable is declared it can be Re-Assigned but, no need to mention the let 
     keyword while re-assignung as it shows "identifier identifiername has been 
     already Declared" error */

let num = 4
console.log('Initially: ' + num)

num = 5 // no need to mention let keyword here
console.log('After re-assigned: ' + num)

let userName = 'Ujjwal Singh' // use single/double quotes for String
console.log('UserName: ' + userName)

// (Step-2) CONSTANTS IN JAVA_SCRIPT
// ======================================
/* 1) If we don't want the value of our variables to get re assigned or changed later on.
   2) We can use "const" keyword.
   3) If there is a program to find area of a circle, we can change the value of raduis
      later but, the pi value(3.14) should never be Changed, 
      hence we can declare pi using 'const' keyword. */

let radius = 5
const pi = 3.14
let area

radius = 6 // its possible
// pi = 4.14 // 'assignment to constant variable' error

area = pi * radius * radius
console.log(area)
