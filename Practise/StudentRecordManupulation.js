function manipulateStudentRecord (obj, operation, prop, newValue) {

  if (operation === 'delete') {
    if (obj && obj.hasOwnProperty(prop)) {
      delete obj[prop]
    }
    return obj
  }
  
   else if (operation === 'edit') {
    if (obj && obj.hasOwnProperty(prop)) {
      obj[prop] = newValue
      return obj
    } else {
      return obj
    }
  }
}

const obj = {
  name: 'John',
  lastName: 'Bliss',
  city: 'Florida'
}

console.log(manipulateStudentRecord(obj, 'edit', 'city', 'Seattle'))
console.log(manipulateStudentRecord(obj, 'edit', 'abc', 'Seattle'))
console.log(manipulateStudentRecord(obj, 'delete', 'city', 'Seattle'))
