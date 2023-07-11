import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ExpenseDetails } from '../ExpenseDetails';

export const IncomeDetails = () => {
	// const incomeList = useMemo(
	// 	() =>
	// 		incomeCategories.map((category, index) => {
	// 			const income: IExpenseCategory = { label: category, amount: 0 };
	// 			if (index === 0) {
	// 				income.amount = incomeState.currentMonthSalary;
	// 			}
	// 			if (index === 1) {
	// 				income.amount = incomeState.currentMontOtherIncome;
	// 			}
	// 			return income;
	// 		}),
	// 	[]
	// );
	return (
		<Card>
			<Card.Body>
				<Card.Title>Money In Account</Card.Title>
				<ExpenseDetails list={[]} />
				<Button variant="primary">Add Income</Button>
			</Card.Body>
		</Card>
	);
};
