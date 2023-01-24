// 'this' keyword always refers to or represents current Object.

// 1) by normal approach
let employee = {
  name: 'Bruce',
  age: 25,
  salary: 15600,

  // using objectname.propertyname to access it
  getInfo: function () {
    console.log('Name: ' + employee.name + ' Salary: ' + employee.salary)
  }
}

employee.getInfo()

// 2) using this keyword
let employee1 = {
  name: 'Peter',
  age: 35,
  salary: 33600,

  // using this keyword
  getInfo: function () {
    console.log('Name: ' + this.name + ' Salary: ' + this.salary)
  }
}

employee1.getInfo()
