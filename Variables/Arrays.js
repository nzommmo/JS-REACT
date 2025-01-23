// Create an Array
const Bands = ["Sauti Sol", "Kodong Klan","Watendawili"]
document.getElementById("Bands").innerHTML = Bands

// Create an empty array and add values
const Spices = []

// Add Values to the Set
Spices.push("Paprika")
Spices.push("Black Pepper")
Spices.push("Cardamon")

document.getElementById("Spices").innerHTML = Spices


// Returns elements at the specified index - Returns the same as Spices[2]
document.getElementById("Spices").innerHTML = Spices.at(2)

// Array Concat()
const Aura = Bands.concat(Spices)

document.getElementById("Aura").innerHTML = Aura;


// Array Constructor
const Cereals = ["Maize","Wheat","Millet"]
let consttext = Cereals.constructor

document.getElementById("consttext").innerHTML = consttext

// CopyWithin() - Copies array elements to another position
Cereals.copyWithin(2,0)
document.getElementById("Cereals").innerHTML = Cereals


// Array every() - method returns True if True for all elements

// Create an Array
const ages = [32,33,12,40]

// Create a Test Function
function checkAge(age) {
    return age > 18;
}

document.getElementById("Ages").innerHTML = ages.every(checkAge)


// Array fill() - Fills the elements in an array with a static value
document.getElementById("age").innerHTML = ages.fill(11)

// Array Filter
const age = [22,24,18,12]

function checkAdult(Age) {
    return Age >= 18;
}

const Adult = age.filter(checkAdult)

document.getElementById("Adult").innerHTML = Adult