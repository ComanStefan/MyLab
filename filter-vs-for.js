let a = [3, -4, 1, 6, -19, 22];

let b = [];
for (let i = 0; i < a.length; i++) {
  if (a[i]>=0) b.push(a[i]); // if a[arg] is positve then a go in b 
}
console.log(a);
console.log(b);

let c = a.filter(function(currentValue, index){ // filter requieres true or false condition
  //return currentValue > 0; // positive
  return index%2==0; // odd nums
});
console.log(c);