import { FC, useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TransactionHighlights } from '../../../components/TransactionHighlights';
import { useTransactions } from '../../../hooks/useTransactions';
import { IExpenseSummaryTiles } from '../../../hooks/useTransactions/types';
import { groupTransactionsByTiles, totalReducer } from '../../../utils/TransactionUtils';
import { formatNumberAsCurrency } from '../../../utils/NumberUtils';
import { Badge } from 'react-bootstrap';

interface ExpenseSummaryProps {
	month: string;
	year: string;
}

export const ExpenseSummary: FC<ExpenseSummaryProps> = ({ year, month }) => {
	const [transactions] = useTransactions(year, month);

	const transactionCategories = useMemo<Array<IExpenseSummaryTiles>>(
		() => groupTransactionsByTiles(transactions),
		[transactions],
	);

	const savedAmount = useMemo(() => {
		const accountOnlyTransaction = transactionCategories.filter((transactionCategory) => transactionCategory.isAccount);
		const { credit, debit } = Object.groupBy(accountOnlyTransaction, (trans) => (trans.isExpense ? 'debit' : 'credit'));
		if (!credit || !debit) {
			return 0;
		}
		const creditTotal = totalReducer(credit.map(({ transactions }) => totalReducer(transactions)));
		const debitTotal = totalReducer(debit.map(({ transactions }) => totalReducer(transactions)));
		return creditTotal - Math.abs(debitTotal);
	}, [transactionCategories]);

	if (transactions.length === 0) {
		return <Alert variant="info">Transaction Missing, please upload for the month</Alert>;
	}

	const credit = (
		<span>
			You have saved <strong>{formatNumberAsCurrency(savedAmount)}</strong>
		</span>
	);
	const deficit = (
		<span>
			You have spend <strong>{formatNumberAsCurrency(savedAmount)}</strong> more than you income
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
			</Row>
			<Row className="row-cols-3">
				{transactionCategories.map(({ title, total, transactions }, index) => (
					<Col className="mb-4" key={`income-${index}`}>
						<TransactionHighlights title={title} total={total} transactions={transactions} />
					</Col>
				))}
			</Row>
		</>
	);
};
