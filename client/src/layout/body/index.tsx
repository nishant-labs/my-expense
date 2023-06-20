import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TransactionHighlights } from './components/TransactionHighlights';

import { incomeState } from '../../state/Income';
import { MONTH_NAMES } from '../../constants';

export const Body = () => {
	const [key, setKey] = useState(MONTH_NAMES[0].toLowerCase());
	const monthIndex = new Date().getMonth();
	return (
		<Container className="mt-4" fluid>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="mb-3"
			>
				{MONTH_NAMES.map((month, index) => (
					<Tab
						key={month.toLowerCase()}
						eventKey={month.toLowerCase()}
						title={month}
						disabled={index > monthIndex}
					>
						<Alert variant="primary">
							You have saved &pound;200 this month
						</Alert>
						<Row>
							<Col>
								<TransactionHighlights
									title="Money In Account"
									incomeState={incomeState}
								/>
							</Col>
							<Col>
								<TransactionHighlights
									title="Debit Card Expense"
									incomeState={incomeState}
								/>
							</Col>
							<Col>
								<TransactionHighlights
									title="Credit Card Expense"
									incomeState={incomeState}
								/>
							</Col>
						</Row>
					</Tab>
				))}
			</Tabs>
		</Container>
	);
};
