const x = { a: [1, 2, 3], b: { y: 4, z: 5 }, c: 6 }
let {c} = x
c = 29
console.log(x)
let {b} = x
b.z = 30
console.log(x)
let {a} = x
a.push(31)
console.log(x)