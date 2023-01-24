// printing an Object using for-in loop

let employee = {
  Id: 501,
  Name: 'Sameer',
  Salary: 25500,
  Experience: '5 years',
  Laptop: {
    laptopName: 'Asus',
    laptopRAM: 12,
    laptopPrice: 12999 
  }
}

// getting only keys using for-in loop
for (let keys in employee) {
  console.log(keys) // prints only keys of employee
}

// Now printing both keys and values
for (let keys in employee) {
  console.log(keys, employee[keys])
}

// printing only data of inner laptop object
for (let keys in employee.Laptop) {
  console.log(keys, employee.Laptop[keys])
}
