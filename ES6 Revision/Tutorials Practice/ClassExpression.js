// 1) Similar to functions, classes have expression forms. A class expression provides you with an alternative way to define a new class.

// 2) A class expression doesn’t require an identifier after the class keyword. And you can use a class expression in a variable declaration and pass it into a function as an argument.

// How it works :-
//-----------------

// a) On the left side of the expression is the Person variable. It’s assigned to a class expression.

// b) The class expression starts with the keyword class followed by the class definition.

// c) A class expression may have a name or not. In this example, we have an unnamed class expression.

// d) If a class expression has a name, its name can be local to the class body.

var Person = class {

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  getname () {
    return this.name
  }

  getAge () {
    return this.age
  }
}

// e) The following creates an instance of the Person class expression. Its syntax is the same as if it were a class declaration.

let person1 = new Person('John', 30)
console.log(person1)
console.log(person1.getname())
console.log(person1.getAge())
