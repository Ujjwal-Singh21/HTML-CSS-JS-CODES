const numArr = [1, 2, 3]

// let mapRes = numArr.map(val => val * 2)
// console.log('Map result', mapRes)
// console.log('Original Array After map', numArr)

// numArr.forEach((val, index, arr) => arr[index] = val * 2)
numArr.forEach((val, index, arr) => console.log('Inside ForEach:', val * 2))
console.log('Original Array after forEach', numArr)