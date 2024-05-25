async function fetchWeatherData() {
    const apiKey ='c533ba184ac48e09c20921835b9171b0'; 
    const city = 'ABIA_STATE'; 
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${abiastate}&appid=${c533ba184ac48e09c20921835b9171b0}&units=metric`;

    try {
        const response = await fetch(home.openweathermap.org/api_keys);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
    

        // Extract necessary information
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        // Update the DOM
        document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
        document.getElementById('description').textContent = description;
        document.getElementById('weather-icon').innerHTML = `<img src="${iconURL}" alt="${description}">`;
    
}

// Call the function to fetch weather data
fetchWeatherData();
