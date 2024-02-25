import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
	DeleteCommand,
	DynamoDBDocumentClient,
	PutCommand,
	QueryCommand,
	QueryCommandInput,
	ScanCommand,
	UpdateCommand,
} from '@aws-sdk/lib-dynamodb';
import { AbstractDBActions } from './AbstractDBActions.js';
import { generateExpressionAttribute } from '../../utils/ObjectUtils.js';

export class BaseDynamoDBAction extends AbstractDBActions {
	docClient: DynamoDBDocumentClient;

	constructor(region: string) {
		super();
		const client = new DynamoDBClient({ region });
		this.docClient = DynamoDBDocumentClient.from(client);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private execute<T>(command: any): Promise<T> {
		const response = this.docClient.send(command);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return response;
	}

	create<PutCommandOutput>(table: string, payload?: unknown): Promise<PutCommandOutput> {
		const command = new PutCommand({
			TableName: table,
			Item: payload as Record<string, unknown>,
		});

		return this.execute(command);
	}

	updateById<UpdateCommandOutput>(
		table: string,
		id: Record<string, unknown>,
		item: object,
	): Promise<UpdateCommandOutput> {
		const itemKeys = Object.keys(item as object);

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

	findAll<T>(table: string): Promise<T> {
		const command = new ScanCommand({
			TableName: table,
		});

		return this.execute(command);
	}

	findById<T>(table: string, id: unknown): Promise<T> {
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

	findByFilter<T>(table: string, filter: Partial<Omit<QueryCommandInput, 'TableName'>>): Promise<T> {
		const command = new QueryCommand({
			TableName: table,
			ConsistentRead: true,
			...filter,
		});

		return this.execute(command);
	}

	deleteById<T>(table: string, id: unknown): Promise<T> {
		const command = new DeleteCommand({
			TableName: table,
			Key: {
				ID: id,
			},
		});

		return this.execute(command);
	}
}
