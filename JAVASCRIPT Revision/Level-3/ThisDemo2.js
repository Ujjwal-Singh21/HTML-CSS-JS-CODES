// second approach using this keyword,
// here laptop1 will compare itself to laptop2 without any 3rd party method.
// hence creating a compare method inside laptop1 object itself.

let laptop1 = {
  cpu: 'i7',
  name: 'Asus',
  price: 12000,
  
  compare: function (laptop2) {
    // here instead of 'laptop1.price' use 'this.price'.
    if (this.price < laptop2.price) {
      console.log('Laptop1 Asus is cheap and best')
    } else {
      console.log('Laptop2 Lenovo is cheap and best')
    }
  },

  getConfig: function () {
    console.log('laptop1 Asus Price: ' + this.price)
  }
}

laptop1.getConfig()

let laptop2 = {
  cpu: 'i9',
  name: 'Lenovo',
  price: 7500,
  getConfig: function () {
    console.log('laptop2 Lenovo Price: ' + this.price)
  }
}

laptop2.getConfig()

//calling laptop1 object compare method and passing only laptop2 object to it
laptop1.compare(laptop2)
