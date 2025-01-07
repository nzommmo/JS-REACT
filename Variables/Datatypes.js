const sym1 = Symbol();
const sym2 = Symbol();

// var sym3 = sym1 === sym2

console.log(sym1 === sym2)


const desc = Symbol('description');
console.log(desc.description)

const key = Symbol('uniqueKey');
const obj = {
    [key]: 'value'
};

console.log(obj[key])


// With decimals:
let x1 = 34.20
console.log(x1)

// Without decimals
let x2 = 25;
console.log(x2)


// Exponential 

let y = 123e5;
console.log(y)
let z = 123
console.log(z)

