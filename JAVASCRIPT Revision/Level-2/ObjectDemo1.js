// creating a simple object and seeing different ways to print them :-
//====================================================================

// creating an employee object
let employee = {
  employeeName: 'Bruce Wayne',
  employeeAge: 24,
  'work exp': '5 Years'
}

//adding few new properties like -> City : 'Australia' & -> 2020 : 'Best Year'
let data = 'City'
employee[data] = 'Gotham' // or -> employee['City'] = 'Gotham'

let year = 2020
employee[year] = 'Best Year' // or -> employee[2020] = 'Best Year'

console.log(employee)

//incrementing employeeAge value by 1
console.log('Initial Age: ', employee.employeeAge)
employee.employeeAge = ++employee.employeeAge
console.log('Incremented Age: ', employee.employeeAge)

console.log(employee)
console.log(employee[2020])
console.log(employee.employeeName)
console.log(employee.employeeAge)
console.log(employee['work exp'])

// when user gives input then also use [] to fetch data
//-----------------------------------------------------

let userInput = 'employeeName'
console.log(employee.userInput) // error, says undefined, hence using []
console.log(employee[userInput])
