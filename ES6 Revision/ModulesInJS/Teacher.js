// importing Person class from person.js
//exporting Teacher class to main.js using export keyword
import { Person } from './Person'

export default class Teacher extends Person {
  constructor (name, age, location, degree) {
    super(name, age, location)
    this.degree = degree
  }

  teach () {
    console.log(this.name, 'is teaching in ', this.location)
  }
}
