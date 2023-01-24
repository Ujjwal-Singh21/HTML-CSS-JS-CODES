// Creating a HETEROGENEOUS ARRAY storing different datatypes.
// adding number, string, object, function in a single array.

const data = [
  44,
  'Sameer',
  { salary: 25550 },
  function () {
    console.log('Hello Bruce')
  }
]

console.log(data)

// calling the method available inside array using index number
console.log(data[0], data[1], data[2])
data[3]() //-> used paranthesis because its a function call

// calling the object in array separately
console.log(data[2])
