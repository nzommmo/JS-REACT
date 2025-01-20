let m = "2"

// let n = parseFloat(m)

document.getElementById("numero").innerHTML = m + " "+ "is a" + typeof(n)


// The Unary + Operator
let aa = "John"
let ab = + aa

document.getElementById("unary").innerHTML = ab + " " + "is a" + " " + typeof(ab) 

// Converting Dates to Numbers
ac = new Date()


document.getElementById("date").innerHTML = Number(ac) // Returns Numbers

document.getElementById("year").innerHTML = ac.getFullYear()

