import { ITransactionsPayload, ITransactionsEnhanced } from '../hooks/useTransactions/types';
import { getNewFormattedDate } from './DateUtils';

export const totalReducer = (transactions: Array<{ amount: number } | number> = []): number =>
	transactions.reduce<number>((sum, trans) => {
		sum += typeof trans === 'number' ? trans : trans.amount;
		return sum;
	}, 0);

export const transformCSVToTransactionPayload = (csvData: Array<Array<string>>): Array<ITransactionsPayload> =>
	csvData.map((curValue) => ({
		date: getNewFormattedDate(curValue[0]),
		transactionSource: curValue[1],
		amount: Number(curValue[2].replaceAll(',', '')),
	}));

export const groupTransactionsByTiles = (transactions: ITransactionsEnhanced[]) => {
	const sourceMap = Object.groupBy(transactions, (trans) => trans.source?.name ?? 'others');

	// Remove transaction which are not mapped, need change in implementation
	delete sourceMap['others'];

	return Object.keys(sourceMap).map((title) => {
		const isExpense = sourceMap[title]?.[0].source?.isExpense;
		const isAccount = sourceMap[title]?.[0].accountType === 'account';

		const categoryMap = Object.groupBy(sourceMap[title] ?? [], (trans) => trans.category?.name ?? 'misc');
		const transactions = Object.keys(categoryMap).map((categoryName) => {
			const total = totalReducer(categoryMap[categoryName]);
			return { categoryName, amount: total, budget: categoryMap[categoryName]?.[0].category?.budget };
		});

		const total = totalReducer(transactions);
		return {
			title,
			isExpense,
			isAccount,
			total,
			transactions,
		};
	});
};
