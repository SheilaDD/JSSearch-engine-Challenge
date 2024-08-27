function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let keyUrl = "41bffb0eb3c79b0b1213ea49951cotc1";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=41bffb0eb3c79b0b1213ea49951cotc1&units=metric `;
let city = "searchInputElement.value";

function displaytemperature(response) {
  console.log(response);
  let currentTempValue = document.querySelector(".current-temperature-value");
  let currentTemperatureValue = Math.round(response.data.temperature.current);
  currentTempValue.innerHTML = `${currentTemperatureValue}`;
}

axios.get(apiUrl).then(displaytemperature);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
