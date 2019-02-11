// arrow-anonymous function with two parameters
const arrowFunction = (num1, num2) => { return num1 * num2 };
//or 
//const arrowFunction = (num1, num2) => num1 * num2;
console.log(arrowFunction(2, 3));

//arrow-anonymous function without parameters
const arrowFuctionNoParameters = () => { console.log('some string or value'); }
arrowFuctionNoParameters();

//anonymous function
setTimeout(function() {
  console.log('text');
}, 2000); //1s = 1000ms

//anonymous function, self-invoked using closure
(function() {
  console.log('text');
})();

const squared = (x) => x*x;
console.log(squared(2));

//nested function


 


