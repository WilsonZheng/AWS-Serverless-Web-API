function degToCompass(num) {
    val = Math.floor((num / 22.5) + 0.5);
    arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    console.log()
    return arr[(val % 16)];
}

function renderTemp(data) {

    var el = document.getElementById('aklTemp');
    el.innerHTML = data[0].temperature + "°C";

    var el2 = document.getElementById('aklHumidity');
    el2.innerHTML = data[0].humidity + "%";

    var el3 = document.getElementById('aklWindSpeed');
    el3.innerHTML = (data[0].windspeed * 3.6).toFixed(1) + "km/h";

    var el4 = document.getElementById('aklWindDegree');
    var direction = degToCompass(data[0].windDegree);
    el4.innerHTML = direction;

    var el5 = document.getElementById('aklWeather');
    var iconUrl = "http://openweathermap.org/img/w/" + data[0].weatherIcon + ".png";
    el5.src = iconUrl;

    var secondDayIcon = document.getElementById('secondWeatherIcon');
    var secondDayMax = document.getElementById('secondMax');
    var secondDayMin = document.getElementById('secondMin');
    secondDayMax.innerHTML = data[2].max + "°C";
    secondDayMin.innerHTML = data[2].min + "°C";
    secondDayIcon.src = "http://openweathermap.org/img/w/" + data[2].weatherIcon + ".png";

    var thirdDayIcon = document.getElementById('thirdWeatherIcon');
    var thirdDayMax = document.getElementById('thirdMax');
    var thirdDayMin = document.getElementById('thirdMin');
    thirdDayMax.innerHTML = data[3].max + "°C";
    thirdDayMin.innerHTML = data[3].min + "°C";
    thirdDayIcon.src = "http://openweathermap.org/img/w/" + data[3].weatherIcon + ".png";

    var fourthDayIcon = document.getElementById('fourthWeatherIcon');
    var fourthDayMax = document.getElementById('fourthMax');
    var fourthDayMin = document.getElementById('fourthMin');
    fourthDayMax.innerHTML = data[4].max + "°C";
    fourthDayMin.innerHTML = data[4].min + "°C";
    fourthDayIcon.src = "http://openweathermap.org/img/w/" + data[4].weatherIcon + ".png";

    var fifthDayIcon = document.getElementById('fifthWeatherIcon');
    var fifthDayMax = document.getElementById('fifthMax');
    var fifthDayMin = document.getElementById('fifthMin');
    fifthDayMax.innerHTML = data[5].max + "°C";
    fifthDayMin.innerHTML = data[5].min + "°C";
    fifthDayIcon.src = "http://openweathermap.org/img/w/" + data[5].weatherIcon + ".png";

    var sixthDayIcon = document.getElementById('sixthWeatherIcon');
    var sixthDayMax = document.getElementById('sixthMax');
    var sixthDayMin = document.getElementById('sixthMin');
    sixthDayMax.innerHTML = data[6].max + "°C";
    sixthDayMin.innerHTML = data[6].min + "°C";
    sixthDayIcon.src = "http://openweathermap.org/img/w/" + data[6].weatherIcon + ".png";


    var seventhDayIcon = document.getElementById('seventhWeatherIcon');
    var seventhDayMax = document.getElementById('seventhMax');
    var seventhDayMin = document.getElementById('seventhMin');
    seventhDayMax.innerHTML = data[7].max + "°C";
    seventhDayMin.innerHTML = data[7].min + "°C";
    seventhDayIcon.src = "http://openweathermap.org/img/w/" + data[7].weatherIcon + ".png";

}


var endpoint = 'https://14mk35hln5.execute-api.us-east-1.amazonaws.com/dev/weather?city=auckland&country=nz';

fetch(endpoint, { mode: 'cors' })
    .then(function (resp) {
        return resp.json();
    })
    .then(renderTemp);