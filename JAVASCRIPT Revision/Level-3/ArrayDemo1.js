// there are 3 different ways to create an array in JS :-
//=========================================================

// (1) creating an empty array
let myArray1 = new Array()
console.log(myArray1)

// (2) creating an array with defined size then adding values using index number
let myArray2 = new Array(3)
myArray2[0] = 'Mango'
myArray2[1] = 'Guava'
myArray2[2] = 'Apple'
console.log(myArray2)

// (3) condesned array (declaring and defining together)
let myArray3 = new Array('Mango', 'Guava', 'Apple', 2)
console.log(myArray3)

// (4) Literal Arrays using square brackets [] (can also add using push method)
let myArray4 = ['Steve', 'Bruce', 'Clarke', 'Diana']
console.log(myArray4)

// methods of Array object in JS
console.log('length of myArray2: ' + myArray2.length)
console.log('Reverse: ' + myArray2.reverse())
console.log('Seperator: ' + myArray2.join(':'))
