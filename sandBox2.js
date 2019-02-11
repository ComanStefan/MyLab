//nested simple function, and function return a string
function highLevel(a, b) {
  function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
  }
function addText() { return 'The result is: '}
console.log(addText() + highLevel(2, 3));

//nested more complex function
function highLevel(a, b) {
  function square(x) { return x * x; }
  function minusTwo(y) { return y - 2; }
    return Math.sqrt(square(a) + minusTwo(b));
  }
function addText() { return 'The result is: '}
console.log(addText() + highLevel(2, 3));

//nested one step more complex function
function overHigh() {
  function highLevel(a, b, c) {
   function square(x) { return x * x; }
    function minusTwo(y) { return y - 2; }
    function middleLevel() { return c }
      return Math.sqrt(square(a) + minusTwo(b) + middleLevel(c));
    }
function addText() { return 'The result is: '}
return addText() + highLevel(2, 3, 4);
}
console.log(overHigh());

//nested complex function, reusable, added to a variable
var result = function highLevel(a, b, c) {
  function square(x) { return x * x; }
  function minusTwo(y) { return y - 2; }
  function middleLevel() { return c }
    return Math.sqrt(square(a) + minusTwo(b) + middleLevel(c));
    }
function addText() { return 'The result is: '}
//result(2, 3, 4);
//addText() + result(5, 5, 6);
var resultTexted = addText() + result(5, 5, 6);
console.log(resultTexted);