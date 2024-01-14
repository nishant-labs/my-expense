import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { TransactionModel } from '../../database/models/TransactionsModel.js';

interface TransactionPayloadItem {
	date: string;
	transactionSource: string;
	amount: number;
}

interface InsertTransactionPayload {
	accountType: string;
	transactions: Array<TransactionPayloadItem>;
}

const getTransactionsHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);

	const startDate = new Date(`${requestData.pathParams.monthAndYear}-01`);
	const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

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
			date: transaction.date?.toISOString(),
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
