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
  let ct = event.queryStringParameters.city;
  let country = event.queryStringParameters.country;
  const endpointCurrentWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + ct + ',' + country + '&units=metric&appid=' + id;
  //const endpoint5DayWeather = 'http://api.openweathermap.org/data/2.5/forecast?q=' + ct + ',' + country + '&units=metric&appid=' + id;
  
  fetch(endpointCurrentWeather)
  .then(res => res.json())
  .then(body => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ 
        weather: body.weather.main,
        weatherDetail: body.weather.description,
        weatherIcon: body.weather.icon,
        temperature: body.main.temp,
        pressure: body.main.pressure,
        humidity: body.main.humidity,
        windspeed: body.wind.speed,
        windDegree: body.wind.deg,
       })
    };

    callback(null, response);
  });
  // fetch(endpoint5DayWeather)
  //   .then(res => res.json())
  //   .then(body => {
  //     //Get current date value for comparison 
  //     var currentDatetime = new Date();
  //     var currentDate = currentDatetime.getDate();
  //     var currentMonth = currentDatetime.getMonth()+1;
  //     var currentYear = currentDatetime.getFullYear();
      



  //     // Create a new JavaScript Date object based on the timestamp
  //     // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  //     var date = new Date(unix_timestamp * 1000);

  //     var datepart = date.getDate();
  //     // Hours part from the timestamp
  //     var hours = date.getHours();
  //     // Minutes part from the timestamp
  //     var minutes = "0" + date.getMinutes();
  //     // Seconds part from the timestamp
  //     var seconds = "0" + date.getSeconds();

  //     // Will display time in 10:30:23 format
  //     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  //     const response = {
  //       statusCode: 200,
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({ temperature: body.main.temp })
  //     };

  //     callback(null, response);
  //   });



}