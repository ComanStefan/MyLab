/* function displayTextInConsole() {
console.log('some text');
};
setTimeout(displayTextInConsole, 1000);
setInterval(displayTextInConsole, 1000); */


/* var x = 1; // use a global variable and store value in it
function multplyByTwo() {
  console.log(x=x*2);
}
setInterval(multplyByTwo, 1000);   */


/* var x = 1;
var d = setInterval(function() { 
  console.log(x=x*2);
  if (x == 128) { // == not =
    clearInterval(d)
  };
}, 200); */

(function printNumbersTimeout20_100() {
  var i = 1;
  setTimeout(function go() {
    console.log(i);
    if (i < 20) setTimeout(go, 100);
    i++;
  }, 100);
}());

(function printAlphabet() {
  var i = 96;
  setTimeout(function go() {
    if (i < 121) setTimeout(go, 500);
    i++;
    console.log(String.fromCharCode(i));
  }, 500);
}());
