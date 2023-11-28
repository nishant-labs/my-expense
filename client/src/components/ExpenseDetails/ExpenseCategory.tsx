import { FC } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { ITransactionsEnhanced } from '../../state/transactions/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

interface ExpenseCategoryProps {
	className?: string;
	transaction: ITransactionsEnhanced;
}

export const ExpenseCategory: FC<ExpenseCategoryProps> = ({ transaction }) => {
	const amount = formatNumberAsCurrency(transaction.amount, false);
	return (
		<ListGroup.Item>
			<Stack direction="horizontal">
				<div>{transaction.groupName}</div>
				<div className="ms-auto">{amount}</div>
			</Stack>
		</ListGroup.Item>
	);
};
