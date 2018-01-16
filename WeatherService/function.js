'use strict';
const fetch = require('node-fetch');
module.exports.getWeather = (event, context, callback) => {
  /*
  In serverless.yml , this function would be exported as
  `getWeather`.
  */

  // const data = { temperature: 19.2 };
  /* Define some dummy data, for now.*/
  // const response = {
  //     statusCode: 200,
  //     headers: {
  //         "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(data)
  //     // JSON.stringify converts the JavaScript response object
  //     // into a JSON string, which is what our client is expecting.
  //     // Because we'll be depending on CORS we also need to set
  //     // the `Access-Control-Allow-Origin` header.

  // };
  // callback(null, response);

  // OpenWeatherMap API endpoint.
  //console.log(process.env.APPID);
  console.log('event:' + JSON.stringify(event));
  console.log('city:' + JSON.stringify(event.queryStringParameters.city));
  console.log('country:' + JSON.stringify(event.queryStringParameters.country));
  let id = process.env.APPID;
  let id2 = process.env.APPID2;
  let ct = event.queryStringParameters.city;
  let country = event.queryStringParameters.country;
  country = "nz";
  ct = "auckland";
  const endpointCurrentWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + ct + ',' + country + '&units=metric&appid=' + id;
  //const endpoint5DayWeather = 'http://api.openweathermap.org/data/2.5/forecast?q=' + ct + ',' + country + '&units=metric&appid=' + id;
  const endpoint7DayDailWeather = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + ct + ',' + country + '&units=metric&cnt=7&appid=' + id2;
  let response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: ""
  }
  let weatherArray = [];
  fetch(endpointCurrentWeather)
    .then(res => res.json())
    .then(body => {
      let todayWeather = {
        weather: body.weather[0].main,
        weatherDetail: body.weather[0].description,
        weatherIcon: body.weather[0].icon,
        temperature: body.main.temp,
        pressure: body.main.pressure,
        humidity: body.main.humidity,
        windspeed: body.wind.speed,
        windDegree: body.wind.deg,
      }
      weatherArray.push(todayWeather)
      console.log("weatherArray first built:" + JSON.stringify(weatherArray));
      //callback(null, response);
    })
    .then(() => {
      fetch(endpoint7DayDailWeather)
        .then(res => res.json())
        .then(d => {
          d.list.forEach(element => {
            let singleWeatherData = {
              max: element.temp.max,
              min: element.temp.min,
              weatherIcon: element.weather[0].icon
            }
            weatherArray.push(singleWeatherData)
          });
          console.log("weatherArray second built:" + JSON.stringify(weatherArray));

        })
        .then(() => {
          response.body = JSON.stringify(weatherArray);
          console.log("Response built:" + JSON.stringify(response));
          callback(null, response);
        })
        .catch(e => {
          console.log(e);
          let serverErrorResponse = {
            statusCode: 500,
            body: JSON.stringify(e)
          }
          callback(null, serverErrorResponse);
        })
    })
    .catch(e => {
      console.log(e);
      let serverErrorResponse = {
        statusCode: 500,
        body: JSON.stringify(e)
      }
      callback(null, serverErrorResponse);
    })


}