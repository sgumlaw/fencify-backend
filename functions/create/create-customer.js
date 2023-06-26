const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { CUSTOMERS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { customer } = event.arguments

    const newCustomer = {
        __typename: 'Customer',
        customerId: customer.customerId,
        name: customer.name,
        customerType: customer.customerType,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        zipcode: customer.zipcode,
        contactName: customer.contactName,
        contactEmail: customer.contactEmail,
        phone: customer.phone,
        website: customer.website,
        source: customer.source,
        priceLevel: customer.priceLevel,
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
                    TableName: CUSTOMERS_TABLE_NAME,
                    Item: newCustomer,
                }
            }
        ]
    }).promise();

    return newCustomer;
}