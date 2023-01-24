const obj = {
  name: 'Messi',
  Year: 2018,
  getDetails: function () {
    return `I am ${this.name} and this is year ${2018}`
  },

  country: {
    countryName: 'India'
  }
}

// 1) assigning normally to a variable for making a copy of above object will result in simpy creating same reference to the above object.
const newObj = obj
newObj.name = 'Ronaldo'

console.log(obj.name) // Ronaldo
console.log(newObj.name) // Ronaldo

// 2) Creating a shallow copy of above object using Object.assign({}, <object>) method, However this will just copy top-level properties of obj and in case of nested objects as value for some property this method fails and shares a same common reference for both source and copied objects.

const shallowObj = Object.assign({}, obj);

shallowObj.name = 'Ujjwal';
shallowObj.Year = 1998;

console.log(obj)
console.log(shallowObj)
console.log(shallowObj.getDetails())

//shared reference for country property because its a nested object 
shallowObj.country.countryName = 'Australia';
console.log('Shallow copy check:', obj.country.countryName); // Australia 


// 3) Deep copy using JSON.stringify() and JSON.parse(), But in this case functions inside source object will be left out and only normal properties gets a deep copy.

const deepCopyObj = JSON.parse(JSON.stringify(obj));

deepCopyObj.name = 'Alok';
deepCopyObj.year = 1999;
deepCopyObj.country.countryName = 'NewZealand';

console.log(obj.country.countryName); // Australia
console.log(deepCopyObj); // { name: 'Ronaldo', Year: 2018, country: { countryName: 'Australia' } }

