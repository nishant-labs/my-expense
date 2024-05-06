import { FC, useEffect, useMemo, useState } from 'react';
import { Row, Col, Alert, Badge } from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';
import { TransactionHighlights } from '../../../components/TransactionHighlights';
import { useTransactions } from '../../../hooks/useTransactions';
import { IExpenseSummaryTiles } from '../../../hooks/useTransactions/types';
import { groupTransactionsByTiles, totalReducer } from '../../../utils/TransactionUtils';
import { formatNumberAsCurrency } from '../../../utils/NumberUtils';
import { Orderable } from '../../../components/Orderable/Orderable';

interface ExpenseSummaryProps {
	month: string;
	year: string;
}

export const ExpenseSummary: FC<ExpenseSummaryProps> = ({ year, month }) => {
	const [isReorderDisabled, setIsReorderDisabled] = useState(true);
	const [transactions] = useTransactions(year, month);
	const [transactionCategories, setTransactionCategories] = useState<Array<{ id: string; data: IExpenseSummaryTiles }>>(
		[],
	);

	useEffect(() => {
		if (transactions) {
			setTransactionCategories(
				groupTransactionsByTiles(transactions).map((item, index) => ({
					id: 'item' + index,
					data: item,
				})),
			);
		}
	}, [transactions]);

	const savedAmount = useMemo(() => {
		const accountOnlyTransaction = transactionCategories.filter(({ data }) => data.isAccount);
		const { credit, debit } = Object.groupBy(accountOnlyTransaction, ({ data }) =>
			data.isExpense ? 'debit' : 'credit',
		);
		if (!credit || !debit) {
			return 0;
		}
		const creditTotal = totalReducer(credit.map(({ data: { transactions } }) => totalReducer(transactions)));
		const debitTotal = totalReducer(debit.map(({ data: { transactions } }) => totalReducer(transactions)));
		return creditTotal - Math.abs(debitTotal);
	}, [transactionCategories]);

	if (transactions.length === 0) {
		return <Alert variant="info">Transaction Missing, please upload for the month</Alert>;
	}

	const credit = (
		<span>
			<strong>{formatNumberAsCurrency(savedAmount)}</strong> saved
		</span>
	);
	const deficit = (
		<span>
			Spent <strong>{formatNumberAsCurrency(savedAmount)}</strong> more than total income
		</span>
	);

	return (
		<>
			<Row className="mb-3">
				<Col>
					<h5>
						<Badge bg={savedAmount > 0 ? 'info' : 'warning'}>{savedAmount > 0 ? credit : deficit}</Badge>
					</h5>
				</Col>
				<Col>
					<Gear
						style={{ float: 'right', cursor: 'pointer' }}
						onClick={() => {
							setIsReorderDisabled((toggle) => !toggle);
						}}
					/>
				</Col>
			</Row>
			<div>
				{transactionCategories.length > 0 && (
					<Orderable
						isDragDisabled={isReorderDisabled}
						isDropDisabled={isReorderDisabled}
						items={transactionCategories}
						onDragEnd={(updatedList: Array<{ id: string; data: IExpenseSummaryTiles }>) => {
							setTransactionCategories(updatedList);
						}}
					>
						{({ title, total, transactions }) => (
							<TransactionHighlights title={title} total={total} transactions={transactions} />
						)}
					</Orderable>
				)}
			</div>
		</>
	);
};
