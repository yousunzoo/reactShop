import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';
import banner from '../img/main-banner.jpeg';
import productData from '../data';
function Main() {
	let [data, setData] = useState(productData);
	return (
		<>
			<div className='main-bg' style={{ backgroundImage: 'url(' + banner + ')' }}></div>
			<Container>
				<Row>
					{data.map((item) => {
						return <Card key={item.id} title={item.title} content={item.content} price={item.price} imgUrl={`public/assets/product_0${item.id + 1}.jpeg`} />;
					})}
				</Row>
			</Container>
		</>
	);
}

export default Main;
