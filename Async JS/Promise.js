let promise = new Promise((resovle, reject) => {

  // on fullfillment, resolve() method change promise status from pending to fullfilled
  // resovle('Bringing tacos')

  // on rejection, rejetc() method change promise status from pending to rejected
  reject('Not bringing tacos, shops is closed')
})

let onPromiseFullfillment = (result) => {
  console.log(result)
  console.log('Set Up the table to eat tacos')
}

let onPromiseRejection = (error) => {
  console.log(error)
  console.log('Please start cooking pasta')
}

promise
.then(onPromiseFullfillment)
.catch(onPromiseRejection) 


// can also be written like this
promise.then(onPromiseFullfillment, onPromiseRejection) // but not recommended to use like this, use .catch() is good approach


// Static methods
//---------------

// 1) Promise.all()
// ------------------

// - Query multiple APIs and perform some action but only after all the apis has finished loading.

// * The Promise.all() method takes an iterbale of Promises as an input, and returns a single promise, that resolve to an array of results of the input promises.

// * Retruned promise will resolve only when all of the input's promises has resolved, or if the input iterable contains no more promises.

// * It rejects immediately if any of the input promises reject, or the non-promises throw an error, and will reject with this first rejection message/error.

const promise1 = Promise.resolve(3)

const promise2 = 42

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3])
.then((values) => console.log(values)) // [ 3, 42, 'foo' ] 
.catch((error) => console.log(error))

// 2) Promise.allSettled()
// -----------------------

// - This method waits for all input promises to get completed, regardless of whether or not one of them is rejected

const promise4 = Promise.resolve(3)

const promise5 = Promise.reject('promise5 is rejected')

const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise4, promise5, promise6])
.then((values) => console.log(values)) 
.catch(error => console.log(error))


// 3) Promise.race()
// -----------------

// - This method returns a promise that gets fullfilled or rejects, as soon as one of the input promises fullfills or rejects, with the value or reason from that promise.

// - Here in prom1 and prom2, prom1 is faster and gets resolved first and hence race() method takes it and execute.

const prom1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'prom1 resolved')
})

const prom2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, 'prom2 resolved')
})

Promise.race([prom1, prom2])
.then((values) => console.log(values))
.catch((error) => console.log(error))