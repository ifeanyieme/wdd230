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