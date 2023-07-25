import { FC } from 'react';

import Card from 'react-bootstrap/Card';
import { ExpenseDetails } from '../../components/ExpenseDetails';

interface TransactionHighlightsProps {
	title: string;
	total: number;
	transactions: Array<unknown>;
}

export const TransactionHighlights: FC<TransactionHighlightsProps> = ({
	title,
	total,
}) => {
	return (
		<Card className="text-center">
			<Card.Body>
				<Card.Title className="text-black-50">{title}</Card.Title>
				<Card.Body className="p-1 display-6">&pound;{total}</Card.Body>
				<ExpenseDetails list={[]} />
			</Card.Body>
		</Card>
	);
};
