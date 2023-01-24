// a()
// b() -> Cannot access 'b' before initialization - Hoisting concept

// 1) Function Statement / Function Declaration :
//-----------------------------------------------
function a () {
  console.log('function a called')
}

// 2) Function Expression :
//--------------------------
let b = function () {
  console.log('function a called')
}

a()
b()

// 3) Named Function Expression :
//--------------------------------
let c = function display() {
  console.log('display function')
}

c()
// display() // -> Reference error: display is not defined;

// 4) Anonymous Function : (throws syntax error: says please give a name to the function)
//-----------------------------------------------------------------------------------------
// function () {
//   console.log('Hello')
// }

// 5) First Class Function :
//---------------------------

//The ability of a function to be used as a value to a variable, to be passed as arg to another function and to be returned from an ouer function is called as First Class Function.

// Google Definition for First-Class Function: 
//----------------------------------------------
// -> A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument to a function or can be returned by another function. JavaScript treat function as a first-class-citizens.