{
    let x = 5;
    x=x+5;
    console.log(x)
}
// Returns x as undefined since x is defined inside a scope
// y=x+4;
// console.log(y)


// Var keyword has a global scope so the b refrencing works outside the scope
{
    var a = 2;
    b=a+2;
    console.log(b)
    
}
c=b;
console.log(6)

// Reassignment
const pi = 3.14152;
// pi = 3.14;
// pi = pi + 10;
console.log(pi)

// Hoisting
console.log(e);
var e = 5;
console.log(e);


let carName = "Volvo XC90";
document.getElementById("carName").innerHTML = carName

let person = "John Doe" , car = "BMW", price = 200;
document.getElementById("person").innerHTML = price

let fullNames = "Eric" + " " + "Nzomo";
document.getElementById("fullName").innerHTML = fullNames


// Constant Arrays

try{
const cars = ["Saab", "Volvo", "BMW"]

// Change an element
cars[0] = "Toyota";

// Add an element
cars.push("Audi")

// cars = ["Subaru", "Jeep", "Range"]

}
catch (err) {
    document.getElementById("Cars").innerHTML = err;
}
// Display the Array
// document.getElementById("Cars").innerHTML = cars;


// Constant Objects
const bike = {type:"Honda",model:"500",color:"white"};

// You can change a property
bike.color = "red";

// You can add a property
bike.owner = "Johnson"

document.getElementById("Bike").innerHTML = "Bike owner is" + " " + bike.owner