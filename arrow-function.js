function sum1(a, b) {
  console.log(a+b);
}
sum1(2,3);

sum2 = (a, b) => { console.log(a+3+b) }
sum2(2,5);

sum3 = (a, b) => a + b;
console.log(sum3(2,7));

let someVar = z => {
  console.log(z*3);
}
someVar(4);

let noArg = () => { return true }
console.log(noArg());