//Equal to Operator
let v = 5;
console.log(v==8) //Returns False
console.log(v==5) //Returns True
console.log(v=="5") //Returns True

console.log("********************************")
//Equal Value & Equal Type
let w = 5;
console.log(w===5); //Returns True
console.log(w===5); //Returns False

console.log("********************************")
// AND operator
let Net_Salary = 120000
let Gross_Salary = 100000
console.log(Net_Salary < 150000 && Gross_Salary > 50000) //Returns True

console.log("********************************")
//Conditional (Ternary) Operator
function Ternaryoperator() {
    let ageinput = document.getElementById("ageinput").value
    let voteable = (ageinput < 18) ? "Too young" : "Old enough";
    
document.getElementById("message").innerHTML = voteable + " to vote"    
}

// The Nullish Coalescing Operator
let House = null;
let text1 = "missing";
let House1 = House ?? text1

document.getElementById("House").innerHTML = "The House Number is " + House1


