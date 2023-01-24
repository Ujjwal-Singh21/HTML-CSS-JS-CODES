// With functional programming and Higher Order Functions
// Code duplications issues are solved
// Code reusability is improved
// Area -> PI r square, Circumference -> 2 * PI * r, Diameter -> 2 * r
//----------------------------------------------------------------------

const radiusInputArray = [2, 3, 4, 5];

//separate functions
const area = (radius) => {
  return Math.PI * radius * radius;
}

const circumference = (radius) => {
  return 2 * Math.PI * radius;
}

const diameter = (radius) => {
  return 2 * radius;
}

//single function to calculate everything
//----------------------------------------
const calculateFunction = (radiusArr, logic) => {

  const resultArray = [];

  for(let i = 0; i < radiusArr.length; i++) {
    resultArray.push(logic(radiusArr[i]));
  }
  return resultArray;
}

const areaResult = calculateFunction(radiusInputArray, area);
console.log('Area: ', areaResult)

const circumferenceResult = calculateFunction(radiusInputArray, circumference);
console.log('Circumference: ', circumferenceResult)

const diameterResult = calculateFunction(radiusInputArray, diameter);
console.log('Diameter: ', diameterResult)

//doing same thing using map 
const res1 = radiusInputArray.map(area)
console.log('Map-Area: ', res1)

const res2 = radiusInputArray.map(circumference)
console.log('Map-Circumference: ', res2)

const res3 = radiusInputArray.map(diameter)
console.log('Map-Diameter: ', res3)

//making our calculateFunction similar to map function
//-----------------------------------------------------
Array.prototype.calculateFunctionAsMap = function (logic) {

  const resArray = [];

  for(let i = 0; i < this.length; i++) { // here this -> radiusInputArray
    resArray.push(logic(this[i]));
  }

  return resArray;
}

console.log('Check', radiusInputArray.calculateFunctionAsMap(area))

const result1 = radiusInputArray.calculateFunctionAsMap(area)
console.log('OwnMapFn-Area: ', result1)

const result2 = radiusInputArray.calculateFunctionAsMap(circumference)
console.log('OwnMapFn-Circumference: ', result2)

const result3 = radiusInputArray.calculateFunctionAsMap(diameter)
console.log('OwnMapFn-Diameter: ', result3)