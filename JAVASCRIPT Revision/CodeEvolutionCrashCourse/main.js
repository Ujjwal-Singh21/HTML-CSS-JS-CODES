//NOTE -> RUN ONE AT A TIME AND KEEP OTHERS COMMENTED.
//----------------------------------------------------

// 1) Closure:
//============

//Example-1
//----------
// function Outer () {
  
//   let counter = 0

//   function Inner () {
//     counter++
//     console.log(counter)
//   }

//   Inner()
// }

// Outer()
// Outer()

//Example-2
//----------
// function Outer () {

//   let counter = 0

//   function Inner () {
//     counter++
//     console.log(counter)
//   }

//   return Inner
// }

// const fn = Outer()
// fn()
// fn()

// =======================================================================================================

// // 2) Currying :
// //===============

// // Currying is a transformation of functions that translates a function from
// // callable as f(a, b, c) into callable as f(a)(b)(c).

// // Normal Version:
// //----------------

// function sum (a, b, c) {
//   return a + b + c
// }

// console.log(sum(2, 3, 5))

// //Curried Version:
// //----------------

// function curry (fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c)
//       }
//     }
//   }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)

//=======================================================================================================================

// // 3) this Keyword :
// //===================

// // Order Of Precedence
// // New Binding <-- Explicit Binding <-- Implicit Binding <-- Default Binding

// // 1) Implicit Binding :
// //-----------------------

// const person = {
//   name: 'Vishwas',
//   sayMyName: function () {
//     console.log(`My Name is ${this.name}`)
//   }
// }

// // person.sayMyName()

// // 2) Explicit Binding :  -> using call() method
// //------------------------------------------------

// // providing name in Global Scope for Default Binding
// // const name = 'SuperMan' // -> if it were an browser
// globalThis.name = 'SuperMan'

// function sayMyName () {
//   console.log(`My Name is ${this.name}`)
// }

// // sayMyName.call(person)

// // 3) New Binding : -> using Constructor Function
// //-------------------------------------------------
// function Person (name) {
//   // this -> {}
//   this.name = name
// }

// const person1 = new Person('Steve')
// const person2 = new Person('Clarke')
// // console.log(person1.name, person2.name)

// // 4) Default Binding : -> providing a name is Global Scope for this Keyword
// //----------------------------------------------------------------------------
// // sayMyName()

//=====================================================================================================================

// // 4) Prototype :
// //================

// function Person (fName, lName) {
//   this.firstName = fName
//   this.lastName = lName
// }

// const person1 = new Person('Bruce', 'Wayne')
// const person2 = new Person('Steve', 'Rogers')

// // Without Prototype -> this function is only accessible by instance person1.
// //--------------------------------------------------------------------------------
// // person1.getFullName = function () {
// //   return this.firstName + ' ' + this.lastName
// // }

// // With Prototype -> this function now will be accessible & available to all the instances.
// // Created with the 'Person' Constructor Function's prototype.
// //------------------------------------------------------------
// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName
// }

// console.log(person1.getFullName())
// console.log(person2.getFullName())

//============================================================================================================

// // 5) Prototypal Inheritance :
// //=============================

// // Parent Constructor Function
// function Person (fName, lName) {
//   this.firstName = fName
//   this.lastName = lName
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName
// }

// // Child Constructor Function
// function SuperHero (fName, lName) {
//   // this - {}
//   Person.call(this, fName, lName)
//   this.isSuperhero = true
// }

// SuperHero.prototype.fightingCrime = function () {
//   console.log('Fighting Crime')
// }

// //Inheriting getFullName() from parent to child using Object.create() & Prototype Chain
// SuperHero.prototype = Object.create(Person.prototype)

// //finally
// SuperHero.prototype.constructor = SuperHero

// //creating 1st instance of SuperHero
// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.firstName, batman.lastName)
// console.log(batman.getFullName())

// //creating 2nd instance of SuperHero
// const ironMan = new SuperHero('Tony', 'Stark')
// console.log(ironMan.firstName, ironMan.lastName)
// console.log(ironMan.getFullName())

//==================================================================================================

// // 6) class :
// //============

// // Doing same thing as Done above in Prototypal Inheritance but this time using class
// // A JS class is just a syntactic sugar over what was already existing in JS

// // Parent class
// class Person {

//   constructor (fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
//   }

//   //method
//   getFullName () {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// // Child class
// class SuperHero extends Person {

//   constructor (fName, lName) {
//     super(fName, lName)
//     this.isSuperHEro = true
//   }

//   //method
//   fightingCrime () {
//     console.log('Fighting Crime')
//   }
// }

// //creating 1st instance of Child class
// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.getFullName())

//=====================================================================================================

// // 7) Iterables & Iterator - Protocol :
// //=======================================

// // creating our own iterable Object

// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0
//     const iterator = {
//       next: function () {
//         step++
//         if (step === 1) {
//           return { value: 'Hello', done: false }
//         } else if (step === 2) {
//           return { value: 'World', done: false }
//         }
//         return { value: undefined, done: true }
//       }
//     }
//     return iterator
//   }
// }

// //running it using for...Of loop
// for (const words of obj) {
//   console.log(words)
// }

//======================================================================================================

// 8) Generators :
//================

//A normal function
function normalFunction () {
  console.log('Hello')
  console.log('World')
}

normalFunction()

// A generator function that returns an iterator for us
function * generatorFunction () {
  yield 'Hello'
  yield 'World'
}

const generatorObject = generatorFunction()

//this returned generatorObject is an iterator
//hence we can use for...Of loop on it
for (const words of generatorObject) {
  console.log(words)
}

//====================================================================================================
