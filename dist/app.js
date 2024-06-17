const API_KEY = "992cbd552b7173c2a9ec9017eb6075ce";
let cities = document.getElementById("cities");
let time = document.querySelector(".time");
cities.addEventListener("change", (e) => {
   getWeather(e.target.value)
    
});

setInterval(() => {
    
let date = new Date();
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   
},1000)
getWeather(cities.value)
function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
      .then((data) => {
    
      document.getElementById("city").innerHTML = data.name;
      document.getElementById("clouds").innerHTML = data.clouds["all"];
      document.getElementById("temp").innerHTML = data.main.temp;
      document.getElementById("weather").innerHTML += data.weather[0].main;
      document.getElementById("humidity").innerHTML = data.main.humidity;
      document.getElementById("wind").innerHTML = data.wind["speed"];
      document.getElementById(
        "icon"
      ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      console.log(error);
    });
}