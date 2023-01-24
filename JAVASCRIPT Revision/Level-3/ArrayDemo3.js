// different methods in Array Object

// push
let array = [5, 7, 8, 9, 4]
console.log('Initially: ' + array)

console.log(array.push(11)) // returns total no of elemnts in array after push (i.e) 6 here
console.log('After push: ' + array)

// pop
let array1 = [5, 7, 8, 9, 4]
console.log(array1.pop()) // returns total no of elemnts in array after pop (i.e) 4 here
console.log('After pop: ' + array1)

// shift
let array2 = [5, 7, 8, 9, 4]
console.log(array2.shift()) // -> shifted to left once hence 5 gets removed and returned
console.log('After shift: ' + array2)

// unshift
let array3 = [55, 77, 88, 99, 44]
console.log(array3.unshift(45)) // -> returns new length of array (6) and adds element at first passed to it
console.log('After unshift: ' + array3)

//splice
let array4 = [5, 7, 8, 9, 4]
console.log(array4.splice(2))
console.log('splice: ' + array4)

// splice (deleting specified no of elements)
let array5 = [5, 7, 8, 9, 4]
console.log(array5.splice(2, 1))
console.log('splice2: ' + array5)

// splice (deleting specified no of elements , also adding new element simultaneousaly)
let array6 = [5, 7, 8, 9, 4]
console.log(array6.splice(2, 1, 66, 77))
console.log('splice3: ' + array6)

//slice method
// Ex-1:
var arr = [23, 56, 87, 32, 75, 13]
var new_arr = arr.slice(2) // removes everything from index no 2 and returns those elements in a new array
console.log('Slice Demo 1')
console.log(arr)
console.log(new_arr)

// Ex-2:
var arr = [23, 56, 87, 32, 75, 13]
var new_arr = arr.slice(2, 4) // removes everything from index no 2 till before index no 4 
console.log('Slice Demo 2')
console.log(arr)
console.log(new_arr)
