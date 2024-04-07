import { FC, useMemo } from 'react';
import { defaultTransactionColDefs, transactionColDefs } from '../../constants/grid/transactionGridColDefs';
import { GridBase } from '../../components/GridBase';
import { useTransactions } from '../../hooks/useTransactions';

interface TransactionGridByMonthProps {
	month: string;
	year: string;
}

export const TransactionGridByMonth: FC<TransactionGridByMonthProps> = ({ month, year }) => {
	const [transactions] = useTransactions(year, month);

	const colDefs = useMemo(() => transactionColDefs(), []);

	return <GridBase defaultColDef={defaultTransactionColDefs} colDefs={colDefs} rowData={transactions} />;
};
