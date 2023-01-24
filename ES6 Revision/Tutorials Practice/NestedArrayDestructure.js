// Nested array destructuring :
//-----------------------------

// The following function returns an array that contains an element, which is an another array, or nested array.

function getProfile () {
  return ['John', 'Corner', ['Red', 'Green', 'Blue']]
}

// Since the third element of the returned array is an another array, you need to use the nested array destructuring syntax to destructure it, like this,

var [firstname, lastname, [color1, color2, color3]] = getProfile()

console.log(`Name is ${firstname} ${lastname} ,
             His Favourite colors are :
             ${color1},
             ${color2},
             ${color3}`)
