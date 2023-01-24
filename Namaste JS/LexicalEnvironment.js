/* -> A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object or primitive value].

-> Lexical in general means in hierarchy or in a sequence. Whenever a new execution context(EC) is created a new lexical environment is created and it is referenced in local EC memory space.

-> Lexical Environment: Local Memory + reference to Lexical Environment of its Parent

-> So in short, a lexical environment is a place where variables and functions live or physically present during the program execution.

-> This is what a lexical environment conceptually look like: */
//---------------------------------------------------------------

LexicalEnvironment = {
  // Identifier:  <value>,
  // Identifier:  <function object>
}

//code example
//-------------
function a () {
  var b = 10
  c()
  function c () {
    console.log(b) //it prints the right value. How? See ans below Summary part
  }
}

a()
console.log(b) // now when cursor comes here, it prints NOT DEFINED!

/*
  function c is lexically inside function a. 
  - So in EC of c(), variables and fun in c (none) + reference to lexical environment of parent a() is there
  - LE of a() in turn is its memory space + reference to lexical environment of its parent (Global EC)
  - LE of Global EC points to its memory space + *NULL* (as no parent for Global EC).
*/

