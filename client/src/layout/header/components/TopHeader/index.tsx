import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const TopHeader = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">My Home Expense</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/summary" className="nav-link">
							Year End Summary
						</NavLink>
						<NavLink to="/manage" className="nav-link">
							Transactions
						</NavLink>
						<NavLink to="/settings" className="nav-link">
							Settings
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
