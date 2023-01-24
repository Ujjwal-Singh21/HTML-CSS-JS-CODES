// Currying is a process in JavaScript in which we transform a normal function with multiple arguments
// into a sequence of functions which takes one argument at a time. eg: sum(a,b,c) into -> sum(a)(b)(c)

// First lets understand that How to call an inner function while calling the outer function which
// return the inner function.

function outerFn () {
  var a = 20

  function innerFn () {
    var b = 40
    console.log(a, b)
  }

  return innerFn
}

outerFn()()

//-------------------------------------------------------------------------------------------------

//A normal sum function
function sum (a, b, c) {
  return a + b + c
}

const result = sum(10, 20, 30)
console.log('Normal Sum Result:', result)

//Creating a curriedSum function that takes our normal sum function and returns its curried version.
function curriedSum (normalSumFn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return normalSumFn(a, b, c)
      }
    }
  }
}

const curriedSumRes = curriedSum(sum)
//In curriedSumRes first function that takes 'a' as parameter is returned.
//So now if we call curriedSumRes(a value) function, it will return the function that takes 'b' as
//parameter and list goes on till last function that takes 'c' as parameter. So we will call it as
//curriedSumRes(value for a)(value for b)(value for c).

console.log('Curried Sum Result:', curriedSumRes(10)(20)(30))

//can be called like this also
const resValue = curriedSumRes(10)(20)(30)
console.log('Another Way:', resValue)

//can also be called like this for better understanding
const add10 = curriedSumRes(10)
const add20 = add10(20)
const add30 = add20(30)
console.log('One More Way:', add30)
