// call(): (Available and accessible to every JS function by default)
//--------------------------------------------------------------------
// -> Execution happens at the time of binding.
// -> Takes object as its 1st arg to which 'this' keyword will refer to, from 2nd args ownwards it takes any num of args which is accepted by the function as its parameter, passed one by one separated by comma.
// -> It returns and calls the same function at the time of binding.

const person = {
  firstname: 'Sachin',
  lastname: 'Tendulkar'
}

function showName (city, state) {
  console.log(this.firstname + ' ' + this.lastname + ' from ' + city, state)
}

showName.call(person, 'Mumbai', 'Maharashtra')

//----------------------------------------------------------------------------------------------------------

// apply(): (Available and accessible to every JS function by default)
//--------------------------------------------------------------------
// -> Execution happens at the time of binding.
// -> Takes object as its 1st arg to which 'this' keyword will refer to, then as 2nd arg it takes an array inside which we can pass our n number of args separatedby comma, to be recieved by the funcion as parameter.
// -> It returns and calls the same function at the time of binding.

showName.apply(person, ['Chennai', 'TamilNadu'])

//-----------------------------------------------------------------------------------------------------------

// bind(): (Available and accessible to every JS function by default)
//--------------------------------------------------------------------
// -> Execution happens at the time when we execute the returned function.
// -> In case of args, very similar to call() method.
// -> It returns a new function or copy of the function, which we can execute and use later when needed, its simpy like a loaded gun with bullets which we can simply fire when needed.

const returnedFn = showName.bind(person, 'Bangalore', 'Karnataka')
returnedFn() // or 2nd arg to fn can be also passed as arg to returnedFn like this

const returnedFn2 = showName.bind(person, 'Bangalore')
returnedFn2('Karnataka')
