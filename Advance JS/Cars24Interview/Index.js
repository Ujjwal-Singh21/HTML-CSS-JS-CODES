// Q2: Output based question on Event Loop 
//----------------------------------------- 

// console.log('a');
// setTimeout(() => console.log('setTimeout cb Fn'), 0);
// Promise.resolve(() =>  console.log('Promise')).then((res) => res());
// console.log('b');

// Output -> a, b, Promise, setTimeout cb Fn 

// Here main thread first normally prints a then b, meanwhile setTimeout callBack Fn is waiting in Task/CallBack Queue and Promise is waiting in MicroTask/Priority Queue, The Event Loop gives first Priority to the MicroTask Queue and then Task Queue, and hence so the Output we have got is why we have got.

//----------------------------------------------------------------------------------------------------------

// Q3: Infinite Currying
//----------------------

// Implement currying for this add function -> add(5)(2)(4)(8)()

function add(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return () => {
          return a + b + c + d;
        }
      }
    }
  }
}

console.log('Normal Approach: ', add(5)(2)(4)(8)());

// can also be invoked like this in step by step procedure
const add2 = add(5)
const add4 = add2(2)
const add8 = add4(4)
const sumResult = add8(8)
console.log('Extended Normal Approach: ', sumResult());

// The above approach is not flexible when function call increases, hence making an Advances version of it using Infinite Currying concept.

function advancedAdd(a) {

  return function(b) {

    if(b) 
       return advancedAdd(a + b);
    else
       return a;
  }
}

console.log('Advanced Approach: ', add(5)(2)(4)(8)());


//-----------------------------------------------------------------------------------------------------------------------

// Q4: Implement this code
//------------------------
// const resultObj = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(resultObj.total);

// const calc = {
//   total: 0,

//   add(a) {
//     this.total = this.total + a; // -> this.total += a;
//     return this;
//   },

//   multiply(b) {
//     this.total *= b;
//     return this;
//   },

//   subtract(c) {
//     this.total -= c;
//     return this;
//   }

// }

// const resultObj = calc.add(10).multiply(5).subtract(30).add(10);

// console.log('Code Implementation result:', resultObj.total); 


//-----------------------------------------------------------------------------------------------------

