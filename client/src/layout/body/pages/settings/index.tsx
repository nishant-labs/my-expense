import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { AsyncDataLoader } from '../../components/AsyncDataLoader';
import { settingsComponentMapping } from './componentMapping';

export const Settings = () => {
	return (
		<div style={{ height: 'calc(100vh - 150px)' }}>
			<Tab.Container defaultActiveKey="source">
				<Row className="h-100">
					<Col sm={2} className="border-end">
						<Nav variant="tabs" className="flex-column">
							{settingsComponentMapping.map(({ eventKey, title }, index) => (
								<Nav.Item key={`nav-menu-${index}`}>
									<Nav.Link eventKey={eventKey}>{title}</Nav.Link>
								</Nav.Item>
							))}
						</Nav>
					</Col>
					<Col sm={10}>
						<Tab.Content>
							{settingsComponentMapping.map(
								({ eventKey, component }, index) => (
									<Tab.Pane
										key={`nav-content-${index}`}
										eventKey={eventKey}
										unmountOnExit
										mountOnEnter
									>
										<AsyncDataLoader errorFallback="Something went wrong!">
											{component}
										</AsyncDataLoader>
									</Tab.Pane>
								)
							)}
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};
