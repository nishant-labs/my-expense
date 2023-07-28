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
	const lastDay = new Date(
		startDate.getFullYear(),
		startDate.getMonth() + 1,
		0
	);

	const searchQuery: any = {
		date: {
			$gte: startDate,
			$lte: lastDay,
		},
	};

	if (requestData.pathParams.accountType !== 'consolidated') {
		searchQuery.accountType = requestData.pathParams.accountType;
	}

	const response = await TransactionModel.find(searchQuery);

	return {
		data: response.map((transaction) => ({
			id: transaction['_id'],
			date: transaction.date,
			accountType: transaction.accountType,
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
	const payload = requestData.body;
	const { accountType, transactions } = payload;

	await getDatabaseConnection!(requestData);

	const dbData = (transactions as Array<any>).map((row) => ({
		accountType,
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
