// An arrow function does not have the arguments Object. 
// Therefore, if you want to pass a number of arguments to the arrow function,
// you must use the rest parameters.

let combine = (...args) => {
  return args.reduce((x, y) => x + ' ' + y)
}

const result = combine('JavaScript', 'Rest', 'Parameters')
console.log('Combined String: ', result)

// JavaScript allows you to create dynamic functions through the Function constructor.
// And it is also possible to use the rest parameter in a dynamic function. 
// Here is an example:
let myFunction = new Function('...args', 'console.log(args)')
myFunction(1,2,3,4,5)
