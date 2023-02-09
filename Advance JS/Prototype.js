// By default, every function in JS has a property called as 'prototype' that points to an object.
// We can make use of that prototype object to determine new properties that will be shareable and available to all instances of that function.
// We all know that JS is a dynamic language, so it allows us to attach new properties to an existing object at any given time. 

function Employee (fName, lName) {

  //this -> {}
  this.firstName = fName;
  this.lastName = lName;
}

//creating 2 instances of Employee constructor function using new keyword,
const employee1 = new Employee('Bruce', 'Wayne'); // { firstName: Bruce, lastName: Wayne }
const employee2 = new Employee('Clarke', 'Kent'); // { firstName: Clarke, lastName: Kent }

//now adding new function that is available only to employee1 instance,
employee1.introFunction = function () {
  console.log('Hi I am employee1');
}

employee1.introFunction(); 
// employee2.introFunction(); // -> TypeError: employee2.introFunction is not a function.

// Hence using prototype object, we are adding a common shareable function to Employee function which will be available to each and every instances of Employee constructor function,
Employee.prototype.sayName = function() {
  return this.firstName +' '+ this.lastName;
}

console.log(employee1.sayName());
console.log(employee2.sayName());