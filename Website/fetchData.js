function renderTemp(data) {
    
    var el = document.getElementById('aklTemp');
    el.innerHTML = data.temperature + " °C";

    var el2 = document.getElementById('aklHumidity');
    el2.innerHTML = data.humidity + "%";

    var el3 = document.getElementById('aklWindSpeed');
    el3.innerHTML = data.windspeed + "m/s";

    var el4 = document.getElementById('aklWindDegree');
    el4.innerHTML = data.windDegree + "°";
    
}

// replace with the endpoint created in your deployment.
var endpoint = 'https://14mk35hln5.execute-api.us-east-1.amazonaws.com/dev/weather?city=auckland&country=nz';

fetch(endpoint, { mode: 'cors' })
    .then(function (resp) {
        return resp.json();
    })
    .then(renderTemp);