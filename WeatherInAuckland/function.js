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
    let id = process.env.APPID;
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=auckland,nz&units=metric&appid='+ id;
    
    fetch(endpoint)
    .then( res => res.json() )
    .then( body =>  {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify({ temperature: body.main.temp })
      };

      callback(null, response);
    });

   
    
}