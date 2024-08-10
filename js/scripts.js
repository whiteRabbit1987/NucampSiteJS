const apiKey = process.env.OPEN_WEATHER_API_KEY;
const city = "Corpus Christi";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


async function fetchWeather() {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        console.log(weatherData);
        displayWeather(weatherData);
    } catch (err) {
        console.error('Failed to fetch data: ', err);
    }
}

function displayWeather(weatherData) {
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`
    const iconImg = document.createElement('img');
    iconImg.src = iconUrl;
    iconImg.alt = 'Weather Icon';

    const iconContainer = document.getElementById('weather-icon');
    iconContainer.appendChild(iconImg);

    const tempEl = document.getElementById('weather-temp');
    tempEl.textContent = `Temperature: ${temp} \u2109`;

    const desEl = document.getElementById('weather-description');
    desEl.textContent = description;
}

fetchWeather();



const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carouselButton.classList.remove('btn-danger');
        carouselButton.classList.add('btn-info');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carouselButton.classList.remove('btn-info');
        carouselButton.classList.add('btn-danger');
        carousel.cycle();
    }
})





