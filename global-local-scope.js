(function() {
  var a = b = 4; // var a - local, b - is global now

})();
console.log(typeof a !=='undefined');
console.log(typeof b !=='undefined');
//console shows a false, and b true because in js declaration are made from right to left.