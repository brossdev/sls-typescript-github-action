import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const news: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully! updated node version',
      input: event,
    }, null, 2),
  };
}
