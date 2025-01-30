// Function is called, the return value will end up in x
let prod = arithmetic(4,3);

function arithmetic(a,b) {
    // Function returns the product of a and b
    return a * b;

}

document.getElementById("product").innerHTML = prod

// Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);

}

let temp = toCelsius(77)

document.getElementById("temperature").innerHTML = temp

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let values = sum(4,9,16,25,29,100,66,77)

document.getElementById("args").innerHTML = values

vals = findMax(1,123,500,115,44,88)

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length;i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
} 

document.getElementById("max").innerHTML = vals

// Arrow Function
hello = () => {
    return "Hello World!"
}

document.getElementById("hello").innerHTML = hello()


// A function that takes name as an argument

const greet = (name) => `Hello ${name}!` 

document.getElementById("hello").innerHTML = greet("Nzomo")


const square = (num) => num * num
document.getElementById("square").innerHTML =  square(5)


// Function that take two numbers and returns the max

const maximum = (v,z) => (v > z ? v :z )
document.getElementById("maximum").innerHTML = maximum(2,3)


// IIFE (Immediately Invoked Function Expression)
var output = (function() {
    var x = 10;
    var y = 20;
    return x + y;
}) ()

document.getElementById("output").innerHTML = output