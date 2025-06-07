import { FC } from 'react';
import { IExpenseSummaryTransactionCategory } from '../../hooks/useTransactions/types';
import { GridBase } from '../GridBase';
import { defaultExpenseDetailsColDefs, expenseDetailsColDefs } from '../../constants/grid/expenseDetailsGridColDefs';

interface ExpenseDetailsProps {
	transactionList: Array<IExpenseSummaryTransactionCategory>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ transactionList }) => (
	<GridBase
		rowHeight={25}
		styles={{ height: '212px' }}
		defaultColDef={defaultExpenseDetailsColDefs}
		colDefs={expenseDetailsColDefs}
		rowData={transactionList}
		pagination={false}
	/>
);
