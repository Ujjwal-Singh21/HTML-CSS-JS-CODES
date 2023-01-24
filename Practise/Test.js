let arr = [[1, 2], 3, [4, 5], [6, 7, [8, 9]]]

var resultArr = [...arr]
console.log(resultArr) // no changes -> [ [ 1, 2 ], 3, [ 4, 5 ], [ 6, 7, [ 8, 9 ] ] ]

var resultArr = [].concat(...arr)
console.log(resultArr) // 1-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]

var resultArr = arr.flat(1) 
console.log(resultArr) // 1-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]

var resultArr = arr.flat(2) 
console.log(resultArr) // 2-Level flattening -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// polyFill for flat() method
//---------------------------
function flattenArr (arr, depth = 1) {

  let result = []

  arr.forEach((arr) => {

    if(Array.isArray(arr) && depth > 0) {

        result.push(...flattenArr(arr, depth - 1))

    } else {
        result.push(arr)
    }
  })

  return result
  
}

console.log('Custom Flat: ', flattenArr(arr, 2))
