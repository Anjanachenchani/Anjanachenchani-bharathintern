const apiKey = '91b99a72b5b92d14b642393753f6982a';
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value;
    getWeather(cityInput);
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}')
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('name');
            const weatherDescription = document.getElementById('description');
            const temperature = document.getElementById('temperature');

            cityName.textContent = data.name;
            weatherDescription.textContent = data.weather[0].description;
            temperature.textContent = Temperature: ${Math.round(data.main.temp - 273.15)}°C;
        })
        .catch(error => console.error('Error:', error));
}