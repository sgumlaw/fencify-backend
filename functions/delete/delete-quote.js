import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchWriteCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { chunkArray } from "../../libs/utils/util-array";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
module.exports.handler = async (event) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    const quoteId = event.arguments.quoteId;
    const quoteIds = event.arguments.data.itemIds;
    const itemChunks = chunkArray(quoteIds, 25);
    for (const chunk of itemChunks) {
        const deleteRequests = chunk.map((id) => ({
            DeleteRequest: {
                Key: {
                    quoteId: quoteId,
                    itemId: id,
                },
            }
        }))
        const command = new BatchWriteCommand({
            RequestItems: {
            // An existing table is required. A composite key of 'title' and 'year' is recommended
            // to account for duplicate titles.
                "QuoteItermsTable": deleteRequests
                // ["QuoteItermsTable"]: deleteRequests
            // ["BatchWriteContractItermsTable"]: deleteRequests
        }
        });
        await docClient.send(command);
    };

    const deleteCommand = new DeleteCommand({
        TableName: "QuotesTable",
        Key: {
            quoteId: quoteId,
        },
    });

    const response = await docClient.send(deleteCommand);
    console.log(response);
    return response;
}