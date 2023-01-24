const place = document.querySelector('#location');
const forecast = document.querySelector('.forecast');
const city = document.querySelector('#city');
const country = document.querySelector('#country')
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const container = document.querySelector('.main-container')
const icon = document.querySelector('#icon')
const time = document.querySelector('#time')

function localTime(unixTime) {
  const currentTime = new Date(unixTime * 1000);
  return currentTime.toLocaleString('en-GB')
}


forecast.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&APPID=fb361e569aa1d25671a8e46453459568`)
    .then(res => res.json())
    .then(data => {
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      container.style.display = 'block';
      time.textContent = localTime(data.dt);
      city.textContent = 'City: ' + data.name;
      country.textContent = 'Country: ' + data.sys.country;
      description.textContent = 'Description: ' + data.weather[0].description;
      temperature.textContent = 'Current temperature: ' + data.main.temp + ' °C';
      humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';
      wind.textContent = 'Speed wind: ' + data.wind.speed + ' Km/h'
    })
})