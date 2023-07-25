import ListGroup from 'react-bootstrap/ListGroup';
import { ExpenseCategory } from './ExpenseCategory';
import { FC } from 'react';

interface ExpenseDetailsProps {
	list: Array<unknown>;
}

export const ExpenseDetails: FC<ExpenseDetailsProps> = ({ list }) => (
	<ListGroup variant="flush">
		{list.map((listItem, index) => (
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			<ExpenseCategory key={`ec-${index}`} {...listItem as any} />
		))}
	</ListGroup>
);
