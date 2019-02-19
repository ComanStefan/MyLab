var a = 5;
if (1) {
  var a = 7; // declaring local variable with var rewrites global
  console.log(a); // 7
} 
console.log(a) //7, here we see changes

let b = 5;
if (1) {
  let b = 7;
  console.log(b); // 7, here is ok
} 
console.log(b) // 5, nothing changing 

let c = 5;
if (1) {
  c = 7; // js reads this as var and make the variable global
  console.log(c); // 7, here is ok
} 
console.log(c) // 7