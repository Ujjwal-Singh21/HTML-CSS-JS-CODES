// setInterval() is very similar to setTimeout() in syntax wise, however there is a major difference if looked into their functionality.
// The setInterval() function repeatedly runs the same code over and over again at regular intervals, and since the intervals keeps running a task forever so you should clear the interval when appropriate using clearInterval() method passing in the interval id.

function greetMe() {
  console.log('Hello after every 2 seconds')
}

setInterval(greetMe, 2000)

// const intervalId = setInterval(greetMe, 2000)
// clearInterval(intervalId)
