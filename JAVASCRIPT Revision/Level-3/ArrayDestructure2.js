// changing a big String into array using split method,
// which takes an arguemnt to split that big string

let words = 'My Name is Ujjwal Singh'.split(' ')
console.log(words)

// now since big String is an array and stored in array "words"
// lets destructure it and store in another variables
let [a, b, c, d, e] = words
console.log(d)

// using spread operator to store Ujjwal Singh both in just 's' itself
let[p,q,,...s] = words
console.log(s);
