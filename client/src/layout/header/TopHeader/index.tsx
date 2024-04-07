import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const TopHeader = () => {
	return (
		<Navbar bg="primary" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">My Expense</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/manage">
							Transactions
						</Nav.Link>
						<Nav.Link as={NavLink} to="/summary">
							Year End Summary
						</Nav.Link>
						<NavDropdown title="Settings" id="basic-nav-dropdown">
							<NavDropdown.Item as={NavLink} to="/settings/source">
								Source
							</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/settings/categories">
								Categories
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
