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
