import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ExpenseDetails } from '../ExpenseDetails';

import { IncomeType } from '../../../../state/Income';
import { incomeCategories } from '../../../../constants/mapping';
import { IExpenseCategory } from '../../../../state/expense-details.types';

interface IncomeDetailsProps {
	incomeState: IncomeType;
}

export const IncomeDetails: FC<IncomeDetailsProps> = observer(
	({ incomeState }) => {
		const incomeList = useMemo(
			() =>
				incomeCategories.map((category, index) => {
					const income: IExpenseCategory = { label: category, amount: 0 };
					if (index === 0) {
						income.amount = incomeState.currentMonthSalary;
					}
					if (index === 1) {
						income.amount = incomeState.currentMontOtherIncome;
					}
					return income;
				}),
			[incomeState.currentMontOtherIncome, incomeState.currentMonthSalary]
		);
		return (
			<Card>
				<Card.Body>
					<Card.Title>Money In Account</Card.Title>
					<ExpenseDetails list={incomeList} />
					<Button variant="primary">Add Income</Button>
				</Card.Body>
			</Card>
		);
	}
);
