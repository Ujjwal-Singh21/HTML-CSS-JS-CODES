// 1) Suppose if we have an Object called person having a propety 'name' and a method'talk'.

// 2) Now if we want to create another person Object, we need to copy paste same Object code again.

// 3) In future if there is a bug in one Object, since we copied & pasted it again and again to create new Objects each time, we need to debug each Object code and its time consuming.

// 4) Hence in ES6, we can create a class Person using class keyword, and classname should start with Capital letter always.

// 5) Now using that Person class, we can create multiple Objects just by using'new' Keyword.

// creating a class Person:
//-------------------------

class Person {
  
  constructor (name, age, location) {
    this.name = name
    this.age = age
    this.location = location
  }

  walk () {
    console.log(this.name, 'is Walking in ', this.location)
  }

  talk () {
    console.log(this.name, 'is Talking on phone')
  }
}

const person1 = new Person('Peter', 23, 'Australia')
console.log(person1)
person1.walk()
person1.talk()

const person2 = new Person('John', 33, 'Europe')
console.log(person2)
person2.walk()
person2.talk()
