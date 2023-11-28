import { FC, useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TransactionHighlights } from '../../../components/TransactionHighlights';
import { useTransactions } from '../../../hooks/useTransactions';
import { useSourceSettings } from '../../../hooks/useSourceSettings';
import { IExpenseSummaryTransaction } from '../../../state/transactions/types';
import { transformTransactionBySource, transformedTransactionAggregator } from '../../../utils/TransactionUtils';
import { formatNumberAsCurrency } from '../../../utils/NumberUtils';

interface ExpenseSummaryProps {
	month: string;
	year: string;
}

export const ExpenseSummary: FC<ExpenseSummaryProps> = ({ year, month }) => {
	const { transactions } = useTransactions(year, month);
	const { sourceList } = useSourceSettings();

	const income = useMemo<Array<IExpenseSummaryTransaction>>(() => {
		const incomeSource = sourceList.filter((source) => !source.isExpense);
		return transformTransactionBySource(transactions, incomeSource, 'account');
	}, [sourceList, transactions]);

	const accountExpense = useMemo<Array<IExpenseSummaryTransaction>>(() => {
		const expenseSource = sourceList.filter((source) => source.isExpense);
		return transformTransactionBySource(transactions, expenseSource, 'account');
	}, [sourceList, transactions]);

	const creditCardExpense = useMemo<Array<IExpenseSummaryTransaction>>(() => {
		const expenseSource = sourceList.filter((source) => source.isExpense);
		return transformTransactionBySource(transactions, expenseSource, 'creditCard');
	}, [sourceList, transactions]);

	const savedAmount = useMemo(() => {
		const totalIncome = transformedTransactionAggregator(income);
		const totalExpense = transformedTransactionAggregator(accountExpense);
		return totalIncome - totalExpense;
	}, [accountExpense, income]);

	if (transactions.length === 0) {
		return <Alert variant="warning">Transaction Missing, please upload for the month</Alert>;
	}

	const credit = `You have saved ${formatNumberAsCurrency(savedAmount)} this month`;
	const deficit = `You have spend ${formatNumberAsCurrency(savedAmount)} more than you income`;
	return (
		<>
			{
				<Alert variant={savedAmount > 0 ? 'primary' : 'warning'}>
					<h5>{savedAmount > 0 ? credit : deficit}</h5>
				</Alert>
			}
			<Row className="row-cols-3">
				{income.map(({ title, total, transactions }, index) => (
					<Col key={`income-${index}`}>
						<TransactionHighlights title={title} total={total} transactions={transactions} />
					</Col>
				))}

				{accountExpense.map(({ title, total, transactions }, index) => (
					<Col key={`acc-exp-${index}`}>
						<TransactionHighlights title={title} total={total} transactions={transactions} />
					</Col>
				))}

				{creditCardExpense.map(({ title, total, transactions }, index) => (
					<Col key={`card-exp-${index}`}>
						<TransactionHighlights title={title} total={total} transactions={transactions} />
					</Col>
				))}
			</Row>
		</>
	);
};