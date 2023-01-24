// Recursion is a function of calling itself, A function that calls itself is called as recursive function,
// A recursive function must have a condtion to stop calling itself for indefinite times, once the condtion mets then function should stop calling itself, that condition is called as Base Condtion.
// To prevent recursive call we can use if else statement, where one branch makes recursive call while other doesn't.
//-------------------------------------------------------------------------------------------------------------------

function factorial (n) {
  if (n === 0) return 1
  else return n * factorial(n - 1)
}

const number = 3

if (number > 0) {
  let result = factorial(number)
  console.log('Factorial of ' + number + ' is ' + result)
}

// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 0