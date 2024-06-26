import { FC, useCallback, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { ExpenseDetails } from '../ExpenseDetails';
import { IExpenseSummaryTransactionCategory } from '../../hooks/useTransactions/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';
import { SummaryTile } from '../SummaryTile';

interface TransactionHighlightsProps {
	title: string;
	total: number;
	transactions: Array<IExpenseSummaryTransactionCategory>;
}

export const TransactionHighlights: FC<TransactionHighlightsProps> = ({ title, total, transactions }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = useCallback(() => {
		setIsFlipped(!isFlipped);
	}, [isFlipped]);

	const formattedTotal = formatNumberAsCurrency(total, false);

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<SummaryTile body={{ title, text: formattedTotal }} actionText="Breakdown" onClick={handleClick} />
			<SummaryTile actionText="Summary" onClick={handleClick}>
				<ExpenseDetails transactionList={transactions} />
			</SummaryTile>
		</ReactCardFlip>
	);
};
