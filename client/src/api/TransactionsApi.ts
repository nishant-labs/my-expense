import { handleGetCall, handlePostCall } from './ApiBase';
import { ITransactions } from '../state/transactions/types';

export const fetchTransactionsByMonth = async (year: string, month: string) => {
	return await handleGetCall<Array<ITransactions>>(
		`/api/transactions/${year}-${month}`
	);
};

export const insertTransactions = async (payload: Array<ITransactions>) => {
	return await handlePostCall<string>('/api/transactions', payload);
};
