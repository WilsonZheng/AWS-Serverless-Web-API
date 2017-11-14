# AWS-Serverless-Web-API
AWS Weather Web API

# To run the app:
1. Installing the serverless cli:
    "npm install -g serverless"
2. Make sure Node.js v6.5.0 or later installed
3. Get a free AWS account
4. Run this command to Create a new Serverless Service: "serverless create --template aws-nodejs --path WeatherInAuckland"
5. Modify the serverless.yml file 
6. Add function.js file
7. To run the function (test it locallly): "serverless invoke local --function getWeather"
8. If step 7 returns response, something like

{
    "statusCode": 200,
    "headers": {
        "Access-Control-Allow-Origin": "*"
    },
    "body": "{\"temperature\":19.2}"
}

then run the command: "serverless deploy"

 
# Serverless quick start tutorial
https://serverless.com/framework/docs/getting-started#pre-requisites

