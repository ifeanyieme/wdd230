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
x
cdocument.addEventListener("DOMContentLoaded", function() {
    // Select DOM elements
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateMe');
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Error handling for missing elements
    if (!hamburgerElement || !navElement || !yearSpan || !lastModifiedSpan) {
        console.error("One or more required elements not found in the DOM.");
        return; // Exit the function to prevent further execution
    }

    // Toggle navigation menu on hamburger menu click
    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
});

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


 
 function updateVisitCount() {
    
    if (typeof(Storage) !== "undefined") {
        
        if (localStorage.getItem("visitCount")) {
        
            var visitCount = parseInt(localStorage.getItem("visitCount"));
            
            visitCount += 1;
            
            localStorage.setItem("visitCount", visitCount);
            
            document.getElementById("visits").textContent = visitCount;
        } else {

            localStorage.setItem("visitCount", "1");
            
            document.getElementById("visits").textContent = "1";
        }
    } else {
        
        document.getElementById("visits").textContent = "LocalStorage not supported";
    }
}

// Call the updateVisitCount function when the page loads
window.onload = function() {
    updateVisitCount();
};