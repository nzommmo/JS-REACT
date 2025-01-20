// Creating a Map

const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
])

let count = fruits.get("apples")
document.getElementById("fruits").innerHTML = "There are " + count + " " +  "apples"


// Create a map
const cars =  new Map();

// Set Map Values
cars.set("Volvo", "Manual")
cars.set("Mazda","Automatic")
cars.set("Honda","Manual")

let text = " ";
cars.forEach(function(value,key){
    text += key + ' = ' + value;
})

const transmission = cars.get("Volvo")
document.getElementById("carmap").innerHTML = text