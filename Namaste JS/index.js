// // 1) Hoisting :
// //==============
// console.log(a)
// // console.log(l) // ->  Cannot access 'l' before initialization
// // console.log(c) // ->  Cannot access 'c' before initialization

// var a = 10
// let l = 100
// const c = 19

// function b () {
//   var x = 20
// }

// console.log(a)
// console.log(x) // -> Uncaught ReferenceError: x is not defined

//-----------------------------------------------------------------------------------------------------------------------

// 2) setTimeout with closure :
//=============================

// Goal: To print 1, 2, 3, 4, 5 after a second passes.

// 2.1) Issues while using var -> o/p is 6,6,6,6,6
// This is because every setTimeout() callback fns are referring to same i which has same m/y location.
// So once the loop ends with i value being 6 till for loop condition becomes false, then all callbacks are executed one by one,
// Since last i value was 6, they find 6 being stored inside the variable i,
// Therefore 6 is being printed by every callBack fn at the end.
//-----------------------------------------------------------------------------------------------------------

// function X () {

//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }

//   console.log('Namaste JavaScript', i)
// }

// X()

//------------------------------------------------------------------------------------------------------------

// 2.2) Issue Solved while using let keyword -> o/p is 1, 2, 3, 4, 5
// This is because every setTimeout() callback is referring to a new copy of i.
// Because let keyword is used to declare blocked scoped variable, and hence during every loop iteration a new copy of i is getting created and every setTimeout call function is pointing to their own separate copy of i variable with values 1,2,3,4,5 respectively.

// function X () {

//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }

//   // since now i is declared using let keyword, it is blocked scoped to for loop and hence it cannot be accessed outside the for loop.
//   // console.log('Namaste JavaScript', i) // index.js:60 Uncaught ReferenceError: i is not defined
// }

// X()

//-----------------------------------------------------------------------------------------------------------------------

/*
 2.3) To make it work perfectly even with var keyword, we can create a new function inside the function X and place our setTimeout() inside that newly created inner function. Then call that inner function from inside for loop by passing a new value of i every time as parameter. So during every loop iteration, inner function will be invoked with a new value of i and so every setTimeout callback function will have their own separate copy of i value.
*/

// function Outer () {

//   for (var i = 1; i <= 5; i++) {
  
//     function inner(arg) {
//       setTimeout(function () {
//         console.log(arg)
//       }, arg * 1000)
//     }
//     inner(i)
//   }

//   console.log('Namaste JavaScript')
// }

// Outer()

// ---------------------------------------------------------------------------------------------------

// 3) Closure with eventListeners :
//=================================
function attachEvenetListeners () {

  var count = 0;

  document.getElementById("clickMe").addEventListener('click', function xyz () {
    console.log('Button clicked', ++count)
  })
}

attachEvenetListeners()


