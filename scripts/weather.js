// SELECT HTML ELEMENT IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// CREATE REQUIRED VARIABLE FOR THE URL
const myKey = '74197396bec3354ca932de15f887aaf9'
const myLat = '5.54'
const myLong = '7.89'

// CONSTRUCTING A FULL PATH USING LITERAL
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResult(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// DISPLAY THE JSON DATA ON MY WEB PAGE
function displayResult(data) {
  console.log('hello')
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute('src', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
}


apiFetch();