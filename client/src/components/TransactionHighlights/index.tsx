import { FC, useCallback, useState } from 'react';

import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import { ExpenseDetails } from '../ExpenseDetails';
import { ITransactionsEnhanced } from '../../state/transactions/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

interface TransactionHighlightsProps {
	title: string;
	total: number;
	transactions: Array<ITransactionsEnhanced>;
}

export const TransactionHighlights: FC<TransactionHighlightsProps> = ({ title, total, transactions }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = useCallback(() => {
		setIsFlipped(!isFlipped);
	}, [isFlipped]);

	const formattedTotal = formatNumberAsCurrency(total, false);

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<div style={{ height: '200px', boxShadow: '#3399F3 5px 5px 5px', cursor: 'pointer' }} onClick={handleClick}>
				<Card className="text-center h-100">
					<Card.Body>
						<Card.Title className="text-black-50">{title}</Card.Title>
						<Card.Text className="p-1 display-6">{formattedTotal}</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div style={{ height: '200px', boxShadow: '#3399F3 5px 5px 5px', cursor: 'pointer' }} onClick={handleClick}>
				<ExpenseDetails transactionList={transactions} />
			</div>
		</ReactCardFlip>
	);
};
