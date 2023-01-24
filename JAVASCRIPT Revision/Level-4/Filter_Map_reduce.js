// using filter, map, reduce methods and it all works exactly same as JAVA here.

let values = [32, 74, 88, 55, 23, 62, 77]

let result = values
  .filter(n => n % 2 == 0)
  .map(n => n * 2)
  .reduce((a, b) => a + b)

console.log(result)
