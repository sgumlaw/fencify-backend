const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const ulid = require('ulid')

const { ESTIMATORS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { estimator } = event.arguments
    let id = ulid.ulid()

    const newEstimator = {
        __typename: "Estimator",
        estimatorId: id,
        transactionId: estimator.transactionId,
        transactionType: estimator.transactionType,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    }

    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Put: {
                    TableName: ESTIMATORS_TABLE_NAME,
                    Item: newEstimator,
                }
            },
        ]
    }).promise();

    return newEstimator
}