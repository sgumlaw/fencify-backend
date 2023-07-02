// const DynamoDB = require('aws-sdk/clients/dynamodb');
// const DocumentClient = new DynamoDB.DocumentClient();
// const { BatchWriteCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchWriteCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { chunkArray } from "../../libs/utils/util-array";
// import { chunkArray } from "./libs/utils/util-array.js";
// const { chunkArray } = require("libs/utils/util-array.js");
// const { ORDERS_TABLE_NAME, ORDER_ITEMS_TABLE_NAME } = process.env
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const orderId = event.arguments.orderId;
    const orderIds = event.arguments.data.itemIds;
    // const username = event["identity"]["claims"]["cognito:username"]
   
    // await DocumentClient.transactWrite({
    //     TransactItems: [
    //         {
    //             Delete: {
    //                 TableName: CONTRACTS_TABLE_NAME,
    //                 Key: { contractId: id, }
    //             }
    //         },
    //         {
    //             Update: {
    //                 TableName: CONTRACT_ITEMS_TABLE_NAME,
    //                 Item: revisedContractItems,
    //             }
    //         },
    //         {
    //             Update: {
    //                 TableName: CONTRACT_JOB_COSTS_TABLE_NAME,
    //                 Item: revisedContractJobCosts,
    //             }
    //         },
    //         {
    //             Update: {
    //                 TableName: CONTRACT_TERMS_TABLE_NAME,
    //                 Item: revisedContractTerms,
    //             }
    //         },
    //     ]
    // }).promise();
    // const ids = JSON.parse(osrderIds.toString());

    // chunkArray is a local convenience function. It takes an array and returns
    // a generator function. The generator function yields every N items.
    const itemChunks = chunkArray(orderIds, 25);

    // For every chunk of 25 movies, make one BatchWrite request.
    for (const chunk of itemChunks) {
        const deleteRequests = chunk.map((id) => ({
            DeleteRequest: {
                Key: {
                    orderId: orderId,
                    itemId: id,
                },
            }
        }))
        const command = new BatchWriteCommand({
            RequestItems: {
            // An existing table is required. A composite key of 'title' and 'year' is recommended
            // to account for duplicate titles.
                "OrderItermsTable": deleteRequests
                // ["OrderItermsTable"]: deleteRequests
            // ["BatchWriteContractItermsTable"]: deleteRequests
        }
        });
        await docClient.send(command);
    };

    const deleteCommand = new DeleteCommand({
        TableName: "OrdersTable",
        Key: {
        Flavor: orderId,
        },
    });

    const response = await docClient.send(deleteCommand);
    console.log(response);
    return response;
}