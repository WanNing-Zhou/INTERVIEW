console.log( (0 + true) === 1)
console.log( '0' + false === 0)
console.log(1 + { valueOf() { return 1 } } === 2 )

console.log(1 + [2,3] === [1,2,3])