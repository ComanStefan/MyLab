const animal = {
  "name": "Patrick",
  "color": "brown",
  "adv": function() {
    console.log(this.name + ' is ' +this.color);
  },
  say : "woof", //in one word key we may not use quotes
  'dogs cost': 1000 // if two word key use qoutes
}
console.log(animal.name);
console.log(animal.say);
animal.adv();

let a = {}
a.name = "Spike"
console.log(a); // entire object
console.log(a.name); 
console.log(a['name']);

let b = 'dogs cost';
console.log(animal.b) // undefined
console.log(animal[b]) // 1000

//let c = 'say' in animal; // true
let c = 'age' in animal; // false
console.log(c);

let d = animal.hasOwnProperty('say');
console.log(d);  //true