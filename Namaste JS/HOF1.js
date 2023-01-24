// Without functional programming and Higher Order Functions, Code duplications issues are spotted.
// Area -> PI*r*r, Circumference -> 2 * PI * r, Diameter -> 2 * r
//-------------------------------------------------------------------------------------------------

const radius = [2, 3, 4, 5]

// Area
//------
const calculateArea = (radius) => {

  const resultArray = []

  for(let i = 0; i < radius.length; i++) {
    resultArray.push(Math.PI * radius[i] * radius[i])
  }
  return resultArray;
}

const result1 = calculateArea(radius)
console.log('Area: ', result1)

// Circumference
//---------------
const calculateCircumference = (radius) => {

  const resultArray = []

  for(let i = 0; i < radius.length; i++) {
    resultArray.push(2 * Math.PI * radius[i])
  }

  return resultArray;
}

const result2 = calculateCircumference(radius)
console.log('Circumference: ', result2)

// Diameter
//----------
const calculateDiameter = (radius) => {

  const resultArray = []

  for(let i = 0; i < radius.length; i++) {

    resultArray.push(2 * radius[i])
  }

  return resultArray;
}

const result3 = calculateDiameter(radius)
console.log('Diameter: ', result3)