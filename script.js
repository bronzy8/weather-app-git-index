function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

let now = new Date();
let h4 = document.querySelector("h4");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h4.innerHTML = `${day}  ,${hours}:${minutes}`;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
}

let apiKey = "1a553o38efa9c8tf93bb02bf78778044";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHtml = response.data.city;
  temperatureElement.innerHTML = `The temperature in Sydney is ${temperature}℃`;
}

axios.get(apiUrl).then(displayTemperature);
