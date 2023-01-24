// default value while using functions
function add (num1, num2, num3) {
  return num1 + num2 + num3
}

let result = add(5, 10, 15)
console.log('Sum: ' + result)

// what if we dont pass value for num3.
let result1 = add(7, 10) // error, says NAN 
console.log(result1)

// hence we can give default value for num3 in function parameter itself,
// but thing to remember is that a default value is considered only if no value for
// that variable is passed.
function add1 (num1, num2, num3 = 5) {
  return num1 + num2 + num3
}

let result2 = add1(5, 10)
console.log('Default sum: ' + result2)
