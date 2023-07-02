const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient()

const { QUOTES_TABLE_NAME, QUOTES_ITEMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const quote = event.arguments.data

    const id = quote.quoteId;
    const items = quote.quoteItems;

    const updatedQuote = {
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
    
    const updatedQuoteItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionItems.QUOTE_ITEM,
                quoteId: id,
                itemId: item.itemId,
                name: item.name,
                cost: item.cost,
                markup: item.markup,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
                source: item.source,
                color: item.color,
                rowId: item.rowId,
                category: item.category,
                dateCreated: new Date(),
                dateUpdated: new Date(),
            }
        })
    });

    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Update: {
                    TableName: QUOTES_TABLE_NAME,
                    Item: updatedQuote,
                }
            },
            {
                Update: {
                    TableName: QUOTES_ITEMS_TABLE_NAME,
                    Item: updatedQuoteItems,
                }
            },
        ]
    }).promise();

    return {updatedQuote, updatedQuoteItems};
}