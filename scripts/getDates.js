document.addEventListener("DOMContentLoaded", function() {
    // Copyright year
    var yearSpan = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified date
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
});

const hamburgerElement = document.querySelector('#myButton')
const navElement = document.querySelector('#animateMe')

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
})document.addEventListener("DOMContentLoaded", function() {
    // Copyright year
    var yearSpan = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified date
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
});

const hamburgerElement = document.querySelector('#myButton')
const navElement = document.querySelector('#animateMe')

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
})

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
        body.style.background = "#000";
		body.style.color = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
        body.style.background = "#eee";
		body.style.color = "#000";
	}
});


// Fetch weather data from OpenWeatherMap API
const apiKey = '74197396bec3354ca932de15f887aaf9';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=abia&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherElement = document.getElementById('weather');
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weather = `${temperature}°C, ${weatherDescription}`;
        weatherElement.textContent = weather;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').textContent = 'Failed to fetch weather data';
    });


 // Function to update and display the visit count
 function updateVisitCount() {
    // Check if localStorage supports
    if (typeof(Storage) !== "undefined") {
        // Check if visit count exists in localStorage
        if (localStorage.getItem("visitCount")) {
            // Get the current visit count from localStorage
            var visitCount = parseInt(localStorage.getItem("visitCount"));
            // Increment visit count by 1
            visitCount += 1;
            // Update the visit count in localStorage
            localStorage.setItem("visitCount", visitCount);
            // Update the visit count display on the page
            document.getElementById("visits").textContent = visitCount;
        } else {
            // If visit count doesn't exist, initialize it to 1
            localStorage.setItem("visitCount", "1");
            // Update the visit count display on the page
            document.getElementById("visits").textContent = "1";
        }
    } else {
        // If localStorage is not supported, display a message
        document.getElementById("visits").textContent = "LocalStorage not supported";
    }
}

// Call the updateVisitCount function when the page loads
window.onload = function() {
    updateVisitCount();
};