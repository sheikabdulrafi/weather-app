const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.getElementById("cityInput");
const submit = document.getElementById("submit");

let weatherData = "";
let tempData = "";
let windData = "";
let humidityData = "";

async function weatherReport() {
  const apiKey = "2d99472855a7d7a4396ceb46cc433a83";
  let cityData = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.cod != 404) {
    weatherData = data.weather[0].description;
    tempData = `${data.main.temp}°C`;
    windData = `${data.wind.speed} Km/h`;
    humidityData = `${data.main.humidity}%`;
    setData();
  } else {
    weatherData = "no data";
    tempData = "no data";
    windData = "no data";
    humidityData = "no data";
    setData();
    console.clear();
  }
}

function setData() {
  weather.innerText = weatherData;
  temp.innerText = tempData;
  wind.innerText = windData;
  humidity.innerText = humidityData;
}
