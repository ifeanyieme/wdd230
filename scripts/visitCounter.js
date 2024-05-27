
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