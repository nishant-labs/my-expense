import {
	ControllerOptions,
	HttpRequest,
	RouteConfigItem,
} from 'node-rest-server';
import { TransactionModel } from '../database/models/TransactionsModel.js';

const getTransactionsHandler = async (
	requestData: HttpRequest,
	{ getDatabaseConnection }: ControllerOptions
) => {
	await getDatabaseConnection!(requestData);
	const startDate = new Date(`${requestData.pathParams.monthAndYear}-01`);
	var lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
	const response = await TransactionModel.find({
		date: {
			$gte: startDate,
			$lte: lastDay,
		},
	});

	return {
		data: response.map((transaction) => ({
			id: transaction['_id'],
			date: transaction.date,
			transactionSource: transaction.transactionOf,
			amount: transaction.amount,
		})),
		status: 200,
	};
};

const insertTransactionHandler = async (
	requestData: HttpRequest,
	{ getDatabaseConnection }: ControllerOptions
) => {
	const payload = requestData.body as Array<any>;
	await getDatabaseConnection!(requestData);
	const dbData = payload.map((row) => ({
		date: row.date,
		transactionOf: row.transactionSource,
		amount: row.amount,
	}));

	await TransactionModel.create(dbData);
	return {
		data: 'Successfully inserted data',
		status: 200,
	};
};

export const transactionsApiHandlers: Array<RouteConfigItem> = [
	{
		method: 'GET',
		controller: getTransactionsHandler,
	},
	{
		method: 'POST',
		controller: insertTransactionHandler,
	},
];
