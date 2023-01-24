// Map in JS is similar to JAVA, which maintains (key,value) pair.
// The only difference is insted of put() method,
// set() is used here to add something into a Map.

//creating a Map Object
let myMap = new Map()

myMap.set('Navin', 'JavaScript')
myMap.set('Steve', 'Java')
myMap.set('Bruce', 'Machine Learning')

// normal printing
console.log(myMap) // 

// getting only keys
console.log(myMap.keys())

// getting only values
console.log(myMap.values())

// getting both
console.log(myMap.entries())

// to check if any key available (cant check for values like this)
console.log(myMap.has('Navin')) // true

// printing using forOf loop and backTick practice too
for (let [k, v] of myMap) {
  // [k,v] because map has (key,value)
  console.log(`key: ${k} & value: ${v}`)
}

// using forEach loop,
// since in Arrays, forEach loop has order of args like(value, index, array)
// here while using forEach we will mention as (value,key) since value comes first in its arguments order.
myMap.forEach((value, key) => console.log(key + ':' + value))
