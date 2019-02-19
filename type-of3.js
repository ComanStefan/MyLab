//variables and types of data
var x = 5; 
console.log(x +' '+ typeof x); // number
var text = 'Hello';
console.log(text +' '+ typeof text); // string
console.log(text+x +' '+ typeof(text+x)); //Hello5, number+string make concatenations
var y = '12';
console.log(y+x); // 125, because of concatenations, y is considering string ''
console.log(+y+x); // 17, it's magic, concat was made first then plus operator
console.log(parseInt(y)+5)// 17, using the parseInt built-in function
var y1 = '5a';
console.log(parseInt(y1)+x); // 10, y1 takes value of 5
var y2 = 'a5';
console.log(parseInt(y2)+x); // Nan, because left is a, string
var y3 = '5.3';
console.log(parseInt(y3)+x); // 10, for function parseInt '.' in considered string
console.log(parseFloat(y3)+x); // 10.3, with parseFloat it's ok
var someArr = [];
console.log(typeof someArr);
var someObj = {};
console.log(typeof someObj);