// Q1: Best scenarios to use arrow and normal functions over each other. 
//======================================================================

// case:1 arrow over normal 

// Note: Here normal fn doesn't have implicit return hence we have to use return keyword, but this is not the case while using arrow function.

let arr = [1, 2, 3, 4];

const doubled = arr.map(e => e * 2);
console.log(doubled);

const doubled2 = arr.map(function (e) {
  return e * 2;
})
console.log(doubled2);


// case: 2 normal over arrow 

// Here if we use arrow fn then we can't make use of this keyword 
const button = document.getElementById('btn');

button.addEventListener('click', function() {
  this.innerHTML = 'Clicked again'
})



// ---------------------------------------------------------------------------------------------------------------

// Q2: Nested Object Destructuring 
//================================ 

const user = {
  name: 'Ujjwal',
  address: {
    street: 'LA',
    pincode: '123'
  }
}

// const { name, street } = user
// console.log(name, street); // ujjwal undefined

// const { name, address: {street} } = user 
// console.log(name, street); // ujjwal LA 

// Q2.1: If user object is coming from some api and say its null, then application will break if we destructure like this, hence we have to perform null check

//-------------------------------------------------------------------------------------------------------------

const user2 = null;

// const { name, address: {street} } = user2
// console.log(name, street); // Uncaught TypeError: Cannot destructure property 'name' of 'user2' as it is null.


const { name, address } = {...user2}
const { street } = { ...address }
console.log(name, street); // undefined  undefined


//---------------------------------------------------------------------------------------------------------------

const object = {
  message: 'Hello World!',
  logMessage() {
    console.log(this.message);
  }
}

setTimeout(object.logMessage, 1000); // undefined 
// Because setTimeout takes this fn as callBack fn but calls it like a normal fn and inside a normal fn 'this' keyword refers to windows object.

setTimeout(() => object.logMessage(), 1000) // Hello World!
