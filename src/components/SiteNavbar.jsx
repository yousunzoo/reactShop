import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
function SiteNavbar() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='/'>Electronic Shop</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/cart'>Cart</Nav.Link>
					<Nav.Link href='/login'>Login</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default SiteNavbar;
