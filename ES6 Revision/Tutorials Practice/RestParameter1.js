// (example-1) adding and returning sum using rest parameter

function sum (...args) {
  let total = 0

  for (const a of args) {
    total = total + a
  }
  return total
}

// Since args is using rest parameter, its an array, hence we used for of loop to iterate it
const result = sum(10, 20, 30, 40, 50)
console.log('Total Sum: ' + result)

// (example-2)
// Assuming that the caller of the sum() function may pass arguments with various kind of data types such as number, string, and boolean, but you want to calculate the total of numbers only.

function sum1 (...args) {
  return args.filter(e => typeof e === 'number').reduce((a, b) => a + b)
}

// now calling the function by passing args with diff data types
let result1 = sum1(10, 'Hi', null, undefined, 20, 30)
console.log('Total Sum2: ' + result1)

// changing (example-2) to an arrow function
const sum2 = (...args) =>
  args.filter(e => typeof e === 'number').reduce((a, b) => a + b)

let result2 = sum2(10, 'Hi', null, undefined, 20, 50)
console.log('Total Sum3: ' + result2)
