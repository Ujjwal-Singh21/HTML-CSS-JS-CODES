// my idea is -> "Java class + properties = JS object"
// creating an Object with some properties and also a method in it.
let employee = {
  name: 'RajKumar',
  age: 25,
  salary: 15600,

  greet: function () {
    // creating a method like earlier,
    // greet = function(){} but use ':' here instead of '='
    console.log('Hello Rajkumar Welcome')
  }
}

// calling the method using class name dot method name like static in Java
employee.greet() //Hello Rajkumar Welcome
console.log(employee.greet) //[Function: greet]
