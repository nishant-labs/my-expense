import { SerializableParam } from 'recoil';

export interface ITransactions {
	id?: string;
	date: Date;
	transactionSource: string;
	amount: number;
}

export interface ITransactionsEnhanced extends ITransactions {
	groupName?: string;
	sourceName?: string
}

export interface ITransactionsState {
	[monthYear: string]: Array<ITransactions>;
}

export interface ISelectorPayload {
	[p: string]: SerializableParam;
	year: string;
	month: string;
}
