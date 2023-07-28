import { handleGetCall, handlePostCall } from './ApiBase';
import { ITransactions, ITransactionsPayload } from '../state/transactions/types';

export const fetchTransactionsByMonth = async (
	year: string,
	month: string,
	accountType?: string
) =>
	await handleGetCall<Array<ITransactions>>(
		`/api/transactions/${accountType ?? 'consolidated'}/${year}-${month}`
	);

export const insertTransactions = async (
	accountType: string,
	payload: Array<ITransactionsPayload>
) => await handlePostCall<string>(`/api/transactions/${accountType}`, payload);
