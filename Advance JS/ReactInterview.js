// Q1: Best scenarios to use arrow and normal functions over each other.
//======================================================================

// case:1 arrow over normal

// Note: Here normal fn doesn't have implicit return hence we have to use return keyword, but this is not the case while using arrow function.

// let arr = [1, 2, 3, 4]

// const doubled = arr.map(e => e * 2)
// console.log(doubled)

// const doubled2 = arr.map(function (e) {
//   return e * 2
// })
// console.log(doubled2)

// case: 2 normal over arrow

// // Here if we use arrow fn then we can't make use of this keyword
// const button = document.getElementById('btn')

// button.addEventListener('click', function () {
//   this.innerHTML = 'Clicked again'
// })

// // Q1.1
// // this and Arrow Functions: Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript. Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside arrow functions is lexically or statically defined. What do we mean by that? Unlike other functions, the value of this inside arrow functions is not dependent on how they are invoked or how they are defined. It depends only on its enclosing context.

// // Let us try to understand with an example:

// // Example 1: In this example, we will create a basic object an see the use of this object in Javascript.

// let People1 = function (person, age) {
//   this.person = person
//   this.age = age
//   this.info = function () {
//     // logs People
//     console.log(this)

//     setTimeout(function () {
//       // here this!=People
//       console.log(this.person + ' is ' + this.age + ' years old')
//     }, 3000)
//   }
// }
// let person1 = new People('John', 21)

// // logs : undefined is undefined years old after 3 seconds
// person1.info()

// // Output:
// //--------
// // People {person: 'John', age: 21, info: ƒ}
// // undefined is undefined years old

// // The reason that we get undefined outputs instead of the proper info as output happens because the function() defined as the callback for setTimeout() has a normal function invocation and as we know, this means that its context is set to the global context or in other words the value of this is set to the window object. This happens because every regular, non-arrow function defines its own this or context depending on their invocation. The context of the enclosing objects/function does not affect this tendency to automatically define their own context. How do we solve this? One obvious solution that comes to mind is, what if the function did not define its own context? What if it inherited the context from the info(), because that would mean this function() gets the this as was defined in info() Well, that is exactly what arrow functions do. They retain the value of this from their enclosing context.

// // That is, in the above example, if the function defined as callback for setTimeout() were an arrow function it would inherit the value of this from it’s enclosing context – info()

// let People = function (person, age) {
//   this.person = person
//   this.age = age
//   this.info = function () {
//     // logs People
//     console.log(this)

//     setTimeout(() => {
//       // arrow function to make lexical "this" binding
//       // here this=People."this" has been inherited
//       console.log(this.person + ' is ' + this.age + ' years old')
//     }, 3000)
//   }
// }
// let person2 = new People('John', 21)

// // logs : John is 21 years old after 3 seconds
// person2.info()

// // Output:
// // -------
// // People {person: 'John', age: 21, info: ƒ}
// // John is 21 years old

// // Thus, regardless of whether the arrow function was called using function invocation or method invocation, it retains the ]value of this from its enclosing context. In other words, an arrow function’s this value is the same as it was immediately outside it.

// // If used outside any enclosing function, an arrow function inherits the global context, thereby setting the value of this to the global object.

// // this in separated methods:
// //---------------------------
// // When a method from any object is separated from it, or stored in a variable, eg: let separated = People.info, it loses the reference to its calling object.
// // Notice the lack of opening and closing parentheses after info. This indicates that we are not calling the method immediately.

//-----------------------------------------------------------------------------------------------------------------

// // Q2: Nested Object Destructuring
// //================================

// const user = {
//   name: 'Ujjwal',
//   address: {
//     street: 'LA',
//     pincode: '123'
//   }
// }

// // const { name, street } = user
// // console.log(name, street); // ujjwal undefined

// // const { name, address: {street} } = user
// // console.log(name, street); // ujjwal LA

// // But If user object is coming from some api and say its null, then application will break if we destructure like this, hence we have to perform null check

// const user2 = null

// // const { name, address: {street} } = user2
// // console.log(name, street); // Uncaught TypeError: Cannot destructure property 'name' of 'user2' as it is null.

// const { name, address } = { ...user2 }
// const { street } = { ...address }
// console.log(name, street) // undefined  undefined

// //------------------------------------------------------------------------------------------------------------------

// // Q3: setTimeout()
// //=================
// const object = {
//   message: 'Hello World!',
//   logMessage () {
//     console.log(this.message)
//   }
// }

// setTimeout(object.logMessage, 1000) // undefined
// // Because setTimeout takes this fn as callBack fn but calls it like a normal fn and inside a normal fn 'this' keyword refers to windows object.

// setTimeout(() => object.logMessage(), 1000) // Hello World!


//-------------------------------------------------------------------------------------------------------------------

// Q4: Callback Hell and solving it using Promise
//------------------------------------------------

// const multiplyBy2 = (num) => {

//   // setTimeout(() => {
//   //   cb(undefined, num * 2)
//   // }, 400)

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * 2)
//     }, 400)
//   })
// }

// const multiply = (num) => {

//   // multiplyBy2(num, (err, res2) => {

//   //   if(!err) {

//   //     multiplyBy2(res2, (err, res3) => {

//   //       if(!err) {

//   //         multiplyBy2(res3, (err, res4) => {
//   //             console.log(res4)
//   //         })
//   //       } else {
//   //         console.log('Error in second call')
//   //       }
//   //     })
//   //   } else {
//   //     console.log('Error in First Call')
//   //   }
//   // })

//   multiplyBy2(num).then((data) => {
//     multiplyBy2(data).then((data) => {
//       multiplyBy2(data).then((data) => console.log('Data: ' + data))
//     })
//   }).catch((err) => console.log('Error: ' + err))
// }


// multiply(10); // 80



//---------------------------------------------------------------------------------------------------------------------

// // Q5: Get the desired output from below object with and without Object.entries() method. 
// //---------------------------------------------------------------------------------------
// const person = {
//   name: 'Ram',
//   age: 30
// }

// // Desired output 1:
// //------------------
// /* [ 
//      ['name', 'ram'], ['age', '30'] 
//    ] 
// */

// console.log(Object.entries(person)); // -> [ [ 'name', 'Ram' ], [ 'age', 30 ] ]

// // Desired output 2:
// //------------------

// function getObjectEntries(obj) {

//   // let object = obj;
//   // let resArr = [];
//   // resArr.push(Object.keys(object), Object.values(object));
//   // return resArr;

//   const objKeys = Object.keys(obj);

//   return objKeys.map((key) => { 
//     const value = obj[key];
//     return [key, value];
//   })
// }

// // console.log(getObjectEntries(person)); // -> [ [ 'name', 'age' ], [ 'Ram', 30 ] ]

// console.log(getObjectEntries(person)); // -> [ [ 'name', 'Ram' ], [ 'age', 30 ] ]
