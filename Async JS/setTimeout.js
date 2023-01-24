// // The setTimeOut() function executes a particular block of code once after a specified time has elapsed.
// // Syntax: setTimeOut(function, duration, param1, param2, ...)
// // The 1st parameter is a function to run, or a reference to a function defined elsewhere, then 2nd parameter is a number representing the duration in milliseconds to wait before executing the code.
// // After the 2nd parameter, you can pass in zero or more values that represents any parameters you want to pass to the function when it runs.
// // To clear a timeout, you can use the clearTimeout() method passing in the identifier returned by setTimeOut as parameter.
// // A more practical scenario is claering timeouts when the component is unmounting to free up the resource and also prevent code from incorrectly executing on an unmounted component.

// // Example-1
// //----------
// function greet1() {
//   console.log('Hello')
// }

// setTimeout(greet1, 2000);
// // Logs 'Hello' to the console after 2 seconds

// //--------------------------------------------------------------------------------------------------------

// // Example-2
// //----------
// function greet2(name) {
//   console.log(`Hello ${name}`)
// }

// setTimeout(greet2, 4000, 'Bruce Wayne');
// // Logs 'Hello Steve' to the console after 2 seconds


// //--------------------------------------------------------------------------------------------------------

// // Example-3
// //----------
// function greet3() {
//   console.log('Hello')
// }

// const timeoutId = setTimeout(greet3, 6000);
// clearInterval(timeoutId) // Nothing is logged to the console

// //--------------------------------------------------------------------------------------------------------




