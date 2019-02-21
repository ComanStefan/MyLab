let a = [2, 3, 5];

/* let b = [];
for (let i = 0; i < a.length; i++) {
  b[i] = a[i]*2;
}
console.log(a); 
console.log(b); 
 */

a[5] = 12; // map work only on existing elements, cycle for would return NaN when miltiply 
let c = a.map(function(currentValue, y, z) { 
  //console.log(y); //index
  //console.log(z);
  return currentValue * 2;
});
console.log(c);