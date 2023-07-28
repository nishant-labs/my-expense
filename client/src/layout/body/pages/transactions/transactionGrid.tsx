import { FC, useEffect, useMemo } from 'react';
import { transactionColDefs } from '../../../../constants/grid/transaction-grid-col-defs';
import { GridBase } from '../../components/GridBase';
import { useTransactions } from '../../../../hooks/useTransactions';

interface TransactionGridByMonthProps {
	month: string;
	year: string;
}

export const TransactionGridByMonth: FC<TransactionGridByMonthProps> = ({
	month,
	year,
}) => {
	const { transactions, fetchTransactions, firstLoadPendingRef } = useTransactions(year, month);

	useEffect(() => {
		if (!firstLoadPendingRef.current) {
			fetchTransactions();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [year, month]);

	const colDefs = useMemo(() => transactionColDefs(), []);
	return <GridBase colDefs={colDefs} rowData={transactions} />;
};
