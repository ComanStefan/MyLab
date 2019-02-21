/* //ES 5
function some(a, b) {
  console.log(arguments.length); //pseudo array
  arguments[0] = "some string"; // assign argument to index[0] - a

  console.log(arguments[3]); //55
  console.log(a); // index[0]

  b = "some more string"
  console.log(b); //33

  console.log('------------');

  for (let i=0; i<arguments.length; i++) console.log(arguments[i]); // display all arguments received from pseudo array

}
//some(3); //arg take position of first parameter a, b is undefined
some(22, 33, 44, 55);  */

/* 
//ES 6
function two(a) {
  "use strict";
  console.log(a); // 22
  arguments[0] = "some string";
  console.log(arguments); // { '0': 'some string', '1': 33, '2': 44, '3': 55 }
  console.log(a); // 22, a is still the same
// in ES 6 argument behave like a local variable
}
two(22, 33, 44, 55);  */

function three(a) {
  "use strict";
  let b;
  console.log(arguments  + ' ' + typeof arguments);
  b = Array.from(arguments); // now we can push, pop, map and to work as an simple array
  console.log(b + ' ' + typeof b);
 

}
three(22, 33, 44, 55); 