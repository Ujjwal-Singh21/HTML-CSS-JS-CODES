const arr = [8, 2, 3, 4, 5, 6]

//map
const double = arr.map(i => i *2)
console.log('Double: ', double)

const binary = arr.map(i => i.toString(2))
console.log('Binary: ', binary)

//filter
const odd = arr.filter(i => i % 2)
console.log('Odd: ', odd)

const even = arr.filter(i => i % 2 === 0)
console.log('Even: ', even)

//Reduce 

// way-one without accumulator
const sum = arr.reduce((a,b) => a + b)
console.log('ReduceSum: ', sum)

// way-two using accumulator
const sum2 = arr.reduce((accumulator, current) => {
  accumulator = accumulator + current;
  return accumulator;
}, 0)

console.log('SumUsingAccumulator: ', sum2)

//finding max value from the array in normal approach
const findMax = (arr) => {

  let max = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

const normalMaxRes = findMax(arr)
console.log('NormalMaxResult: ', normalMaxRes)

//Now finding max value using reduce function 
const reduceMaxRes = arr.reduce((accumulator, current) => {

  if(current > accumulator) {
    accumulator = current;
  }

  return accumulator;
}, 0)

console.log('ReduceMaxResult: ', reduceMaxRes)

//----------------------------------------------------------------------------------------

//Q1: Find a list consisting of Full Names of all User
//----------------------------------------------------
// Expected o/p -> ['Chris Evans', 'Elon Musk', 'Scarlett Johansson', 'Robert Downey Junior', 'MS Dhoni', 'Emma Watson', 'Tom Holand'] 

//Our input array of Objects:
//---------------------------
const Users = [
  { firstName: 'Chris', lastName: 'Evans', age: 35 },
  { firstName: 'Elon', lastName: 'Musk', age: 50 },
  { firstName: 'Scarlett', lastName: 'Johansson', age: 29 },
  { firstName: 'Robert Downey', lastName: 'Junior', age: 55 },
  { firstName: 'MS', lastName: 'Dhoni', age: 35 },
  { firstName: 'Emma', lastName: 'Watson', age: 29 },
  { firstName: 'Tom', lastName: 'Holand', age: 22 },
]

const fullNameList = Users.map((user) => {

  // const nameArr = [];
  // nameArr.push(user.firstName +' '+ user.lastName)
  // return nameArr;

  return user.firstName +' '+ user.lastName;
})

console.log('Full Names List: ', fullNameList)

//--------------------------------------------------------------------------------------------------

//Q2: Find a list of no of people in a particular age
//---------------------------------------------------
//Expected o/p -> { 22: 1, 29: 2, 35: 2, 50: 1, 55: 1 }

const ageDetails = Users.reduce((accumulator, currentUser) => {

  if(accumulator[currentUser.age]) { //-> checking accumulator.35 if such a property available in object, if YES

    accumulator[currentUser.age] =  ++ accumulator[currentUser.age] // -> 35 = 2 -> means (++1) 
    
  } else {
    accumulator[currentUser.age] = 1 // -> if NO, then adding a new property : value pair as -> 35 : 1
  }

  return accumulator;
}, {})

console.log('Age-Details: ', ageDetails)

//---------------------------------------------------------------------------------------------------

//Q3: Finding only firstName of all those Users whose age is less than 30 (age < 30)
//----------------------------------------------------------------------------------
//Solving just using reduce() method -> o/p -> ['Scarlett', 'Emma', 'Tom']

const lessThanThiryAgeUsers = Users.reduce((accumulator, currentUser) => {

  if(currentUser.age < 30) {
    accumulator.push(currentUser.firstName)
  }

  return accumulator;
}, [])

console.log('firstNames of Users under 30 yrs of age: ', lessThanThiryAgeUsers)


//Solving same Q3 using chaining of map(), filter()
const result = Users.filter(user => user.age < 30).map(user => user.firstName)
console.log(result)


