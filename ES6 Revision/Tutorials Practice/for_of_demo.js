// (example-1)
// To access the index of the array elements inside the loop,
//------------------------------------------------------------
// you can use the for...of statement with the entries() method of the array.

// The array.entries() method returns a pair of [index, element] in each iteration.
// For example:

var colors = ['Red', 'Green', 'Orange', 'Yellow']

for (let [index, color] of colors.entries()) {
  console.log(`color ${color} is at index no. ${index}`)
}

// (example-2)
// In-place Object destructuring with for…of
//--------------------------------------------
// 1) The ratings is an array of objects. Each object has two properties user and score.

// 2) The for...of iterate over the ratings array and calculate the total scores of all Objects.

// 3) The expression const {score} of ratings uses object destructing to assign the score property of the current iterated element/object to the score variable.

let ratings = [
  { name: 'John', score: 3 },
  { name: 'Jane', score: 7 },
  { name: 'David', score: 4 },
  { name: 'Peter', score: 9 }
]

let sum = 0

for (const { score } of ratings) {
  sum += score
}

console.log('The total sum of scores is', sum)
