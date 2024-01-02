import { FC } from 'react';
import { ITransactionsEnhanced } from '../../state/transactions/types';
import { GridBase } from '../GridBase';
import { defaultExpenseDetailsColDefs, expenseDetailsColDefs } from '../../constants/grid/expenseDetailsGridColDefs';

interface ExpenseDetailsProps {
	transactionList: Array<ITransactionsEnhanced>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ transactionList }) => (
	<GridBase
		styles={{ height: '100%' }}
		defaultColDef={defaultExpenseDetailsColDefs}
		colDefs={expenseDetailsColDefs}
		rowData={transactionList}
		pagination={false}
	/>
);
