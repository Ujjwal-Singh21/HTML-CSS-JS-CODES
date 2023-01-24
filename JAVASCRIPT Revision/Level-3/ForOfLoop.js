// let us create an Array of 100 elements but we will add only first and last elements

let numbers = []

numbers[0] = 5
numbers[99] = 9

console.log(numbers)

// there is a special loop for arrays in JS called as for-of loop, using this loop we can iterate over an array
for (let nums of numbers) {
  console.log(nums)
}

// We can also use for-in loop here, but as we know for-in loops is used for Objects, and it fetches only key values, here Array is also an Object and has invisible keys, they are index numbers, hence we can get all index numbers of an Array using for-in loop
for (let values in numbers) {
  console.log(values)
}

// if we want to get values also using for-in loop, we can do it as same as did in Objects, which is getting values with the help of keys
for (let values1 in numbers) {
  console.log(numbers[values1])
}
