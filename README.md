# AWS-Serverless-Web-API
AWS Weather Web API

# Walkflow of developing the API:
1. Installing the serverless cli:
    "npm install -g serverless"
2. Make sure Node.js v6.5.0 or later installed
3. Get a free AWS account
4. Run this command to Create a new Serverless Service: "serverless create --template aws-nodejs --path WeatherInAuckland"
5. Modify the serverless.yml file 
6. Add function.js file
7. To run the function (test it locallly): "serverless invoke local --function getWeather"
8. Setup aws provider credentials, follow this link (do the "Using AWS profiles" option): https://serverless.com/framework/docs/providers/aws/guide/credentials/

9. If step 7 returns response, something like

        {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": "{\"temperature\":19.2}"
        }

        then run the command: "serverless deploy" and wait it to finish. Now the code is deployed in AWS.
9. Check the console output, be aware of the endpoints info. For example: 
endpoints:
  GET - https://tp63aloptg.execute-api.us-east-1.amazonaws.com/dev/weather

10. Create Webpage folder and app.js, index.html inside the folder
11. run "npm install node-fetch -save" in WeatherInAuckland folder, so when use serverless to deploy the app to AWS, the lambda function will include the fetch library

12. Use serverless.yml to include AppID of OpenWeather API
13. Deploy the app again in AWS and now it should get the temperature data of Auckland as response.

# Serverless quick start tutorial
https://serverless.com/framework/docs/getting-started#pre-requisites

Reference:http://toniando.com/posts/weather-in-venice-web-app-lambda-and-api-gateway/ 

