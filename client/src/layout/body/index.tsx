import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const Body = () => {
	return (
		<Container className="p-4 h-100" fluid>
			<Suspense fallback={<Spinner animation="border" />}>
				<Outlet />
			</Suspense>
		</Container>
	);
};

export default Body;
