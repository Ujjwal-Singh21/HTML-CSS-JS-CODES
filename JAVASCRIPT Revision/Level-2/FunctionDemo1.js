// creating a function using function keyword
function myName () {
  console.log('Hello Ujjwal How Are You')
}

myName() // calling the function

// Function passing and returning :-
/* 1) when a 'return' statement is used in a function body, the execution of the 
    function is stopped after that. */

// returning something from a function
function companyName () {
  return 'Welcome to Capgemini'
}

let result = companyName()
console.log(result)

// passing a single argument to a function
function joining (company) {
  return `You have successfully joined ${company} `
}

let company = 'CAPGEMINI'
var result2 = joining(company)
console.log(result2)
