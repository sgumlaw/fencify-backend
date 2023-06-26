const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();

const { PRODUCTS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    const { product } = event.arguments
    // let id = ulid.ulid()

    const newProduct = {
        __typename: 'Product',
        itemId: product.itemId,
        category: product.category,
        name: product.name,
        color: product.color,
        diameter: product.diameter,
        gauge: product.gauge,
        height: product.height,
        width: product.width,
        upright: product.upright,
        type: product.type,
        uom: product.uom,
        length: product.length,
        roundup: product.roundup,
        accountingId: product.accountingId,
        vendorId: product.vendorId,
        preferredVendor: product.preferredVendor,
        rail: product.rail,
        model: product.model,
        frame: product.frame,
        mesh: product.mesh,
        selvage: product.selvage,
        stock: product.stock,
        location: product.location,
        weight: product.weight,
        cost: product.cost,
        classType: product.classType,
        gateType: product.gateType,
        hardwareFunction: product.hardwareFunction,
        func: product.func,
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
        // productId: quote.productId,
        // priceLevel: quote.priceLevel,
        // projectName: quote.projectName,
    // await DocumentClient.transactGet()
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Put: {
                    TableName: PRODUCTS_TABLE_NAME,
                    Item: newProduct,
                }
            }
        ]
    }).promise();

    return newProduct;
}