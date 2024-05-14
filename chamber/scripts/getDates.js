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
})
// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Check if this is the user's first visit
    if (!localStorage.getItem("lastVisit")) {
        // First visit, display welcome message
        document.querySelector('.sidebar-content').innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        // Retrieve last visit date
        var lastVisit = new Date(localStorage.getItem("lastVisit"));
        var currentDate = new Date();
        // Calculate time difference in days
        var timeDiff = Math.abs(currentDate.getTime() - lastVisit.getTime());
        var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Display appropriate message based on days difference
        if (daysDiff === 1) {
            document.querySelector('.sidebar-content').innerHTML = "Back so soon! Awesome!";
        } else {
            document.querySelector('.sidebar-content').innerHTML = "You last visited " + daysDiff + " " + (daysDiff === 1 ? "day" : "days") + " ago.";
        }
    }
    // Store current visit date
    localStorage.setItem("lastVisit", new Date());
} else {
    // Browser does not support localStorage
    console.log("localStorage is not supported in this browser.");
}
