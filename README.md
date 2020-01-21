### Udemy Serverless Framework and Node and AWS Course
## A course by Loren Stewart

Notes
To create a new project

Create a folder for your projct and cd into it.

1. sls create -t name-of-project
This generates a skeleton app .gitignore, handler, yaml files

Set up Notes:
In yaml 
1. under provider you'll see a default region , if you haven't got a region
use default as its usually cheaper and latest services are deployed on that
region first.



The handler file
This is the lambda code
1. Change the arguments to (event, context , callback)
event = what is passed into the function (e.g. from an API call)
context = 


Test your lambda locally 

serverless invoke local -f your-project-name (e.g. hello)
This will test the lambda function and display what is returned.

serverless invoke local -f your-project-name -d 'your data'  
(or -d '{a:1}' for an object)
Will pass data into your invocation (i.e. in the event object argument
of the handler function))

To test an api call 
1. npm init 
2. npm i serverless-offline --save

