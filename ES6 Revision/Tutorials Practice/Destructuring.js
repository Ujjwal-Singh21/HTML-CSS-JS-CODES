// Assuming that you have a function that returns an array of numbers as follows :
// The following invokes the getScores() function and assigns the returned value to a variable :
// To get the individual score, you need to do like this:

function getScores () {
  return [10, 20, 30]
}

let scores = getScores()
let x = scores[0]
let y = scores[1]
let z = scores[2]

console.log(x, y, z)

// Prior to ES6, there was no direct way to assign the elements of the returned array to multiple variables such as x, y and z. Fortunately, starting from ES6, you can use the destructing assignment as follows :

var [a, b, c] = getScores()
console.log(a, b, c)

// It’s possible to take all remaining elements of an array and put them in a new array by using the rest syntax (...) :

function getValues () {
  return [45, 55, 65, 75]
}

var [a, ...b] = getValues()
console.log(a, b)

// Note that it’s possible to destructure an array in the assignment that separates from the variable’s declaration. For example :

var a, b
;[a, b] = [10, 20]

console.log(a, b)

// Setting default values
function myMarks () {
  return [10, 20, 30]
}

var marks = myMarks()

var markthree = marks[3] != undefined ? marks[3] : 40
console.log(markthree)

// It’ll be simpler with the destructuring assignment with a default value:
var [, , , , markthree = 67] = myMarks()
console.log(markthree)

// Functions that return multiple values
// In JavaScript, a function can return a value. However, you can return an array that contains multiple values, for example:
function myData (a, b) {
  return [a + b, (a + b) / 2, a - b]
}

var [sum, average, difference] = myData(20, 10)
console.log(sum, average, difference)
