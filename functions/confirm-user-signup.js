const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient()
const Chance = require('chance')
const chance = new Chance()

const { USERS_TABLE } = process.env

module.exports.handler = async (event) => {
  if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
    const name = event.request.userAttributes['name']
    //create a random suffix in order to create the screen name 
    const suffix = chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true })
    const screenName = `${name.replace(/[^a-zA-Z0-9]/g, "")}${suffix}`
    //This comes from the user schema
    //from the event payload, ewe can grab from the event.userName
    //request.userAttributes['email']
    const user = {
      id: event.userName,
      name,
      screenName,
      createdAt: new Date().toJSON(),
    }
    
    await DocumentClient.put({
      TableName: USERS_TABLE,
      Item: user,
      ConditionExpression: 'attribute_not_exists(id)'
    }).promise()

    return event
  } else {
    return event
  }
}