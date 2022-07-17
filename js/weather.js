const API_KEY = "fd6c97c9fb7c015f8d7ffef297d2cc66"

function onGeoOK(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("you live in ", lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((Response)=>Response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        }
        );
}
function onGeoError(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
