import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fetchTransactionsByMonth } from '../api/TransactionsApi';
import { transactionByMonthSelector } from '../state/transactions/selectors';
import { ApiError } from '../api/types';
import { ITransactions, ITransactionsEnhanced } from '../state/transactions/types';
import { selectGroups } from '../state/settings/group/selector';
import { selectSources } from '../state/settings/source/selector';

export function useTransactions(year: string, month: string, accountType?: string) {
	const [transactionList, setTransactions] = useRecoilState(transactionByMonthSelector({ year, month }));
	const groupList = useRecoilValue(selectGroups);
	const sourceList = useRecoilValue(selectSources);

	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const firstLoadPendingRef = useRef(true);

	const fetchTransactions = useCallback(() => {
		setIsLoading(true);
		fetchTransactionsByMonth(year, month, accountType).then((res) => {
			if ((res as ApiError).error) {
				setError('Failed to retrieve transactions');
			} else {
				setTransactions(res as Array<ITransactions>);
			}
			firstLoadPendingRef.current = false;
			setIsLoading(false);
		});
	}, [year, month, accountType, setTransactions]);

	const transactions = useMemo<Array<ITransactionsEnhanced>>(
		() =>
			transactionList.map((transaction) => {
				const group = groupList.find((value) =>
					value.matchers.some((match) => {
						const matchParts = match.split(' ');
						const contains = matchParts.filter((part) => transaction.transactionSource.includes(part));
						return matchParts.length === contains.length;
					}),
				);
				const source = sourceList.find((source) => source.id === group?.sourceId);

				return {
					...transaction,
					group: group,
					source: source,
				};
			}),
		[groupList, sourceList, transactionList],
	);

	useEffect(() => {
		if (firstLoadPendingRef.current) {
			fetchTransactions();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		transactions,
		isLoading,
		error,
		fetchTransactions,
		firstLoadPendingRef,
	};
}
