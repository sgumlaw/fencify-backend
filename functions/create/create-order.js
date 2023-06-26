const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { TransactionTypes, TransactionItems } = require('../../lib/constants');

const { ORDERS_TABLE_NAME, ORDER_ITEMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { data } = event.arguments;
    const order = data;
    const id = order.orderId;
    const items = order.orderItems;
    
    const newOrder = {
        __typename: TransactionTypes.ORDER,
        orderId: id,
        customerId: order.customerId,
        priceLevel: order.priceLevel,
        projectName: order.projectName,
        totalOrderCost: order.totalOrderCost,
        totalOrderProfit: order.totalOrderProfit,
        totalOrderTax: order.totalOrderTax,
        totalOrderPrice: order.totalOrderPrice,
        status: order.status,
        convertedDate: order.convertedDate,
        source: order.source,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        userId: order.userId,
    };
    const newOrderItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionItems.ORDER_ITEM,
                orderId: id,
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
                    TableName: ORDERS_TABLE_NAME,
                    Item: newOrder,
                }
            },
            {
                Put: {
                    TableName: ORDER_ITEMS_TABLE_NAME,
                    Item: newOrderItems,
                }
            },
        ]
    }).promise();

    return {newOrder, newOrderItems};
}