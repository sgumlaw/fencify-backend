const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { ESTIMATOR_LAYOUTS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const { data } = event.arguments

    const revisedEstimatorLayout = {
        __typename: "EstimatorLayout",
        estimatorId: data.estimatorId,
        transactionId: data.transactionId,
        totalFootage: data.totalFootage,
        totalLines: data.totalLines,
        totalEnds: data.totalEnds,
        totalCorners: data.totalCorners,
        totalHookups: data.totalHookups,
        totalTieIns: data.totalTieIns,
        runsArray: data.runsArray,
        dateCreated: new Date(),
        dateUpdated: new Date(),

    }
  
     
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Update: {
                    TableName: ESTIMATOR_LAYOUTS_TABLE_NAME,
                    Item: revisedEstimatorLayout,
                }
            },
        ]
    }).promise();

    return revisedEstimatorLayout;
}