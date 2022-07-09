import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient"
import { v4 as uuidV4 } from "uuid"

interface ICreateTodo {
  id: string;
  user_id: string;
  title: string;
  done: boolean;
  deadline: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const { userid: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body);

  const createTodo: ICreateTodo = {
    id: uuidV4(),
    user_id,
    title,
    done: false,
    deadline: new Date(deadline).toISOString(),
  }

  await document.put({
    TableName: "todos",
    Item: createTodo
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(createTodo)
  }
}