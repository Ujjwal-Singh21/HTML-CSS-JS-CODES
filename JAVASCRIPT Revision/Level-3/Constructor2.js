// Practise of Prototype with Constructor Function :
//-------------------------------------------------
function Customer (id, name, pName) {
  this.customerId = id
  this.customerName = name
  this.productName = pName
}

let customer1 = new Customer(1001, 'Clarke', 'Cars')
let customer2 = new Customer(1002, 'Diana', 'Red Wine')
console.log(customer1)
console.log(customer2)

//adding a new property which will be a function, available to customer1 instance only:
//--------------------------------------------------------------------------------------
// customer1.getDetails = function () {
//   return this.customerId + ' ' + this.customerName + ' ' + this.productName
// }
// console.log(customer1)

// now this getDetails will be available only to customer1 instance,
// this will not be available & acccessible to customer2 instance.
//---------------------------------------------------------------------
// console.log(customer1.getDetails()) // -> runs successfully
// console.log(customer2.getDetails()) // -> ERROR

// So making that accessible to all instance of Customer :
//--------------------------------------------------------
Customer.prototype.getDetails = function () {
   return this.customerId + ' ' + this.customerName + ' ' + this.productName
}

// Now this getDetails will be available to all instances of Customer :
//-----------------------------------------------------------------------
console.log(customer1.getDetails()) // -> runs successfully
console.log(customer2.getDetails()) // -> runs successfully
