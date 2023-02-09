// Normal approach using bind() method which returns a same copy of actual function which can be called later
const person = {
  firstname: 'Bruce',
  lastname: 'Wayne'
}

function showName (city, country) {
  console.log(this.firstname + ' ' + this.lastname + ' from ' + city, country)
}

const returnedFn = showName.bind(person, 'Gotham')
returnedFn('America')

// creating its PolyFill version called as mybind()
//-------------------------------------------------

Function.prototype.mybind = function (...args) {
  
  // showName fn is present here and pointed by 'this' keyword, hence storing it in an variable with same name
  let showNameFn = this

  params = args.slice(1) // cuts everything from index no 1 and returns as a new array

  return function (...args2) {
    showNameFn.apply(args[0], [...params, ...args2])
  }
  
}

const returnedFn2 = showName.mybind(person, 'NewYork')
returnedFn2('Washington')
