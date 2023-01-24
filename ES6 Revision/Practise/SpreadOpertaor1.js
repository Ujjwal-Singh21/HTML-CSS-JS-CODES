// combining two arrays and objects using spread operator '...'
//==============================================================

// normal way
const array1 = [1, 2, 3, 4, 5]
const arayy2 = [6, 7, 8, 9, 10]

const combinedArray = array1.concat(arayy2)
console.log('Normal approach: ', combinedArray)

// Using spread operator, we can do same thing and also add extra elements in combined array during all this process.
const myArray1 = [11, 12, 13, 14, 15]
const myArray2 = [16, 17, 18, 19, 20]

const combined = [...myArray1, ...myArray2, 'Steve', 'Bruce']
console.log('Using spread operator: ', combined)

// performing cloning an array using spread operator
const clonedArray = [...combined]
console.log('Cloned Array:', clonedArray)

// combining 2 JS objects using spread operator
const object1 = { Name: 'Peter Parker' }
const object2 = { Job: 'Paper Media' }

// also adding extra new Object during this process
const combinedObj = { ...object1, ...object2, loaction: 'Australia' }
console.log(combinedObj)
console.log('Combined Object: ' + combinedObj.Name)
console.log('Combined Object: ' + combinedObj.Job)
console.log('Combined Object: ' + combinedObj.loaction)

// cloning an object
const clonedObject = { ...combinedObj }
console.log('cloned object :', clonedObject)
