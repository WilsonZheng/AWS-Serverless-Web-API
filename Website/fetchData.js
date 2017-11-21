function degToCompass(num) {
    val = Math.floor((num / 22.5) + 0.5);
    arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    console.log()
    return arr[(val % 16)];
}

function renderTemp(data) {
    

    var el = document.getElementById('aklTemp');
    el.innerHTML = data.temperature + "°C";

    var el2 = document.getElementById('aklHumidity');
    el2.innerHTML = data.humidity + "%";

    var el3 = document.getElementById('aklWindSpeed');
    el3.innerHTML = data.windspeed * 3.6 + "km/h";

    var el4 = document.getElementById('aklWindDegree');
    var direction = degToCompass(data.windDegree);
    el4.innerHTML =  direction;

    var el5 = document.getElementById('aklWeather');
    var iconUrl = "http://openweathermap.org/img/w/" + data.weatherIcon + ".png";
    el5.src = iconUrl;



}


var endpoint = 'https://14mk35hln5.execute-api.us-east-1.amazonaws.com/dev/weather?city=auckland&country=nz';

fetch(endpoint, { mode: 'cors' })
    .then(function (resp) {
        return resp.json();
    })
    .then(renderTemp);