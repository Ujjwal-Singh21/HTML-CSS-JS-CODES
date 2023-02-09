



// const arr = [2, 4, 6, 8, 10]

// const res = arr.reduce((accum, val) => accum + val, 5)

// console.log(res)

//-------------------------------------------------------------------------------------------

// var name = 'Victor'

// function first () {
//   var a = 'Hi!'
//   second()
//   console.log(`${a} ${name}`)
// }

// function second () {
//   var b = 'Hey!'
//   third()
//   console.log(`${b} ${name}`)
// }

// function third () {
//   var c = 'Hello!'
//   console.log(`${c} ${name}`)
// }

// first()

//----------------------------------------------------------------------------------

// const obj1 = {
//   name: 'Ajay',
//   fun () {
//     return () => {
//       console.log(this)
//       console.log(this.name)
//     }
//   }
// }

// obj1.fun()()

// const obj2 = {
//   name: 'Akshay'
// }

// obj1.fun.call(obj2)

//---------------------------------------------------------------------------------------

// const myObj = {
//   showArgs1() {
//     console.log(arguments)
//   },

//   showArgs2: () => {
//     console.log(arguments)
//   }
// }

// myObj.showArgs1(11, 2, 3, 4) // -> [ 11, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ ]
// myObj.showArgs2(11, 2, 3, 4) // -> Uncaught ReferenceError: arguments is not defined at Object.showArgs2
