const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { TransactionTypes, TransactionItems } = require('../../lib/constants');
const ulid = require('ulid')

const { QUOTES_TABLE_NAME, QUOTES_ITEMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { data } = event.arguments
    const quote = data;
    const id = quote.quoteId;
    const items = quote.quoteItems;

    const newQuote = {
        __typename: TransactionTypes.QUOTE,
        quoteId: id,
        customerId: quote.customerId,
        priceLevel: quote.priceLevel,
        projectName: quote.projectName,
        totalQuoteCost: quote.totalQuoteCost,
        totalQuoteProfit: quote.totalQuoteProfit,
        totalQuoteTax: quote.totalQuoteTax,
        totalQuotePrice: quote.totalQuotePrice,
        status: quote.status,
        convertedDate: quote.convertedDate,
        source: quote.source,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        userId: quote.userId,
    }
    
    const newQuoteItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionItems.QUOTE_ITEM,
                quoteId: id,
                itemId: item.itemId,
                name: item.name,
                cost: item.cost,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
                dateCreated: new Date(),
                dateUpdated: new Date(),
            }
        })
    });
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
                    TableName: QUOTES_TABLE_NAME,
                    Item: newQuote,
                }
            },
            {
                Put: {
                    TableName: QUOTES_ITEMS_TABLE_NAME,
                    Item: newQuoteItems,
                }
            },
        ]
    }).promise();

    return {newQuote, newQuoteItems};
}