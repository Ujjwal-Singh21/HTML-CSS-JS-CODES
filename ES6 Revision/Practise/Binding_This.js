// 1) To fix the issues happened in AdvanceThisDemo.js, and if we want to return the Object always while using 'this' keyword, we can use bind() method.

// 2) Now by default, every function in JS is basically Object, hence we can call bind method on function.

// 3) Whatever u pass as argument is bind() method will determine the value of 'this'.

const person = {
  name: 'John',
  age: 15,

  check () {
    console.log(this)
  },

  walk: function () {
    // normal way of creating a method inside object
    console.log('let walk')
  },

  talk () {
    // new way using ES6(skipping : and function keyword)
    console.log('lets talk')
  }
}

// normal :-
//--------
person.check()

// using bind :-
//-----------------
// 1) here when we will call bind() method on check function,it will return a new instance of check function, and also set this to person object, because person is passed as an argument to it.

// 2) hence the value of 'this' in checks() function will be based on the argument we have passed to bind() method in RHS here.
const checks = person.check.bind(person)
checks()
