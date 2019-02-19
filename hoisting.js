//console.log(a); // is not defined

console.log(b1); // undefined
var b1;

var b2;
console.log(b2); // undefined, similar as var b1, hoisting in work

var c1 = 5;
console.log(c1); // 5

console.log(c2); // undefined, hoisting is geting only the declaration of  variable, not its value
var c2 = 5;

console.log(d); // undefined
var d = 7;
console.log(d); // 7
d = 12;
console.log(d); // 12

//NB: hoisting works inside of block, in function it will go to the begining of function

let e1 = 99;
console.log(e1); // 99

console.log(e2); // no hoisting here, ES6, e2 is not defined
let e2;