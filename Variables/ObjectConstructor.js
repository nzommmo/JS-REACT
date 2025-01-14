// Constructor Function for Staff Objects

function Staff(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyColor = eye;
}

Staff.prototype.Nationality = "Kenyan"

Staff.prototype.FullName = function() {
    return this.firstName + " " + this.lastName
}

// Create a Staff Object
const Manager = new Staff("Eric", "Nzomo", 21, "Brown")
const Driver =  new Staff("Mutuse","John", 32, "grey")

// Display Info
document.getElementById("staff").innerHTML = "Our new manager is" + " " + Manager.firstName + " "+ "and he is" + " " + Manager.Nationality
document.getElementById("driver").innerHTML =  "Our new driver is" + " " + Driver.firstName
document.getElementById("StaffFullName").innerHTML = Manager.FullName()