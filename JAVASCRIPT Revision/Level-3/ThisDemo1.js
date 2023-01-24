// Creating 2 laptop Objects and comparing both based on their price.
// Normal approach using a 3rd party or external method.

let laptop1 = {
  cpu: 'i7',
  name: 'Asus',
  price: 12000,
  getConfig: function () {
    console.log('laptop1 Price: ' + this.price)
  }
}

laptop1.getConfig()

let laptop2 = {
  cpu: 'i9',
  name: 'Lenovo',
  price: 7500,
  getConfig: function () {
    console.log('laptop2 Price: ' + this.price)
  }
}

laptop2.getConfig()

// using an external getBestLaptop method to compare both laptops
function getBestLaptop (laptop1, laptop2) {
  if (laptop1.price < laptop2.price) {
    console.log('Laptop1 Asus is cheap and best')
  } else {
    console.log('Laptop2 Lenovo is cheap and best')
  }
}

// calling that external method and passing 2 laptop objects
getBestLaptop(laptop1, laptop2)
