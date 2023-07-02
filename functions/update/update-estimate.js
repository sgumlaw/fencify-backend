const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { TransactionTypes } = require('../../lib/constants');

const { ESTIMATES_TABLE_NAME, ESTIMATE_ITEMS_TABLE_NAME, ESTIMATE_JOB_COSTS_TABLE_NAME, ESTIMATE_TERMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const estimate = event.arguments.data;
    const id = estimate.estimateId;
    const items = data.estimateItems;
    const costs = data.estimateJobCosts;
    const terms = data.estimateTerms;
    // const username = event["identity"]["claims"]["cognito:username"]
    const revisedEstimate = {
        __typename: TransactionTypes.ESTIMATE,
        estimateId: id,
        customerId: estimate.customerId,
        priceLevel: estimate.priceLevel,
        projectName: estimate.projectName,
        totalEstimateProductCost: estimate.totalEstimateProductCost,
        totalEstimateProductTax: estimate.totalEstimateProductTax,
        totalEstimateProductPrice: estimate.totalEstimateProductPrice,
        totalEstimateProductPrice: estimate.totalEstimateProductPrice,
        totalEstimateJobCosts: estimate.totalEstimateJobCosts,
        totalEstimateManHours: estimate.totalEstimateManHours,
        totalEstimateCosts: estimate.totalEstimateCosts,
        totalEstimateProfit: estimate.totalEstimateProfit,
        totalEstimateContingency: estimate.totalEstimateContingency,
        totalEstimatePrice: estimate.totalEstimatePrice,
        status: estimate.status,
        convertedDate: estimate.convertedDate,
        source: estimate.source,
        userId: estimate.userId,
    };
    const revisedEstimateItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionTypes.ESTIMATE_ITEM,
                estimateId: id,
                itemId: item.itemId,
                name: item.name,
                cost: item.cost,
                markup: item.markup,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
                dateCreated: new Date(),
                dateUpdated: new Date(),
                source: item.source,
                color: item.color,
                rowId: item.rowId,
                category: item.category,
                received: item.received,
                receivedDate: item.receivedDate,
            }
        })
    });
     const revisedEstimateJobCosts = (() => {
        return costs.map((cost) => {
            return {
                __typename: TransactionTypes.ESTIMATE_JOB_COST,
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
    const revisedEstimateTerms = (() => {
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
   
    await DocumentClient.transactWrite({
        TransactItems: [
            {
                Update: {
                    TableName: ESTIMATES_TABLE_NAME,
                    Item: revisedEstimate,
                }
            },
            {
                Update: {
                    TableName: ESTIMATE_ITEMS_TABLE_NAME,
                    Item: revisedEstimateItems,
                }
            },
            {
                Update: {
                    TableName: ESTIMATE_JOB_COSTS_TABLE_NAME,
                    Item: revisedEstimateJobCosts,
                }
            },
            {
                Update: {
                    TableName: ESTIMATE_TERMS_TABLE_NAME,
                    Item: revisedEstimateTerms,
                }
            },
        ]
    }).promise();

    return {revisedEstimate, revisedEstimateItems, revisedEstimateJobCosts, revisedEstimateTerms};
}