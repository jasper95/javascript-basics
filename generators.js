const myGen = function*() {
  const one = yield 1;
  const two = yield 2;
  const three = yield 3;
  console.log(one, two, three); // 4, 5, 6
};

const gen = myGen(); //get the generator ready to run
console.log(gen.next()); //{value:1, done: false}
console.log(gen.next(4)); //{value:2, done: false}
console.log(gen.next(5)); //{value:3, done: false}
console.log(gen.next(6)); //{value:undefined, done: true}
console.log(gen.next()); //{value:undefined, done: true}