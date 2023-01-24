// there are 3 steps in a loop :- Initialization, condition, increment
// here we will see while and do-while loop
//===========================================================================

// 1) while loop - first check condition , then does execution.
//    hence It is called as "Entry Check loop".
// 2) do - while loop -  first execution , then condition check (executes atleast once).
//    hence it is called as "Exit Check loop" .
//------------------------------------------------------------------------------------------------

// (example-1) while loop :-
//---------------------------

let i = 1

while (i <= 5) {
  console.log('Hi', i)
  i++
}

console.log(i) //6, because then only it became False

// (example-2) while loop (taking an input and printing each number separately) :-
//----------------------------------------------------------------------------------
let num = 2347563

while (num > 0) {
  console.log("Number: " + num % 10) // getting just last number
  num = parseInt(num / 10) // now eliminating that number
}


// do-while loop (exit check loop)
//--------------------------------------

let j = 1

do {
  console.log('hello do while ', j)
  j++
} while (j <= 5)

console.log(j) //6, because then only it became False
