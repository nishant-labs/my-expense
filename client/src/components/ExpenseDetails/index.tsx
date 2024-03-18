import { FC } from 'react';
import { IExpenseSummaryTransactionCategory } from '../../state/transactions/types';
import { GridBase } from '../GridBase';
import { defaultExpenseDetailsColDefs, expenseDetailsColDefs } from '../../constants/grid/expenseDetailsGridColDefs';

interface ExpenseDetailsProps {
	transactionList: Array<IExpenseSummaryTransactionCategory>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ transactionList }) => (
	<GridBase
		rowHeight={25}
		styles={{ height: '100%' }}
		defaultColDef={defaultExpenseDetailsColDefs}
		colDefs={expenseDetailsColDefs}
		rowData={transactionList}
		pagination={false}
	/>
);
