import { FC } from 'react';
import { observer } from 'mobx-react';

import Card from 'react-bootstrap/Card';
import { ExpenseDetails } from '../../components/ExpenseDetails';

import { IncomeType } from '../../../../state/Income';

interface TransactionHighlightsProps {
	title: string;
	incomeState: IncomeType;
}

export const TransactionHighlights: FC<TransactionHighlightsProps> = observer(
	({ title }) => {
		
		return (
			<Card className='text-center'>
				<Card.Body>
					<Card.Title className='text-black-50'>{title}</Card.Title>
					<Card.Body className='p-1 display-6'>&pound;2000</Card.Body>
					<ExpenseDetails list={[]} />
				</Card.Body>
			</Card>
		);
	}
);
