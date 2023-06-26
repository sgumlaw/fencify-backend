const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { TransactionTypes } = require('../../lib/constants');
const ulid = require('ulid')

const { ESTIMATES_TABLE_NAME, ESTIMATE_ITEMS_TABLE_NAME, ESTIMATE_JOB_COSTS_TABLE_NAME, ESTIMATE_TERMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const { data } = event.arguments
    // let id = ulid.ulid()
    // const year = new Date().getFullYear()
    // id = `${year}-${id}`
    const estimate = data;
    const id = estimate.estimateId;
    const items = data.estimateItems;
    const costs = data.estimateCosts;
    const terms = data.estimateTerms;

    const newEstimate = {
        __typename: TransactionTypes.ESTIMATE,
        estimateId: id,
        customerId: estimate.customerId,
        priceLevel: estimate.priceLevel,
        projectName: estimate.projectName,
        totalEstimateProductCost: estimate.totalEstimateProductCost,
        totalEstimateProductTax: estimate.totalEstimateProductTax,
        totalEstimateProductPrice: estimate.totalEstimateProductPrice,
        totalEstimateProductProfit: estimate.totalEstimateProductProfit,
        totalEstimateJobCosts: estimate.totalEstimateJobCosts,
        totalEstimateContingency: estimate.totalEstimateContingency,
        totalEstimateProfit: estimate.totalEstimateProfit,
        totalEstimatePrice: estimate.totalEstimatePrice,
        totalEstimateManHours: estimate.totalEstimateManHours,
        status: estimate.status,
        convertedDate: estimate.convertedDate,
        source: estimate.source,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        userId: estimate.userId,
        
    };
    const newEstimateItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionTypes.ESTIMATE_ITEM,
                estimateId: id,
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
    const newEstimateJobCosts = (() => {
        return costs.map((cost) => {
            return {
                __typename: TransactionTypes.ESTIMATE_COST,
                estimateId: id,
                costId: cost.costId,
                name: cost.name,
                crewQty: cost.crewQty,
                jobNote: cost.jobNote,
                hours: cost.hours,
                rate: cost.rate,
                total: cost.total,
                equipQty: cost.equipQty,
                otherQty: cost.otherQty,
                dateCreated: new Date(),
                dateUpdated: new Date(),
            }
        })
    });
    const newEstimateTerms = (() => {
        return terms.map((term) => {
            return {
                __typename: TransactionTypes.ESTIMATE_TERM,
                estimateId: id,
                termId: term.termId,
                description: term.description,
                type: term.type,
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
                    TableName: ESTIMATES_TABLE_NAME,
                    Item: newEstimate,
                }
            },
            {
                Put: {
                    TableName: ESTIMATE_ITEMS_TABLE_NAME,
                    Item: newEstimateItems,
                }
            },
            {
                Put: {
                    TableName: ESTIMATE_JOB_COSTS_TABLE_NAME,
                    Item: newEstimateJobCosts,
                }
            },
            {
                Put: {
                    TableName: ESTIMATE_TERMS_TABLE_NAME,
                    Item: newEstimateTerms,
                }
            },
        ]
    }).promise();

    return {newEstimate, newEstimateItems, newEstimateJobCosts, newEstimateTerms};
}