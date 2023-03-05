import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import SiteNavbar from './components/SiteNavbar';
import productData from './data';
import banner from './img/main-banner.jpeg';
function App() {
	let [data, setData] = useState(productData);
	return (
		<div className='App'>
			<SiteNavbar />
			<div className='main-bg' style={{ backgroundImage: 'url(' + banner + ')' }}></div>
			<Container>
				<Row>
					{data.map((item) => {
						return <Card key={item.id} title={item.title} content={item.content} price={item.price} imgUrl={`public/assets/product_0${item.id + 1}.jpeg`} />;
					})}
				</Row>
			</Container>
		</div>
	);
}

export default App;
