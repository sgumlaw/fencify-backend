//this mutation handler should result in a mutation to three dynamoDb tables. 
//these tables are: Estimators, EstimatorLayouts, and EstimatorSpecificationsChainlink
//the three corresponding functions are: 
    //createEstimator, createEstimatorLayout, createEstimatorSpecificationChainlink

const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { ESTIMATORS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const estimator = event.arguments.data

    const newEstimator = {
        __typename: "Estimator",
        estimatorId: estimator.estimatorId,
        transactionId: estimator.transactionId,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    };
   
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

    return newEstimator;
}