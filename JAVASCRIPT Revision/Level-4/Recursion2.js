// Using recursion, finding the factorial of a number
// 5! = 5 * 4 * 3 * 2 * 1 => 120
// similar to -> n! = n * (n-1) * (n-2) * ....... *(n-n)
// can also be written as
// 5! = 5 * 4! => 120 similar to n! = n * (n-1)!

function factorial (n) {
  // (n-1)! can written as factorial(n-1)
  return n * factorial(n - 1)
}

// But if we run above code, due to recursion, stack size will become full, and error will come.
// Hence we need to stop our factorial function once n becomes 0.
// Hence making some changes in above code according to scenario above.

function fact (n) {
  // stopping function call when n becomes 0, to avoid stcak full error
  if (n == 0) {
    return 1
  } else {
    return n * fact(n - 1)
  }
}

let value = 5
let result = fact(value)
// finally printing the result
console.log('Factorial result: ' + result)
