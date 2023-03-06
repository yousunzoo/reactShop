import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';
import banner from '../img/main-banner.jpeg';
import productData from '../data';
function Main() {
	let [data] = useState(productData);
	return (
		<>
			<div className='main-bg' style={{ backgroundImage: 'url(' + banner + ')' }}></div>
			<Container>
				<Row>
					{data.map((item) => {
						return <Card key={item.id} {...item} />;
					})}
				</Row>
			</Container>
		</>
	);
}

export default Main;
