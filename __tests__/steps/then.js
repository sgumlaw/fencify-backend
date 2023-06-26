require('dotenv').config()
const AWS = require('aws-sdk');

// const DynamoDB = new AWS.DynamoDB.DocumentClient()
// const DynamoDBDocument = require('dynamodb-doc')

const user_exists_in_UsersTable = async (id) => {
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  console.log(`looking for user [${id}] in table [${process.env.USERS_TABLE}]`)
  const resp = await DynamoDB.get({
    TableName: process.env.USERS_TABLE,
    Key: {
      id
    }
  }).promise();
  console.log("Response", resp.Item);
  expect(resp.Item).toBeTruthy()

  return resp.Item
}

module.exports = {
  user_exists_in_UsersTable
}