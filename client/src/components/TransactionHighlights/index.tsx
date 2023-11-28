import { FC } from 'react';

import Card from 'react-bootstrap/Card';
import { ExpenseDetails } from '../ExpenseDetails';
import { ITransactionsEnhanced } from '../../state/transactions/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

interface TransactionHighlightsProps {
	title: string;
	total: number;
	transactions: Array<ITransactionsEnhanced>;
}

export const TransactionHighlights: FC<TransactionHighlightsProps> = ({ title, total, transactions }) => {
	const formattedTotal = formatNumberAsCurrency(total, false);
	return (
		<Card className="text-center">
			<Card.Body>
				<Card.Title className="text-black-50">{title}</Card.Title>
				<Card.Body className="p-1 display-6">{formattedTotal}</Card.Body>
				<ExpenseDetails transactionList={transactions} />
			</Card.Body>
		</Card>
	);
};
