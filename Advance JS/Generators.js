// -> Implementing iterable and iterator by ourselves is quite difficult and verbose.
// -> Something which can do all this implementation for us is called as Generators.
// -> Generators are a class or function that simplify the task of creating an iterator. 
// -> A Generator function declaration has * before its name.
// -> We all know that a normal function follows Run-To-Completion model.
// -> A normal function keeps on executing till last line, the only way to stop its execution is either returning from it or if it throws an error.
// -> In contrast, a Generator function can stop its execution in mid way and then it can continue again from where it stopped lastly. 
// -> So we can say that a Generator function can pause the execution. 
// -> To achieve that behaviour we can use 'yield' keyword.
// -> We invoke a Generator function just like a normal function.
// -> However, it returns an object called as generatorObject.
// -> And this generatorObject is an iterator and can be used with for..of loop.
// -> Generators were introduced in 2015 and allow you to define and iterative behaviour by writing a single function whose execution is not continuous.

// A normal JS function
function normalFunction () {
  console.log('Hello');
  console.log('World');
}

normalFunction();

// Generator function
function* generatorFunction () {
  yield 'Hello';
  yield 'World';
}

const generatorObject = generatorFunction();

for(const word of generatorObject) {

  console.log(word);
}