import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
function SiteNavbar() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>Electronic Shop</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>Cart</Nav.Link>
					<Nav.Link href='#pricing'>Login</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default SiteNavbar;
