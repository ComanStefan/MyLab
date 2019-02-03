JSON.parse('[1, 5, "false", true, "4", {"obj":6}]');

JSON.parse('{"bag": 5}', function(key, value) {
  if (key === '') { return value; }
  return value * 2;               
});

var deposit = {
  tomatoes: "yes",
  banan: "no"
};
var str = JSON.stringify(deposit);
console.log(str); 
deposit = JSON.parse(str);


var grarea = '{"stone":[' +
'{"stoneType":"marble","color":"white" },' +
'{"stoneType":"granite","color":"green" },' +
'{"stoneType":"granite","color":"black" }]}';

var jsonDataFromGrarea = JSON.parse(grarea);

console.log(jsonDataFromGrarea.stone[0].stoneType); 
//marble
console.log(jsonDataFromGrarea.stone[1].color);
//green
console.log(Object.keys(jsonDataFromGrarea));
//stone
console.log(Object.values(jsonDataFromGrarea));
//array of [{},{},{}]
