import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const Body = () => {
	return (
		<Container className="p-4 h-100" fluid>
			<Outlet />
		</Container>
	);
};

export default Body;
