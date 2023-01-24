/* 1) JavaScript treats a function as an Object, here we will create function in a 
      different way, means

   2) We will create an anonymous function and assign it to a variable, and if we want 
      to call this anonymous function or pass something to it, we can call it by using  
      its variable name to which it is assigned. 

    3) This whole process is called as "FUNCTION EXPRESSION" */

let add = function (num1, num2) {
  // anonymous function
  return num1 + num2
}

let result = add(33, 73)
console.log('Sum: ' + result)

// assigning anonymous function variable to an another variable (mul to multiply).
let mul = function (num1, num2) {
  return num1 * num2
}

let multiply = mul // assingning function variable to another variable multiply
let result2 = multiply(6, 4) // calling function using new variable name
console.log('Multiply: ' + result2)
