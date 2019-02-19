//and hoisting
var x;
console.log(x); //undefined
console.log(y); //undefined
var y; //hoisting here
console.log(z+3); //undefined+number = NaN
console.log(z); // undefined
var z = 5; //hoisting only for variable, not for value of it
console.log(z); // 5
var z = 10;
console.log(z); // re-declaring variables with var rewrites them, it's not ok

let a = 14;
console.log(a); // 14
a = 12
console.log(a); // 12, we can give new value to let
//let a = 15;
//console.log(a); //error, we cannot make new declaration with let as it was with var
const b = 15;
console.log(b); //15
//b = 18;
//console.log(b); // error, const means constant value, cannot get new value
c = 12;
let c; //error, first declare then give value to it, in ES5 it was allowed, here not