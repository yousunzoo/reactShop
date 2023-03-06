import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function SiteNavbar() {
	let navigate = useNavigate();
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand onClick={() => navigate('/')}>Electronic Shop</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
					<Nav.Link
						onClick={() => {
							navigate('/about');
						}}>
						About
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							navigate('/login');
						}}>
						Login
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default SiteNavbar;
