const command = new BatchGetItemCommand({
    RequestItems: {
        OrdersTable: {
            "Keys": [
                {
                    "orderId": { "S": "Amazon DynamoDB" }
                },

            ],
        },
        OrderItemsTable: {
            "Keys": [
                {
                    "orderId": { "S": "Amazon DynamoDB" },
                    "itemId": { "S": "Amazon DynamoDB" }
                },
            ]
        }
    }
});
const writeCommand = new BatchWriteItemCommand({
    RequestItems: {
        OrdersTable: {
            DeleteRequest: {
                "Keys": [
                    {
                        "orderId": { "S": "Amazon DynamoDB" }
                    },

                ],
            }
        },
        OrderItemsTable: {
            DeleteRequest: {
                "Keys": [
                    {
                        "orderId": { "S": "Amazon DynamoDB" },
                        "itemId": { "S": "Amazon DynamoDB" },
                    },
                ]
            }
        }
    }
});