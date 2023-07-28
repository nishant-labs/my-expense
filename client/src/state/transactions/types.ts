import { SerializableParam } from 'recoil';

export interface ITransactionsPayload {
	date: Date;
	transactionSource: string;
	amount: number;
}

export interface ITransactions extends ITransactionsPayload {
	id?: string;
	accountType: string;
}

export interface ITransactionsEnhanced extends ITransactions {
	groupName?: string;
	sourceName?: string;
}

export interface ITransactionsState {
	[monthYear: string]: Array<ITransactions>;
}

export interface ISelectorPayload {
	[p: string]: SerializableParam;
	year: string;
	month: string;
}

export interface IExpenseSummaryTransaction {
	title: string;
	transactions: Array<ITransactionsEnhanced>;
	total: number;
}
