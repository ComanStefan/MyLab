const someArr = [2, 5, 27];
console.log(someArr);

const iter = someArr[Symbol.iterator]();
console.log(iter);
/* console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */
for (let item of someArr) {
  console.log(item);
}

for (let text of 'hello') {
  console.log(text);
}

const [a, b, ...rest] = 'hello';
console.log(a, b, rest);