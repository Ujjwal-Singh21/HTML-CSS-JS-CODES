// when a function calls itself again and again, that condition is called as recursion

// normal scenario
//-----------------
// function show () {
//   console.log('Hi ')
// }

// show()

// show() function calling itself inside its body
// error Maximum call stack size exceeded 10349
//---------------------------------------------------
// let num = 1

// function show () {
//   console.log('Hi ', num)
//   num++
//   show()
// }

// show()

// to avoid that error we are stopping function call at 10349
//--------------------------------------------------------------
let num = 1

function show () {
  console.log('Hi ', num)
  num++
  if (num <= 10349) show()
}
show()
