// The For Loop
const Units = ["Human Computer Interface", "Social Informatics","Computer Graphics", "Fundamentals of Software Engineering"]

let UnitsList = ""

for (let i = 0; i < Units.length; i++) {
    UnitsList += Units[i] + "<br>"
}

document.getElementById("Units").innerHTML = UnitsList

// The For In Loop
const phone = {
    fname:"S25 Ultra",
    brand:"Samsung",
    price:120000
}

let phoneinfo = ""
for (let x in phone) {
    phoneinfo += phone[x] + " "
}

document.getElementById("phone").innerHTML = phoneinfo


// The For Of Loop
const companies = ["Google","IBM","Sybyl"]

let companiesinfo = ""
for (let z of companies) {
    companiesinfo += z + "<br>"
}

document.getElementById("Companies").innerHTML = companiesinfo

// The While Loop
let k = 0;
let counter = ""

do{
    counter += "<br> The number is " + k;
    k++;
}
while (k < 10)

document.getElementById("counter").innerHTML = counter


const Book = ["Genesis","Exodus","Luke"]
let q = 0;
let Books = "";

while (Book[q]){
    Books += Book[q] + "<br>"
    q++
}

document.getElementById("Books").innerHTML = Books

// Break Statement
let breaks = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break }
    breaks += "The number is " + i + "<br>"
}

document.getElementById("Break").innerHTML = breaks

// Continue Statement
let conts = ""
for(let t=0; t<10;t++){
    if(t===3) {continue}
    conts += "The number is " + t + "<br>"
}

document.getElementById("continue").innerHTML = conts