// Classes were introduced in 2015 in JS
// Classes are just a syntactic sugar of existing function based Prototypal Inheritance.
// So writing the same previous code using class syntax.
// Inheritance in class in taken by 2 things, 1) extends keyword & 2) super() method.

//Parent class
class Person {

  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  getFullName() {

    return this.firstName +' '+ this.lastName;
  }
}

//Child class
class SuperHero extends Person {

  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }

  fightingCrime() {
    console.log('SuperHero is fighting crime bravely');
  }
}

const batMan = new SuperHero('Bruce', 'Wayne');

console.log(batMan);
console.log(batMan.isSuperHero);
console.log(batMan.getFullName());
batMan.fightingCrime();

const readlinesync = require('readline-sync')
const username = readlinesync.question('Enter your name')

console.log('Hello', username)