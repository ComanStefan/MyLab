JSON.parse('[1, 5, "false", true, "4", {"obj":6}]');

JSON.parse('{"val": 5}', function(x, y) {
  if (x === '') { return y; }
  return y * 2;               
});

var deposit = {
  tomatoes: "yes",
  banan: "no"
};
var str = JSON.stringify(deposit);
console.log(str); 
deposit = JSON.parse(str);
