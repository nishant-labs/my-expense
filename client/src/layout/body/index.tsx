import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const Body = () => {
	return (
		<Container className="mt-4" fluid>
			<Outlet />
		</Container>
	);
};

export default Body;
