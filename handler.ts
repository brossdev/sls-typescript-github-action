import { Handler, APIGatewayEvent } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

export const graphqlHandler: Handler = async (
  event: APIGatewayEvent,
) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello im here with typescript",
      input: event
    })
  };
  return response;
};
