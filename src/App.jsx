import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import banner from './img/main-banner.jpeg';
import product1 from './img/product_01.jpeg';
import product2 from './img/product_02.jpeg';
import product3 from './img/product_03.jpeg';
function App() {
	return (
		<div className='App'>
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
			<div className='main-bg' style={{ backgroundImage: 'url(' + banner + ')' }}></div>
			<Container>
				<Row>
					<Col>
						<img src={product1} width='80%' />
						<h4>유닉스 드라이어 UN-A1454</h4>
						<p>상품설명</p>
					</Col>
					<Col>
						<img src={product2} width='80%' />
						<h4>로지텍 무선 콤보 MK275</h4>
						<p>상품설명</p>
					</Col>
					<Col>
						<img src={product3} width='80%' />
						<h4>[로지텍코리아] 무선마우스 M280 블랙</h4>
						<p>상품설명</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
