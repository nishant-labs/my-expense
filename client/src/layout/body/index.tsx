import Container from 'react-bootstrap/Container';
import { AppRouter } from './router';

const Body = () => {
	return (
		<Container className="mt-4" fluid>
			<AppRouter />
		</Container>
	);
};

export default Body;
