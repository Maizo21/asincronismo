function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const iterator = iterate(["Oscar", "Luis", "Juan", "Pedro"]);

console.log(iterator.next()); // { value: 'Oscar', done: false }
console.log(iterator.next()); // { value: 'Luis', done: false }
console.log(iterator.next()); // { value: 'Juan', done: false }
console.log(iterator.next()); // { value: 'Pedro', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
