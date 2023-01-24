// Q12: IIFE (Immediately Invoked Function Expression)
//----------------------------------------------------

// Ex-1
//-----
(function outer(x) {
  return function inner(y) {
    console.log(x, y)
  }
})(4)(5)

// Ex-2
//-----
// (function square(a) {
//   console.log(a * a)
// })(4)


//-----------------------------------------------------------------------------------------------------------------------


// Q13: Create a function multiplyByTwo(obj) that takes an object as its parameter and multiply only all the numeric properties values by 2

let obj = {
  a: 100,
  b: 200,
  c: 300,
  title: 'my nums'
}

function multiplyNumeric(obj) {

  for(let key in obj) {

    if(typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }

  console.log('Modifed object: ', obj)
}

multiplyNumeric(obj)

//-----------------------------------------------------------------------------------------------------------------------

// Q14: What will be the output of the code 
//-----------------------------------------

const checkObj = {}
console.log('Converting an object as string:', checkObj.toString()) // -> [object Object]

const object1 = {} // -> { [object Object]: 123 initially, then rewritten as 456 }
const object2 = { key: 'b' }
const object3 = { key: 'c' }

object1[object2] = 123 // -> object1['[object Object]'] = 123
object1[object3] = 456 // -> object1['[object Object]'] = 456, hence here 123 value gets replaced by 456 because key is same

console.log(object1) // {[object Object]: 456}
console.log(object1[object2]) // 456


//---------------------------------------------------------------------------------------------------------------------- 


// Q15: JSON.stringify() vs JSON.parse()
//-------------------------------------- 

// JSON.stringify() is used to convert an object into string format so that we can store it in Local Storage, and the JSON.parse() is used to convert back the object currently in string format back into actual object format.

const user = {
  fname: 'Clarke',
  lname: 'Kent',
  age: 1000
}

console.log('Actual Object:', user)
console.log('Converted to string format:', JSON.stringify(user))

const userObj = JSON.stringify(user)
console.log('Converted back to actual object format:', JSON.parse(userObj))


//----------------------------------------------------------------------------------------------------------------------


// Q16: What will be the output (Spread Operator, JSON.stringify(), Nested Destructuring )
//----------------------------------------------------------------------------------------

// Question-1
//-----------
const userObject = {
  name: 'Diana',
  age: 19
}

const admin = {
  isAdmin: true,
  ...userObject
}

console.log(admin) // -> { isAdmin: true, name: 'Diana', age: 19 }


//----------------------------------------------------------------------------------------------------------------


// Question-2 
//-----------
const settings = {
  name: 'Vishwas Gopinav',
  age: 20,
  health: 90
}

// ignores name, converts just age & health into string
const data = JSON.stringify(settings, ['age', 'health']);

console.log(data) // -> { "age":20, "health":90 }

// @param value — A JavaScript value, usually an object or array, to be converted.

// @param replacer — An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.


//---------------------------------------------------------------------------------------------------------------------


// Question-3
//-----------
const person = {
  city: 'Kolkata',
  age: 27,
  fullName: {
    fname: 'Bruce',
    lname: 'Banner'
  }
}

const { city, age: PersonAge } = person
console.log(city, PersonAge) // Kolkata 27

const { fullName: {fname, lname} } = person 
console.log('Nested Destructing:', fname +' '+ lname ) // Bruce Banner


//-----------------------------------------------------------------------------------------------------------------------


// Q17: Object referencing
//------------------------

// Example-1
//----------
let x = { 
  greeting: 'Hi' 
}

let y;

y = x; // -> here x has not been assigned to y, instead y is just referencing to x object 

x.greeting = 'Hello'
console.log(y.greeting) // -> Hello 

//-----------------------------------------------------------------------------------------------------------------------

// Example-2 
//----------

//In both cases it returns false because both objects are stored at different memory locations
console.log({x: 1} == {x: 1})
console.log({x: 1} === {x: 1}) 


//----------------------------------------------------------------------------------------------------------------------


// Example-3
//----------

let userobj = { 
  name: 'Bruce' 
}

let userarr = [userobj]

// userobj = null
// console.log(userarr) // -> { name: 'Bruce' }

userobj.name = null
console.log(userarr) // -> // -> { name: null }

//-----------------------------------------------------------------------------------------------------------------------

// Example-4
//---------- 

const value = { 
  number: 10 
}

function multiply(x = {...value}) {
  console.log(x)
  console.log(x.number *= 2);
  console.log(x)
}

multiply() // 20
multiply() // 20
multiply(value) // 20
multiply(value) // 40

//----------------------------------------------------------------------------------------------------------------------

// Example-5
//----------

function changeAgeAndReference(person) {

  person.age = 35;

  person = {
    name: 'Virat Kohli',
    age: 33
  }

  return person;
}

const personobj1 = {
  name: 'Rohit Sharma',
  age: 24
}

const personobj2 = changeAgeAndReference(personobj1)

console.log(personobj1) // -> { name: 'Rohit Sharma', age: 35 }
console.log(personobj2) // -> { name: 'Virat Kohli', age: 33 }


//---------------------------------------------------------------------------------------------------------------------- 

// Q18: How to make deep copy or clone of an Object?
//--------------------------------------------------- 

const personObj = {
  name: 'Clarke Kent',
  age: 41
}

// Here are the 3 ways to do this.

//Approach-1 (changes in cloned object will not modify anything in actual object)
//-------------------------------------------------------------------------------
const clone1 = Object.assign({}, personObj) // makes a shallow copy

clone1.name = 'Bruce Wayne'
console.log(personObj, clone1)

//Approach-2
//----------
const clone2 = JSON.parse(JSON.stringify(personObj)) // makes deep copy but only of values and ignores all functions

clone2.name = 'Diana'
console.log(personObj, clone2) 

//Approach-3
//----------
const clone3 = {
  ...personObj
}

clone3.name = 'Steve Rogers'
clone3.age = 700
console.log(personObj, clone3)




