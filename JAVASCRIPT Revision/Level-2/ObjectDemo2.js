// Creating an Object Inside another Object

let employee = {
  eId: 401,
  eName: 'Akshay',
  eSalary: 25000,
  experience: '5 years',
  laptop: {
    laptopName: 'Lenovo',
    laptopRAM: 8,
    laptopPrice: 10000 // here comma ',' is optional at last property
  }
}

console.log(employee)
console.log(employee.eName)
console.log(employee.laptop.laptopName)
console.log(employee.laptop.laptopName.length) // to find length

// What if laptopName is not available in employee object, hence finding its length will throw errors
// Hence we can use ? operator to avoid errors
// console.log(employee.laptop.laptopName1.length) // -> error: can't read property
console.log(employee.laptop.laptopName1?.length) // no error just says undefined

// to delete a particular property from employee object use delete method
delete employee.experience
console.log('After delete: ', employee)
