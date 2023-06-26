const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const ulid = require('ulid')

const { USERS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { user } = event.arguments
    let id = ulid.ulid()

    const newUser = {
        __typename: 'User',
        userId: id,
        lastName: user.firstName,
        firstName: user.firstName,
        middleInitial: user.middleInitial,
        phone: user.phone,
        email: user.email,
        hireDate: user.hireDate,
        isActive: user.isActive,
        imageUrl: user.imageUrl,
        birthdate: user.birthdate,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    }
    
    // bind a variable to the result of the transactGet query that grabs the 
    // last quoteId in the table, extracts the number, and adds one to it.
    // const lastQuoteId = await DocumentClient.transactGet()
    // const newQuoteId = lastQuoteId.Items[0].quoteId.split('-')[1] + 1
    // const newQuoteId = `${year}-${newQuoteId}`
    // const newQuote = {
        // quoteId: newQuoteId,
        // customerId: quote.customerId,
        // priceLevel: quote.priceLevel,
        // projectName: quote.projectName,
    // await DocumentClient.transactGet()
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Put: {
                    TableName: USERS_TABLE_NAME,
                    Item: newUser,
                }
            }
        ]
    }).promise();

    return newUser;
}