/* for (i = 1; i < 5; i++) {
  console.log(i);
} // simple 1, 2, 3, 4

for (i = 1; i < 5; i++) {
  if (i==2) continue; // if i is 2 'continue' evade next code line and return program at begin
  console.log(i);
} // simple 1, 3, 4

for (i = 1; i < 5; i++) {
  if (i==3) break; // if i is 3 next the code stops executions
  console.log(i)
} // 1, 2

for (i = 1; i < 5; i++) {
  console.log(i)// first print in console than stop-check
  if (i==3) break; // if i is 3 next the code stops executions
} // 1, 2, 3 
 */

/* j = 1; // for while cycle we need to initializate a global variable
while (j < 5) {
  j++;
  //if (j == 2) continue; // 3, 4, 5
  if (j == 4) break; // 2, 3
  console.log(j);
} // 2, 3, 4, 5 */

// for (initialization; conditions of executng; do as a result if condition is true)
// condition may take the paramaters of .length and others

var someArr = ['a', 'b', 3, 4, 5];
for (var i = 0; i < someArr.length; i++) {
  console.log(someArr[i]);
}