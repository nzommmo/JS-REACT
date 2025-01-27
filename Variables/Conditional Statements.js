// The If Statement
let time = 19;
let greeting = "";

if (time < 18) {
    greeting = "Good day"
}

document.getElementById("greeting").innerHTML = greeting


// The Else Statement

if (time < 18) {
    greeting = "Good day"
} else {
    greeting = "Good evening"
}

document.getElementById("greeting").innerHTML = greeting

// The Else If Statement
if (time < 10) {
    greeting = "Good Morning"
} else if (time < 20) {
    greeting = "Good day"
} else {
    greeting = "Good Evening"
}

document.getElementById("greeting").innerHTML = greeting

// Switch Case
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        
}

document.getElementById("day").innerHTML = "Today is " + day 


// Default key word
switch (new Date().getDay()) {
    default:
        weekend = "Looking forward to the weekend"
        break;
    case 6:
        weekend = "Today is Saturday"
        break;
    case 0:
        weekend = "Today is Sunday"
}

document.getElementById("default").innerHTML = weekend