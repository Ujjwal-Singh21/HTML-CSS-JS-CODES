// 1) 'this' keyword from JS behaves differently from other programming languages.

// 2) the value of this is always determined by how a function is called?

// 3) If you call a function (having this keyword) as a method in an object, then 'this' will always return the reference of that particular object.

// 4) However, if you call a function as a standalone function or outside of an object, then 'this' will return the global object which is window object in browsers.

// 5) But in some implmentations you will see output as undefined instead of browser object, that happens because yout JS code is getting executed in Strict mode.

// 6) Strict mode is basically a mode to execute JS code in more protective way. It prevents the potential problems while executing the JS code. In certain React projects , its enabled by default.

const person = {

  name: 'John',
  age: 15,

  checkFn () {
    console.log(this)
  },

  // normal and typical way of creating a method inside an object
  walkFn: function () {
    console.log('lets walk')
  },

  // new way using ES6 (skipping : and function keyword)
  talkFn () {
    console.log('lets talk')
  }
}

person.checkFn() // -> returns whole person Object

const checks = person.checkFn // -> returns just reference
console.log(checks)

checks() // -> returns undefined in browser in React App
