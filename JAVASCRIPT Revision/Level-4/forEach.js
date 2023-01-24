// forEach() method demo -> which takes one element at a time from array and either prints it or returns to another function.
// here forEach() returns each value to an inner anonymous arrow function

let numbers = [32, 45, 65, 77, 89, 12]

numbers.forEach(n => {
  // paranthesis to just single arg is optional
  console.log(n)
  console.log('multiply by 2: ' + n * 2)
})

// forEach() method not only just takes one element at a time, 
// It can also take (value, index no, a whole array) 
// These all 3 at a time as argument.
numbers.forEach((n, i, numbers) => {
  console.log(n, i, numbers)
})
