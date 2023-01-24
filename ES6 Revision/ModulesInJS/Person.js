// exporting Person class to Teacher simply using export keyword

export default class Person {
  constructor (name, age, location) {
    this.name = name
    this.age = age
    this.location = location
  }

  walk () {
    console.log(this.name, 'is Walking on roof in ', this.location)
  }

  talk () {
    console.log(this.name, 'is Talking on phone')
  }
}
