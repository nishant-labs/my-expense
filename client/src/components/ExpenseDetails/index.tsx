import ListGroup from 'react-bootstrap/ListGroup';
import { ExpenseCategory } from './ExpenseCategory';
import { FC } from 'react';
import { ITransactionsEnhanced } from '../../state/transactions/types';

interface ExpenseDetailsProps {
	transactionList: Array<ITransactionsEnhanced>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ transactionList }) => (
	<ListGroup variant="flush">
		{transactionList.map((transaction, index) => (
			<ExpenseCategory key={`ec-${index}`} transaction={transaction} />
		))}
	</ListGroup>
);
