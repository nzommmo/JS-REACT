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