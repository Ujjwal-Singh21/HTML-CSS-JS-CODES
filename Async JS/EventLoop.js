// -> In Event loop, Priority/MicroTask Queue is given more priority than Task/CallBack Queue.
// -> Since Promise related functions are stored in MicroTask Queue and setTimeout and setInterval related callback functions are stored in Task Queue, Promise gets executed first and then callback functions in Task Queue gets executed.
// -> fetch(url) function is not a part of JS and is a part of Web API, hence when fetch() function along with its url is passed to the Web API, it leaves behind a promise Object inside the heap memory. That promise object has 3 properties which are value, onFullFillment[](an array), onRejection[](again an array).
// -> When 'then(cb)' function is executed in call stack, its only work is to move its argument which is a callback function into the onFullFillment Array.
// -> Now when fetch() fn has done its api call and got back the response from url endpoint, it sets the response to the value property in the Heap memory's Promise Object.
// -> As soon as Promise Object is updated with the value returned from url endpoint, JS passes all the callback functions present in onFullFillment[] array along with the value recieved into the MicroTask/Priority Queue.
// -> ThereAfter, Event loop continues its usual work of pushing these callback fns into the call stack when its empty.

console.log('First log statement')

setTimeout(() => {
  console.log('Set timeout executed')
}, 5000)

const promise = fetch('https://jsonplaceholder.typicode.com/posts')

promise
.then((response) => response.json())
.then((data) => {
  data.map((row) => {
     console.log(row.title)
  })
  
  console.log('Promise executed successfully')
  console.log('****************************************')
})
.catch((error) => {
  console.log('Error in fetching data: ', error)
})

console.log('Third log statement')
console.log('Fourth log statement')
console.log('nth log statement')
console.log('***************************************')

