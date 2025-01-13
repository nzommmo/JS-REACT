const persons = {
    firstName: "Eric",
    lastName:"Nzomo",
    age:"21",
    eyecolor:"brown"
}

document.getElementById("me").innerHTML = `My name is` +  " " + persons.firstName

// Object Methods
const unit = {
    unitCode:"CMT 407",
    UnitTitle:"Social Informatics",
    Lecturer:"Rahab Lanoi",
    Venue:"JH Auditorium",
    unitdetails: function(){
        return this.unitCode + " " + this.UnitTitle;
    }
}

// How to delete an object property
delete unit["UnitTitle"]

// How to add an object property
unit.UnitTitle = "Software Engineering"

document.getElementById("units").innerHTML = unit.unitdetails()


// Nested Objects (Object within an object)

const student = {
    name:"Eric",
    admNo:"1052079",
    clubs:{
        club1:"AISEC",
        club2:"GDG",
        club3:"IHUB"
    }
}

document.getElementById("clubs").innerHTML = student.name + " " + "belongs to" + " " + "the following clubs" + " " + student.clubs.club1 + ", " + student.clubs.club2 + " " + "and " + student.clubs.club3

student.details = function() {
    return (this.name + " " + this.admNo).toUpperCase()
}

document.getElementById("studentdetails").innerHTML = student.details()


// Displaying Objects
// ----------------------- //

// 1. By name
// Makes use of the innerHtml method

// 2. In a Loop

// Example 1

// Create an Object
const song = {
    name:"Sina Noma",
    artist: "Charisma",
    streams:"100K +",
    releasedate:"23/09/2024"
}

// Build a Text

let songInfo = "";
for (let x in song) {
    songInfo += song[x] + " ";
};

// Display the text
document.getElementById("songdetails").innerHTML = songInfo;

// Example 2

const furniture = {
    name:"Bed",
    material:"Mahogany",
    price:"Ksh 20000"
}

let furniitureinfo = "";

for(let x in furniture){
    furniitureinfo += furniture[x] + " "
}

document.getElementById("furniture").innerHTML = furniitureinfo


// 3. Using Object.Values

// Create an Object
const pepsodent = {
    Brand:"Unilever",
    price:"20000"
}

// Create an Array
const myArray = Object.values(pepsodent)

// Display the Array
document.getElementById("pepsodent").innerHTML = myArray


// 4. Using JSON 

const Workout = {
    set1:"Push-Ups",
    set2:"Planks",
    set3:"Crunches"
}

// Stringify Object
let myString = JSON.stringify(Workout)

document.getElementById("workout").innerHTML = myString