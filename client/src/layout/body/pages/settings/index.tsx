import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { TransactionSource } from './components/TransactionSource';
import { AsyncDataLoader } from '../../components/AsyncDataLoader';
import { TransactionGroup } from './components/TransactionGroup';

export const Settings = () => {
	return (
		<div style={{ height: 'calc(100vh - 150px)' }}>
			<Tab.Container defaultActiveKey="source">
				<Row className="h-100">
					<Col sm={2} className="border-end">
						<Nav variant="tabs" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="source">Source Settings</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="group">Group Settings</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={10}>
						<Tab.Content>
							<Tab.Pane eventKey="source">
								<AsyncDataLoader errorFallback="Something went wrong!">
									<TransactionSource />
								</AsyncDataLoader>
							</Tab.Pane>
							<Tab.Pane eventKey="group">
								<AsyncDataLoader errorFallback="Something went wrong!">
									<TransactionGroup />
								</AsyncDataLoader>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};
