function renderTemp(data) {
    var el = document.getElementById('temperature');
    el.innerHTML = data.temperature + " °C";
}

// replace with the endpoint created in your deployment.
var endpoint = 'https://tp63aloptg.execute-api.us-east-1.amazonaws.com/dev/weather';

fetch(endpoint, { mode: 'cors' })
    .then(function (resp) {
        return resp.json();
    })
    .then(renderTemp);