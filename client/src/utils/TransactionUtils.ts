import { IExpenseSummaryTransaction, ITransactionsPayload, ITransactionsEnhanced } from '../state/transactions/types';
import { ITransactionSource } from '../state/settings/source/types';
import { getNewFormattedDate } from './DateUtils';

export const transformCSVToTransactionPayload = (csvData: Array<Array<string>>): Array<ITransactionsPayload> =>
	csvData.map((curValue) => ({
		date: getNewFormattedDate(curValue[0]),
		transactionSource: curValue[1],
		amount: Number(curValue[2].replaceAll(',', '')),
	}));

export const transformTransactionBySource = (
	transactions: ITransactionsEnhanced[],
	sourceList: ITransactionSource[],
	accountType: string,
) => {
	const filteredTransactions = transactions.filter(
		(tran) => tran.accountType === accountType && sourceList.some((source) => source.name === tran.sourceName),
	);

	const transactionBySource = filteredTransactions.reduce(
		(res, curTran) => {
			(res[curTran.sourceName!] = res[curTran.sourceName!] || []).push(curTran);
			return res;
		},
		{} as Record<string, Array<ITransactionsEnhanced>>,
	);

	return Object.keys(transactionBySource).map((key) => ({
		title: key,
		transactions: transactionBySource[key],
		total: transactionBySource[key].reduce((res, tran) => {
			res = res + tran.amount;
			return res;
		}, 0),
	}));
};

export const transformedTransactionAggregator = (transaction: Array<IExpenseSummaryTransaction>) =>
	transaction.reduce((res, inc) => {
		res += inc.total;
		return res;
	}, 0);
