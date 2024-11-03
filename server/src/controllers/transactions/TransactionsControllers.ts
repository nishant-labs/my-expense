import { FilterQuery } from 'mongoose';
import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { TransactionTable } from '../../database/index.js';

interface TransactionPayloadItem {
	date: string;
	transactionSource: string;
	amount: number;
}

const getTransactionsHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);

	const startDate = new Date(`${requestData.pathParams?.monthAndYear}-01`);
	const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

	const searchQuery: FilterQuery<unknown> = {
		date: {
			$gte: startDate,
			$lte: lastDay,
		},
	};

	if (requestData.pathParams.accountType !== 'consolidated') {
		searchQuery.accountType = requestData.pathParams.accountType;
	}

	const response = await TransactionTable.findByFilter(searchQuery);

	return {
		data: response.map((transaction) => ({
			id: transaction['_id'],
			date: (transaction.date as unknown as Date)?.toISOString(),
			accountType: transaction.accountType,
			transactionSource: transaction.transactionOf,
			amount: transaction.amount,
		})),
		status: 200,
	};
};

const insertTransactionHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const {
		pathParams: { accountType },
		body,
	} = requestData;

	await getDatabaseConnection!(requestData);

	const dbData = (body as Array<TransactionPayloadItem>).map(({ amount, date, transactionSource }) => ({
		accountType,
		transactionOf: transactionSource,
		date,
		amount,
	}));

	await TransactionTable.create(dbData);
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
