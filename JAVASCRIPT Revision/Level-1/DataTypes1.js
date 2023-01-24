// DATA TYPES IN JAVA SCRIPT
// ============================

// 1) There are 2 types of data types in JS.
//     a) Primitives -> Number(bigInt for bigger numbers), String, boolean, null,
//                      undefined,Symbol.
//     b) Object ->

//Performing different things in JS using Numbers
let data = 8 // number
let name = 'Sameer' // string

let num1 = 23456789
console.log(num1 * 25)

// using typeof operator that returns type of data passed
let uname = 'Ujjwal'
let num2 = 55.6
console.log(typeof uname)
console.log(typeof num2)

// hexadecimel(15)
let num3 = 0xf
console.log(num3)
console.log(typeof num3)

// exponential (1.5 * 10 power 12)
let num4 = 1.5e12
console.log(num4)

// using underscore for confusing numbers
let num5 = 100_00_00
console.log(num5)

// plus infinity and minus infinity in JS
let value1 = 5 / 0
let value2 = -5 / 0
console.log("Plus Infinity: ", value1)
console.log("Minus Infinity: ", value2)

// maximum number range in JS using NUMBER interface
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 10) //Infinity

//bigger num gets hidden in console while displaying
console.log(10102030030430404040404004040)
// keep 'n' at end to print bigger numbers exactly in console without loosing anything.
let bignum = 10102030030430404040404004040n
console.log(bignum)

// adding normal number with bigInt shows error as
// cannot mix BigInt and other types, use explicit conversions
//console.log(bignum + 2)
console.log(bignum + 2n) // add 'n' to avoid above error

// NAN(Not A Number) and number
let num = 6
console.log(6 / 'abc') // NAN error
console.log(typeof (6 / 'abc')) // It says Number
