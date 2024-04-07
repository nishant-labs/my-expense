import { useMemo } from 'react';
import { UseQueryResult, useQueryClient } from '@tanstack/react-query';
import { useFetchTransactionsByMonth } from '../../api/TransactionsApi';
import { ITransactions, ITransactionsEnhanced } from './types';
import { ApiError } from '../../api/types';
import { QUERY_KEYS } from '../../constants/queryMapping';
import { ITransactionSource } from '../useSourceSettings/types';
import { ITransactionCategory } from '../useCategorySettings/types';

export function useTransactions(
	year: string,
	month: string,
	accountType?: string,
): [Array<ITransactionsEnhanced>, UseQueryResult<ITransactions[], ApiError>] {
	const queryClient = useQueryClient();
	const transactionQueryResult = useFetchTransactionsByMonth(year, month, accountType);

	const sourceList = queryClient.getQueryData<Array<ITransactionSource>>(QUERY_KEYS.SOURCE_SETTINGS);
	const categories = queryClient.getQueryData<Array<ITransactionCategory>>(QUERY_KEYS.CATEGORY_SETTINGS);

	const transactions = useMemo<Array<ITransactionsEnhanced>>(() => {
		if (!transactionQueryResult.data) {
			return [];
		}
		return transactionQueryResult.data?.map((transaction) => {
			const category = categories?.find((value) =>
				value.matchers.some((match) => {
					const matchParts = match.split(' ');
					const contains = matchParts.filter((part) => transaction.transactionSource.includes(part));
					return matchParts.length === contains.length;
				}),
			);
			const source = sourceList?.find((source) => source.id === category?.sourceId);

			return {
				...transaction,
				category,
				source,
			};
		});
	}, [categories, sourceList, transactionQueryResult.data]);

	return [transactions, transactionQueryResult];
}
