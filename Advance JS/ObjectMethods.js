// Importanty Object methods in JS
//--------------------------------

// 1) Object.freeze() -> It prevents any chanegs to the object passed to it
//--------------------------------------------------------------------------
const person = {
  name: 'Ujjwal',
  age: 22,
  city: 'Chennai'
}

// Object.freeze(person) // -> keep commented to run 5th method 

// person.name = 'Ujjwal Singh'
console.log(person) // { name: 'Ujjwal', age: 22, city: 'Chennai' }

// 2) Object.keys() -> returns an array containing all the keys of passed Object
//------------------------------------------------------------------------------ 
const keys = Object.keys(person)
console.log(keys) // [ 'name', 'age', 'city' ]

// 3) Object.values() -> returns an array containing all the values of passed Object
//-----------------------------------------------------------------------------------
const values = Object.values(person)
console.log(values) // [ 'Ujjwal', 22, 'Chennai' ]

// 4) Object.entries() -> It returns both keys and values in the form of nested Array 
//------------------------------------------------------------------------------------
const entries = Object.entries(person)
console.log(entries) // [ [ 'name', 'Ujjwal' ], [ 'age', 22 ], [ 'city', 'Chennai' ] ]

// 5) Object.assign() -> It is used to merge 2 objects and make it as single 
//---------------------------------------------------------------------------
const personJobDetails = {
  id: 9000,
  salary: 26500
}

const mergedObject = Object.assign(person, personJobDetails)
console.log(mergedObject) // { name: 'Ujjwal', age: 22, city: 'Chennai', id: 9000, salary: 26500 }


//-----------------------------------------------------------------------------------------------------------

// Javascript Object is quite special and it doesn’t follow the classical object-oriented concepts used by other languages like Java. JS objects have the prototypical inheritance which is quite different from normal class-based inheritance. We will not explain inheritance as part of this article and will focus on some common methods which are available in JavaScript’s global Object constructor. Even though there are many other methods available in Object constructor, we will restrict our discussion to very frequently used ones.

// Here is the list of topics we will discuss in this article :

// Shallow copy — Object.assign()
// Deep copy — JSON.parse() & JSON.stringify()
// Object.create()
// Object.entries()
// Object.keys()
// Object.values()
// Object.freeze()
// Before we start, lets check out a typical object initialization in JS. We have some more ways to initialize a JS object - but this is the most common way developers use :

let obj = {};
obj.name = “messi”;
obj.year= 2018;
obj.speak = function(){
 return "My Name is “+this.name+” and this is year "+this.year;
}

// Here you can see the name, year and speak properties. In JS methods are also properties with type function.

// In the next section, we will discuss copying an object properly in JS.

// Copying an Object
//-------------------
// You can’t use the typical assignment operation to copy an object in JS as that will only lead to creating a reference to the same object.

let newObj = obj;
obj.year = 2019;
console.log(newObj.year) 
// 2019
console.log(newObj.speak()) 
// My Name is messi and this is year 2019

// Above example shows that newObj is just a reference to obj and whenever any property changes in either of them — both objects are affected.

// Shallow Copy
//-------------
// You can create a shallow copy i.e. a top level properties copy, using Objects.assign() method

let copyObject = Object.assign({},newObj);
copyObject.name = "ronaldo";
console.log(copyObject.speak());
// My Name is ronaldo and this is year 2019
console.log(newObj.speak());
// My Name is messi and this is year 2019

// This example is copying newObj and all its properties to copyObject. You can check out that speak method will only print the new name on copyObject
// However, this methods fails when we have nested objects in property values. Those objects are still not copied and work as shared reference in both objects.
// Look at this example

let sourceObject = {name:"neymar",country:{name:"brazil"}}
let shallowCopyObj = Object.assign({},sourceObject);
shallowCopyObj.country.name = "India";
console.log(sourceObject); 
//{ name: 'neymar', country: { name: 'India' } }

// You can check that sourceObject has country property as value object with name property that remains shared between the new shallowCopyObj and sourceObj. So how can we create a deep copy - the answer is not that simple if you are looking for true deep copy. We will give a small workaround in next section but that is only applicable for certain conditions(just search on google as we can have a complete article describing on how to have a deep copy)

// Deep Copy
//----------
// If you just need to copy only properties which are not functions — there is an efficient method. We are moving away from Object constructor here and using another global Object in JS — JSON

let deepCopyObj = JSON.parse(JSON.stringify(obj));
console.log(deepCopyObj);
//{ name: 'messi', year: 2019 }

// You can check in output that we have lost our function property while copying — but this will be true deep copy. Let’s end our discussion on copying values and move to some more useful functions in Object constructor.

Object.create()
// You can also create object with Object.create() function this has additional flexibility that you can choose what will be prototype of your new object.

let createObj = Object.create(obj);
console.log(createObj);  //{}
createObj.name = “Pk”;
console.log(createObj.speak());
// My Name is Pk and this is year 2019

// In this example obj is the prototype from which createdObj is created. Which means it can use properties of prototype due to inheritance. That’s why we can use speak() method without declaring that in createdObj.

Object.entries()
// This is a simple function which converts JS objects to an array of arrays. With inner array is pair of key and value of the object. Let’s checkout a self-explanatory example

let person = {name:"Roger",age:30}
let entries = Object.entries(person);
console.log(entries);
//[ [ 'name', 'Roger' ], [ 'age', 30 ] ]
Object.keys()

// This function picks only keys (or property labels) of objects and returns an array

let keys = Object.keys(person);
console.log(keys);
// [ 'name', 'age' ]
Object.values()
// This function picks only values of objects and returns an array

let values = Object.values(person);
console.log(values);
// [ 'Roger', 30 ]
Object.freeze()

// This function freezes the object for any further changes (key or values). It may not throw any error (unless you are in strict mode) but there will be no effect of value change on your object.

let frozenObject = Object.freeze(person);
frozenObject.name = "Nadal";
console.log(frozenObject);
//{ name: 'Roger', age: 30 }
