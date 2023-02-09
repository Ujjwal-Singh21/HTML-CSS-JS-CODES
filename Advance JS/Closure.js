// When we return an inner function from an Outer function, a combination of 2 things gets returned, 
// those 2 things are: 1) the inner function itself 2) the lexical scope of inner function which has references to its surrounding state (means reference to the scope of its Parent function also).

function outerFn () {
  var count = 25

  function innerFn () {
    ++count
    console.log('Counter:', count)
  }

  return innerFn
}

const returnedFn = outerFn()

returnedFn() // 26 -> hence it remembers the count value from its parent function scope even after its parent execution has totally completed above, also new count value is 26 now.

returnedFn() //27 -> because last count value the function remembers is 26.
