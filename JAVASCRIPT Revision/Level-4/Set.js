// Set in JS is similar to JAVA, it just that it maintains order here.
// Set is a Class In JS, hence created using 'new' keyword.

let mySet = new Set()
mySet.add(3)
mySet.add(5)
mySet.add(12)
mySet.add(3) // -> duplicate element hence doesn't gets added
mySet.add('Ujjwal')
mySet.add(45)
mySet.add(null) // -> allowed null once, if added many time output shows only once

// normal printing
console.log(mySet)

// printing using forEach loop
mySet.forEach(n => console.log(n))

// since In array forEach take 3 args at a time(value, index i , whole array itself)
// here in set, since there is no index no, both args will be same
// i.e(n, value are same)
mySet.forEach((value, value1) => {
  console.log(value, value1) // 3 3 45 45 Ujjwal Ujjwal
})
