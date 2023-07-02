const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { ESTIMATORS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const estimator = event.arguments.data

    const revisedEstimator = {
        __typename: "Estimator",
        transactionId: estimator.transactionId,
        dateUpdated: new Date(),
    };
   
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Update: {
                    TableName: ESTIMATORS_TABLE_NAME,
                    Item: revisedEstimator,
                }
            },
        ]
    }).promise();

    return revisedEstimator;
}