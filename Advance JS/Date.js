// Js Date object represents a moment in time 
// Date object contains a number that represents miliseconds since 1 JANUARY 1970 UTC
// There are plenty of methods to obtain and convert Date in various formats.
//------------------------------------------------------------------------------------

// 1) Getting current Date 
//-------------------------
const currentDate = new Date()

console.log(currentDate) // 2022-08-16T14:27:09.101Z
console.log(typeof currentDate) // object 

//-------------------------------------------------------------------------------------

// 2) Same Date in dif ways 
//------------------------- 

// All are same date 16th oct 1998 11:00:00 

// method-1 
const random = new Date("October 16, 1998 11:00:00")
console.log(random)

// method-2 
const randomTwo = new Date("1998-10-16T11:00:00")
console.log(randomTwo)

// method-3 (month indexing starts from 0)
const randomThree = new Date(1998, 9, 16, 11, 0, 0)
console.log(randomThree) 

//---------------------------------------------------------------------------------------------


// 3) Date formatting with toString() methods 
//------------------------------------------- 
const currDate = new Date()

console.log(currDate.toString()) // Tue Aug 16 2022 20:04:29 GMT+0530 (India Standard Time)

console.log(currDate.toDateString()) // Tue Aug 16 2022

console.log(currDate.toISOString()) // 2022-08-16T14:34:29.494Z

console.log(currDate.toLocaleString())// 16/8/2022, 8:04:29 pm

console.log(currDate.toLocaleDateString()) // 16/8/2022 

//--------------------------------------------------------------------------------------------------------


// 4) Getting the Date, Time and Year 
//----------------------------------- 
const date = currDate.getDate()
const month = currDate.getMonth()
const year = currDate.getFullYear() 

console.log(date, month, year) // 16 7 2022