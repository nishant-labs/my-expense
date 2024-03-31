import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DeleteCommand, DynamoDBDocumentClient, PutCommand, QueryCommand, ScanCommand, UpdateCommand, } from '@aws-sdk/lib-dynamodb';
import { AbstractDBActions } from './AbstractDBActions.js';
import { generateExpressionAttribute } from '../../utils/ObjectUtils.js';
export class BaseDynamoDBAction extends AbstractDBActions {
    docClient;
    constructor(region) {
        super();
        const client = new DynamoDBClient({ region });
        this.docClient = DynamoDBDocumentClient.from(client);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    execute(command) {
        const response = this.docClient.send(command);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return response;
    }
    create(table, payload) {
        const command = new PutCommand({
            TableName: table,
            Item: payload,
        });
        return this.execute(command);
    }
    updateById(table, id, item) {
        const itemKeys = Object.keys(item);
        const command = new UpdateCommand({
            TableName: table,
            Key: id,
            ReturnValues: 'ALL_NEW',
            UpdateExpression: `SET ${itemKeys.map((_k, index) => `#field${index} = :value${index}`).join(', ')}`,
            ExpressionAttributeNames: generateExpressionAttribute('#field', itemKeys),
            ExpressionAttributeValues: generateExpressionAttribute(':value', itemKeys, item),
        });
        return this.execute(command);
    }
    findAll(table) {
        const command = new ScanCommand({
            TableName: table,
        });
        return this.execute(command);
    }
    findById(table, id) {
        const command = new QueryCommand({
            TableName: table,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
            ConsistentRead: true,
        });
        return this.execute(command);
    }
    findByFilter(table, filter) {
        const command = new QueryCommand({
            TableName: table,
            ConsistentRead: true,
            ...filter,
        });
        return this.execute(command);
    }
    deleteById(table, id) {
        const command = new DeleteCommand({
            TableName: table,
            Key: {
                ID: id,
            },
        });
        return this.execute(command);
    }
}
