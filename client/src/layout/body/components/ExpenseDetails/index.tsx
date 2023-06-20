import ListGroup from 'react-bootstrap/ListGroup';
import { ExpenseCategory } from './ExpenseCategory';
import { FC } from 'react';
import { IExpenseCategory } from '../../../../state/expense-details.types';

interface ExpenseDetailsProps {
	list: Array<IExpenseCategory>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ list }) => (
	<ListGroup variant="flush">
		{list.map((listItem, index) => (
			<ExpenseCategory key={`ec-${index}`} {...listItem} />
		))}
	</ListGroup>
);
