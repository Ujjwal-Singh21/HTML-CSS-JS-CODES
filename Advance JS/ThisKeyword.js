// -> this keyword in JS is used inside function (Constructor fn), and it refers to the object it belongs to.
// -> It makes a function re-usable by letting you decide the object value.
// -> this value is determined entirely by how a function is called.
// -> New Binding -> Explicit Binding -> Implicit Binding -> Default Binding, 
// -> this is Order of precedence if multiple bindings are mentioned together.

// 1) Implicit Binding:
//======================
// The implicit binding rule states that, when a function is invoked with dot (.) notation,then the object to the left side of the dot is what 'this' keyword is referring to.

const personObj = {

  name: 'Bruce Wayne',
  
  sayName: function () {
    console.log('My name is', this.name);
  }
}

personObj.sayName(); // here 'this' is referring to personObj.


//-----------------------------------------------------------------------------------------------

// 2) Explicit Binding:
//=====================
// -> Let's say we are calling a function which is a stand alone function and it is not present inside any Object,

// -> Then if we use 'this' keyword inside that function we need to explicity specify the context for 'this' keyword, and we do that using call() method, which is always by default available to all JS functions.

// -> Hence while invoking the stand alone function we add .call() method and specify the context or object inside call(--here--) method as parameter to which 'this' keyword will refer to hereafter.

const person = {
  name: 'Steve Rogers',
  city: 'America'
}

function displayName() {
  console.log('My name is', this.name);
}

displayName.call(person); // now 'this' will refer to person object now

//------------------------------------------------------------------------------------------------

// 3) New Binding: (Constructor function)
//=======================================
// -> In JS, we can invoke a function using 'new' keyword, that function is nothing but a constructor function.
// -> And in such a scenario, the function will be invoked with 'this' keyword referring to a new empty object.
// -> So every time the constructor function is invoked using new keyword, everytime under the hood a new empty object gets created and 'this' keyword for each invocation will be pointing to its corresponding newly created empty object.
// -> We can add some properties to that empty object using the same 'this' keyword which is pointing to it.

function Person (name, city) {

  // internally this -> {}
  this.name = name;
  this.city = city;
}

const person1 = new Person('Jay', 'Odisa'); // this -> { name: 'Jay', city: 'Odisa' }
const person2 = new Person('Raju', 'Lucknow'); // this -> { name: 'Raju', city: 'Lucknow' }

console.log('Person1: ' + person1.name + ' City: ' + person1.city);
console.log('Person2: ' + person2.name + ' City: ' + person2.city);

//------------------------------------------------------------------------------------------------

// 4) Default Binding: (fallback binding if none of the above 3 rules are matched or mentioned)
//=============================================================================================
// -> So if none of the above 3 bindings are specified, JS will default 'this' keyword to global scope 
// and set 'this' keyword pointing to global object, which is called as window Object in case of browsers,
// hence this -> global = {}
// -> So in global scope, JS will try to find the particular variable which is 'country' in our case, 
// since it doesn't find it, this.country will be = undefined.
// -> However we can specify the variable in global scope using 'globalThis' keyword as following 
// syntax -> globalThis.country = 'Europe'

globalThis.country = 'Europe'; // -> explicitly specifying the country value

function displayCountry() {
  console.log('Name of the country is', this.country);
}

displayCountry(); // undefined

//-------------------------------------------------------------------------------------------------