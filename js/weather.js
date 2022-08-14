function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const API_KEY = "4f8263c1e16424d6dc4366c335fcd342";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("위치를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
