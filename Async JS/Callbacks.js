// In JavaScript, functions are 'First Class Objects', which means they can be passed as a parameter to another function and also can be returned from another function as a value.
// Any function that is passed as an argument to another function is called as 'callback function', and the function which accepts a function as an argument or returns a function as a value is called as 'Higher Order Function'.

function greet(name) {
  console.log('Hello', name)
}

function HigherOrderFunction(callbackFn) {

  const name = 'Vishwas'
  callbackFn(name)
}

HigherOrderFunction(greet);
