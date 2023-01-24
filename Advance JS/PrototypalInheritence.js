// In JS Inheritance is supported through the concept of prototypes only, and so it is called as Prototypal Inheritance.

// Parent Constructor Function:
//-----------------------------
function Person (fname, lName) {

  this.firstName = fname;
  this.lastName = lName;
}

// Adding a common, shareable among all instances, method as property to Person constructor function by making use of 'prototype' object.
Person.prototype.getFullName = function () {

  return this.firstName +' '+ this.lastName;
}

// Child SuperHero Constructor Function:
//--------------------------------------
// -> Instead of copying pasting firstName and lastName properties again here, 
// -> We can inherit that from Parent function 'Person'
// -> But 'this' keyword in Parent Constructor Function will be pointing to empty object of Parent's instance, but We want this keyword from Parent to point/refer to object of our SuperHero's created instances.
// -> After Creating SuperHero's instance using new keyword, 'this' keyword of SuperHero's Function will be pointing to newly created empty object, but we want Parent Person's function 'this' keyword also to start pointing this SuperHero's newly created object.
// -> Hence we call Person function using .call() method and specify SuperHero's newly created object as 1st arg and fName, lName values as 2nd and 3rd args.
function SuperHero (fName, lName) {

  // this -> {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

// Adding a common, shareable among all instances, method as property to SuperHero constructor function by making use of 'prototype' object.
SuperHero.prototype.fightingCrime = function () {

  console.log('SuperHero is fighting crime bravely');
}

// -> Getting or Inheriting getFullName() method from Parent's prototype object into child's prototype object using Object.create() method.
// -> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// -> Object.create() will delegate search control to another chained object during failed lookups, means when getFullName() method will not be found in child's prototype object then searching control will be delegated to Parent's prototype object.
SuperHero.prototype = Object.create(Person.prototype);

// After all this, JS thinks that SuperHero is created from Person, Which is wrong, so we make it clear by communicating to JS by writing this line of code.
SuperHero.prototype.constructor = SuperHero;


// Finally creating an instance of SuperHero Constructor Function using new keyword
const batMan = new SuperHero('Bruce', 'Wayne'); 
// -> { fistName: Bruce, lastName: Wayne, isSuperHero: true }


console.log(batMan);
console.log(batMan.isSuperHero);
console.log(batMan.getFullName());
batMan.fightingCrime(); // -> call it before Object.create()
