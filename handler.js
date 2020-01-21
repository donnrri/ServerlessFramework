'use strict';

module.exports.hello = async (e, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${e.pathParameters.name}`,
      },
      null,
      2
    ),
  };
  callback(null, response)
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
