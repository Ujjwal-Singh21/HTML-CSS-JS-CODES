// creating an array
let num = [5, 6, 7, 8]
console.log(num)

// destructuring array num and assigning each element to a seperate variable
let [a, b, c, d] = num
console.log(a) // 5
console.log(d) //8
// to skip any number
// let [a,b,,d] = num
// console.log(d);

// swapping using destructure approach
let x = 45
let y = 77
console.log('Old X Value: ' + x)
console.log('Old Y Value: ' + y)
// -> semicolon is mandatory here otherwise error occurs
;[x, y] = [y, x]
console.log('New X Value: ' + x)
console.log('New Y Value: ' + y)
