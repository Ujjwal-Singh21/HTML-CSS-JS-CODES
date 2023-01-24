// If we want to create same common object again and again,Then We should go for Constructor Function.
//-----------------------------------------------------------------------------------------------------

function Customer (id, name, pName) {
  this.customerId = id
  this.customerName = name
  this.productName = pName
  this.getDetails = function () {
    console.log('Hello Customer Welcome')
  }
}

let customer1 = new Customer(101, 'Steve', 'Books')
customer1.getDetails()
console.log(customer1)

let customer2 = new Customer(102, 'Bruce', 'Cold Drinks')
customer2.getDetails()
console.log(customer2)

// We can also create a method inside constructor function, which will be common to all Objects
