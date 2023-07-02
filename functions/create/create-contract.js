const DynamoDB = require('aws-sdk/clients/dynamodb');
const DocumentClient = new DynamoDB.DocumentClient();
const { TransactionTypes } = require('../../lib/constants');

const { CONTRACTS_TABLE_NAME, CONTRACT_ITEMS_TABLE_NAME, CONTRACT_JOB_COSTS_TABLE_NAME, CONTRACT_TERMS_TABLE_NAME } = process.env

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const contract = event.arguments.data;
    const id = contract.contractId;
    const items = data.contractItems;
    const costs = data.contractJobCosts;
    const terms = data.contractTerms;
    // const username = event["identity"]["claims"]["cognito:username"]
    const newContract = {
        __typename: TransactionTypes.CONTRACT,
        contractId: id,
        customerId: contract.customerId,
        priceLevel: contract.priceLevel,
        projectName: contract.projectName,
        totalContractProductCost: contract.totalContractProductCost,
        totalContractProductTax: contract.totalContractProductTax,
        totalContractProductPrice: contract.totalContractProductPrice,
        totalContractProductPrice: contract.totalContractProductPrice,
        totalContractJobCosts: contract.totalContractJobCosts,
        totalContractManHours: contract.totalContractManHours,
        totalContractCosts: contract.totalContractCosts,
        totalContractProfit: contract.totalContractProfit,
        totalContractContingency: contract.totalContractContingency,
        totalContractPrice: contract.totalContractPrice,
        status: contract.status,
        convertedDate: contract.convertedDate,
        source: contract.source,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        userId: contract.userId,
    };
    const newContractItems = (() => {
        return items.map((item) => {
            return {
                __typename: TransactionTypes.CONTRACT_ITEM,
                contractId: id,
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
     const newContractJobCosts = (() => {
        return costs.map((cost) => {
            return {
                __typename: TransactionTypes.CONTRACT_JOB_COST,
                contractId: id,
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
    const newContractTerms = (() => {
        return terms.map((term) => {
            return {
                __typename: TransactionTypes.CONTRACT_TERM,
                contractId: id,
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
                Put: {
                    TableName: CONTRACTS_TABLE_NAME,
                    Item: newContract,
                }
            },
            {
                Put: {
                    TableName: CONTRACT_ITEMS_TABLE_NAME,
                    Item: newContractItems,
                }
            },
            {
                Put: {
                    TableName: CONTRACT_JOB_COSTS_TABLE_NAME,
                    Item: newContractJobCosts,
                }
            },
            {
                Put: {
                    TableName: CONTRACT_TERMS_TABLE_NAME,
                    Item: newContractTerms,
                }
            },
        ]
    }).promise();

    return {newContract, newContractItems, newContractJobCosts, newContractTerms};
}