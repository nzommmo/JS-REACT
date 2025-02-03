// Geolocation API
var locationElement = document.getElementById("location")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
        locationElement.innerHTML = "Geolocation is not supported by this browser"
    }
}

function showPosition(position) {
    locationElement.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// Web Storage API

localStorage.setItem("Event","Mullahacks")

document.getElementById("event").innerHTML = localStorage.getItem("Event")