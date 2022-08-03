const API_KEY = "5745b335bb61bfe9f7757c522437237c";


function onGeosuccess(position){
    const lat =position.coords.latitude;
    const log =position.coords.longitude;
    console.log("You live in", lat, log);
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        });
}
function onGeoError(){
    alert("Can not locate you");
}
navigator.geolocation.getCurrentPosition(onGeosuccess, onGeoError);
