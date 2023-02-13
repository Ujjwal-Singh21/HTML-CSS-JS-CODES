// Async:
//=======

// normal function
function greet() {
  return 'Hello';
}

console.log(greet()); // Hello 

// async function
async function greet2() {
  return 'Hello';
}

console.log(greet2()); // Promise { <fulfilled>: 'Hello }

// here fullfilled is promise status, and hello is promise value. 

// If u don't explicitly return a promise, the aync function will automatically wrap the value in a resolve() promise.

// Hence we can also write it better like this, we use .then() function to consume the promise result
async function greet3() {
  return Promise.resolve('Hello');
}

greet3().then(res => console.log(res)); // Hello 


// Await:
// ======

async function showName() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello Ujjwal'), 6000)
  })

  let promiseResult = await promise // wait untill the promise resolves 

  console.log(promiseResult)
}

showName()

// await keyword pauses code execution untill the promise settles, In above eg, promise gets 6 seconds to resolve hence code execution inside showName() function is completely stopped inside the function for those 6 seconds untill the promise resolves, the JS engine can do other tasks outside of this function meanwhile, but as far as showName() fn is concerned, control resumes after 6 seconds only, and after it resolves code execution is continued with promise returned value.