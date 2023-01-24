// normal vs using ternary operator

let num = 6
let result

// Normal approach
//-----------------

if (num % 2 === 0) {
  result = 'Even Number'
} else {
  result = 'Odd Number'
}

console.log(result)

// Ternary Approach
// -----------------

result = num % 2 === 0 ? 'Even Number' : 'Odd Number'
console.log(result)
