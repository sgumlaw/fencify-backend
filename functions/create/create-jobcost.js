const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const ulid = require('ulid')

const { JOB_COSTS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { cost } = event.arguments
    let id = ulid.ulid()

    const newJobCost = {
        __typename: 'JobCost',
        costId: id,
        name: cost.name,
        type: cost.type,
        rate: cost.rate,
        rateType: cost.rateType,
        jobType: cost.jobType,
        dateCreated: new Date(),
        dateUpdated: new Date(),

    }
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Put: {
                    TableName: JOB_COSTS_TABLE_NAME,
                    Item: newJobCost,
                }
            }
        ]
    }).promise();

    return newJobCost;
}