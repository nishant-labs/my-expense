import { SerializableParam } from 'recoil';
import { ITransactionGroup } from '../settings/category/types';
import { ITransactionSource } from '../settings/source/types';

export interface ITransactionsPayload {
	date: Date;
	transactionSource: string;
	amount: number;
}

export interface ITransactions extends ITransactionsPayload {
	id?: string;
	accountType: 'account' | 'creditCard';
}

export interface ITransactionsEnhanced extends ITransactions {
	group?: ITransactionGroup;
	source?: ITransactionSource;
}

export interface ITransactionsState {
	[monthYear: string]: Array<ITransactions>;
}

export interface ISelectorPayload {
	[p: string]: SerializableParam;
	year: string;
	month: string;
}

export interface IExpenseSummaryTransactionGroup {
	groupName: string;
	budget?: number;
	amount: number;
}

export interface IExpenseSummaryTiles {
	title: string;
	isAccount: boolean;
	isExpense?: boolean;
	transactions: Array<IExpenseSummaryTransactionGroup>;
	total: number;
}
