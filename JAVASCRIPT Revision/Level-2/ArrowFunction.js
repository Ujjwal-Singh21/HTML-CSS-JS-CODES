// arrow function in JS is kind of similar to lambda expression in java.

// creating a normal function
let sum = function (num1, num2) {
  return num1 + num2
}

let result = sum(10, 20)
console.log('Normal: ' + result)

// Now changing above function to an arrow function, we do it by performing two steps,
// 1) removing function keyword.
// 2) giving an arrow => expression, also
// when there is only single line in function body, we can also remove curly braces
// and return keyword
let sum1 = (num1, num2) => num1 + num2

let result1 = sum1(10, 20)
console.log('Arrow Function: ' + result1)
