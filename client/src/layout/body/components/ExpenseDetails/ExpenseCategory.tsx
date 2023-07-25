import { FC } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

interface ExpenseCategoryProps {
	className?: string;
	label: string,
	amount: number
}

export const ExpenseCategory: FC<ExpenseCategoryProps> = ({
	label,
	amount,
}) => (
	<ListGroup.Item>
		<Stack direction="horizontal">
			<div>{label}</div>
			<div className="ms-auto">{amount}</div>
		</Stack>
	</ListGroup.Item>
);
