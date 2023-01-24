// For an object to be an iterable, it should do 2 things,
// 1) Should have a method at the key: [Symbol.iterator]
// 2) That method should not accept any argument and should return an object that conforms/implements Iterator Protocol.

// So for an object to be an iterator, it should also again do 2 things,
// 1) Should have a method at the key: next 
// 2) That method should return an object with 2 properties 'value' and 'done'
// value: which gives the current element, 
// done: It is a boolean value, indicating whether or not there are anymore elements that could be iterated upon.

// -> Creating our own object and making it an iterable.
// -> similar to what we have done here, JS does it internally for strings, arrays, maps and sets. That is why we can easily iterate them using for...of loop.

const object = {
  
  [Symbol.iterator]: function () {

    let step = 0;

    const iterator = {

      next: function () {

        step++

        if(step === 1) {

          return { value: 'Hello', done: false }

        } 
        else if(step === 2) {

          return { value: 'World', done: false }
          
        }
        else {

          return { value: undefined , done: true }
        }
        
      }
    }

    return iterator;
  }
}

for(const word of object) {

  console.log(word);
}