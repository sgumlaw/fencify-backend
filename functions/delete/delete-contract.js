import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchWriteCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { chunkArray } from "../../libs/utils/util-array";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const contractId = event.arguments.contractId;
    const itemIds = event.arguments.data.itemIds;
    const costIds = event.arguments.data.costIds;
    const termIds = event.arguments.data.termIds;

    const itemChunks = chunkArray(itemIds, 25);
    for (const chunk of itemChunks) {
        const deleteRequests = chunk.map((id) => ({
            DeleteRequest: {
                Key: {
                    contractId: contractId,
                    itemId: id,
                },
            }
        }))
        const command = new BatchWriteCommand({
            RequestItems: {
            // An existing table is required. A composite key of 'title' and 'year' is recommended
            // to account for duplicate titles.
                "ContractItermsTable": deleteRequests
                // ["OrderItermsTable"]: deleteRequests
            // ["BatchWriteContractItermsTable"]: deleteRequests
        }
        });
        await docClient.send(command);
    };

    const costChunks = chunkArray(costIds, 25);
    for (const chunk of costChunks) {
        const deleteRequests = chunk.map((id) => ({
            DeleteRequest: {
                Key: {
                    contractId: contractId,
                    costId: id,
                },
            }
        }))
        const command = new BatchWriteCommand({
            RequestItems: {
            // An existing table is required. A composite key of 'title' and 'year' is recommended
            // to account for duplicate titles.
                "ContractJobCostsTable": deleteRequests
                // ["OrderItermsTable"]: deleteRequests
            // ["BatchWriteContractItermsTable"]: deleteRequests
        }
        });
        await docClient.send(command);
    };

    const termChunks = chunkArray(termIds, 25);
    for (const chunk of termChunks) {
        const deleteRequests = chunk.map((id) => ({
            DeleteRequest: {
                Key: {
                    contractId: contractId,
                    termId: id,
                },
            }
        }))
        const command = new BatchWriteCommand({
            RequestItems: {
            // An existing table is required. A composite key of 'title' and 'year' is recommended
            // to account for duplicate titles.
                "ContractJobCostsTable": deleteRequests
                // ["OrderItermsTable"]: deleteRequests
            // ["BatchWriteContractItermsTable"]: deleteRequests
        }
        });
        await docClient.send(command);
    };

    const deleteCommand = new DeleteCommand({
        TableName: "ContractsTable",
        Key: {
            contractId: contractId,
        },
    });

    const response = await docClient.send(deleteCommand);
    console.log(response);
    return response;
}