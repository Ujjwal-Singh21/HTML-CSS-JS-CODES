//Performing different things in JS using Strings

let message = 'Hello All Welcome to java script'
console.log(message)

// joining two Strings
let firstName = 'Virat'
let lastName = 'Kohli'
console.log(firstName + lastName) // prints without space
console.log(firstName + ' ' + lastName) // with space

// single and double quotes
let type1 = "Virat Kohli 'The Cricketer'"
let type2 = 'Virat Kohli "The Cricketer"'
// using two double quotes as nested with help of back slash (\"content\")
let type3 = 'Virat Kohli "The Cricketer"'
console.log(type1)
console.log(type2)
console.log(type3)

// using\n ,\b and \t for new line , delete extra letter and tab respectively
let myname = 'Ujj\bj\twal \nSingh'
console.log(myname)

//using boolean
let bool = 5 > 6
let bool1 = 66 < 98
console.log(typeof bool)
console.log(bool)
console.log(bool1)

// using null and undefined
let user = null
console.log(user) //null
console.log(typeof user) //says object which is a bug, hence use undefined

let newuser
console.log(newuser)
console.log(typeof newuser)
