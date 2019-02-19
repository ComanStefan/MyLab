/* let b = [5, 6, 9];
console.log(b);
console.log(b[2]);
console.log(b.length);
b[1] = 12;
b[6] = 88;
console.log(b);
delete b[6];
console.log(b); */

/* let out = document.getElementById('out');
let str = '';
for (let i = 0; i < b.length; i++) {
  if (b[i]!==undefined) str += b[i] + '<br>'; //  '(b[i]!==undefined)' - take away empty slots when displaing in html
};
out.innerHTML = str; */

let tempCelsius = [-4, -1, -2, 0, 0, 1, 4, 3, 5, 2, 0, -1]
let CA = 0;
for (let i = 0; i < tempCelsius.length; i++) {
  CA += tempCelsius[i]
}
console.log(CA / tempCelsius.length)
console.log(Math.min.apply(null, tempCelsius));
console.log(Math.max.apply(null, tempCelsius));


let temp2 = [
  [-6, 0, 3],
  [-4, 0, 4],
  [-2, 1, 7]
];
console.log(temp2)

for (let k = 0; k < temp2.length; k++) {
    CA = 0;
    for (let l = 0; l < temp2[k].length; l++) {
      CA += temp2[k][l];
    }
    console.log(CA / temp2[k].length)
    console.log('t min = ' + Math.min.apply(null, temp2[k]));
    console.log('t max = ' + Math.max.apply(null, temp2[k]));
}