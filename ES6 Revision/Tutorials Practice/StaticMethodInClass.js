// By definition, static methods are bound to a class, not to the instances of that class.
// Therefore, static methods are useful for defining helper or utility methods.
// In ES6, you define static methods using the static keyword.
// The following example defines a static method called createAnonymous() for the Person class.

class Person {
  
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }

  static createAnonymous (gender) {
    let name = gender == 'Male' ? 'John Walker' : 'Katy Pary'
    return new Person(name)
  }
}

// To invoke the static method, you use the following syntax:
let anonymous = Person.createAnonymous('Male')
console.log(anonymous)

// If you attempt to call the static method from an instance of the class, you’ll get an error. For example, 
let person = new Person('John Walker')
// let anonymous2 = person.createAnonymous('Male') // -> TypeError: person.createAnonymous is not a function

// SUMMARY
//---------
// 1) JavaScript static methods are not shared among instances of a class. Therefore, they are bound to the class only.

// 2) Call the static methods via the class name, not the instances of that class.

// 3) Use the 1) className.staticMethodName() (or) 2) this.constructor.staticMethodName() to call a static method in a class constructor or an instance method.
