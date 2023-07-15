import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TransactionHighlights } from '../../components/TransactionHighlights';

import { MONTH_NAMES } from '../../../../constants';

export const Home = () => {
	const [key, setKey] = useState(MONTH_NAMES[0].toLowerCase());
	const monthIndex = new Date().getMonth();
	return (
		<>
			<h2>Monthly Expense Report</h2>
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
								<TransactionHighlights title="Money In Account" />
							</Col>
							<Col>
								<TransactionHighlights title="Debit Card Expense" />
							</Col>
							<Col>
								<TransactionHighlights title="Credit Card Expense" />
							</Col>
						</Row>
					</Tab>
				))}
			</Tabs>
		</>
	);
};
