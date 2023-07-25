import { FC, useMemo } from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TransactionHighlights } from '../../../../components/TransactionHighlights';
import { useTransactions } from '../../../../../../hooks/useTransactions';
import { useSourceSettings } from '../../../../../../hooks/useSourceSettings';
import { ITransactionsEnhanced } from '../../../../../../state/transactions/types';

interface ExpenseSummaryProps {
	month: string;
	year: string;
}

export const ExpenseSummary: FC<ExpenseSummaryProps> = ({ year, month }) => {
	const { transactions } = useTransactions(year, month);
	const { sourceList } = useSourceSettings();

	const income = useMemo(() => {
		const incomeSource = sourceList.filter((source) => !source.isExpense);
		const incomeTransactions = transactions.filter((tran) =>
			incomeSource.some((income) => income.name === tran.sourceName)
		);

		const transactionBySource = incomeTransactions.reduce((res, curTran) => {
			(res[curTran.sourceName!] = res[curTran.sourceName!] || []).push(curTran);
			return res;
		}, {} as Record<string, Array<ITransactionsEnhanced>>);

		return Object.keys(transactionBySource).map((key) => ({
			title: key,
			transactions: transactionBySource[key],
			total: transactionBySource[key].reduce((res, tran) => {
				res = res + tran.amount;
				return res;
			}, 0),
		}));
	}, [sourceList, transactions]);

	const expense = useMemo(() => {
		const expenseSource = sourceList.filter((source) => source.isExpense);
		const expenseTransactions = transactions.filter((tran) =>
			expenseSource.some((expense) => expense.name === tran.sourceName)
		);

		const transactionBySource = expenseTransactions.reduce((res, curTran) => {
			(res[curTran.sourceName!] = res[curTran.sourceName!] || []).push(curTran);
			return res;
		}, {} as Record<string, Array<ITransactionsEnhanced>>);

		return Object.keys(transactionBySource).map((key) => ({
			title: key,
			transactions: transactionBySource[key],
			total: transactionBySource[key].reduce((res, tran) => {
				res = res + tran.amount;
				return res;
			}, 0),
		}));
	}, [sourceList, transactions]);

	return (
		<>
			<Alert variant="primary">You have saved &pound;200 this month</Alert>
			<Row>
				{income.map(({ title, total, transactions }) => (
					<Col>
						<TransactionHighlights
							title={title}
							total={total}
							transactions={transactions}
						/>
					</Col>
				))}

				{expense.map(({ title, total, transactions }) => (
					<Col>
						<TransactionHighlights
							title={title}
							total={total}
							transactions={transactions}
						/>
					</Col>
				))}

				{/* <Col>
					<TransactionHighlights title="Debit Card Expense" />
				</Col>
				<Col>
					<TransactionHighlights title="Credit Card Expense" />
				</Col> */}
			</Row>
		</>
	);
};
