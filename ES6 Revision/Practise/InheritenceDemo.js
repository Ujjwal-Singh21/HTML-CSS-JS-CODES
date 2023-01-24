// PARENT CLASS
//--------------
class Person {

  constructor (name, age, location) {
    this.name = name
    this.age = age
    this.location = location
  }

  walk () {
    console.log(this.name, 'is Walking on roof in', this.location)
  }

  talk () {
    console.log(this.name, 'is Talking on phone')
  }
}

// CHILD CLASS 
//------------
// We need to add an extra property "Degree" here, so creating a constructor. Always use super() keyword in child class to refer to parent class constructor during inheritence

class Teacher extends Person {

  constructor (name, age, location, degree) {
    super(name, age, location)
    this.degree = degree
  }

  teach () {
    console.log(this.name, 'is teaching in ', this.location)
  }
}

const teacher = new Teacher('Ananya', 21, 'Malaysia', 'BSc')
console.log(teacher)

teacher.talk()
teacher.walk()
teacher.teach()

