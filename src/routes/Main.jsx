import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';
import banner from '../img/main-banner.jpeg';
import productData from '../data';
import axios from 'axios';

function Main() {
	let [data, setData] = useState(productData);
	let [count, setCount] = useState(2);
	let [isEnded, setIsEnded] = useState(false);
	let [isLoading, setIsLoading] = useState(false);
	return (
		<>
			<div className='main-bg' style={{ backgroundImage: 'url(' + banner + ')' }}></div>
			<Container>
				<Row>
					{data.map((item) => {
						return <Card key={item.id} {...item} />;
					})}
				</Row>
				{!isEnded && (
					<button
						onClick={async () => {
							setIsLoading(true);
							await axios
								.get(`https://codingapple1.github.io/shop/data${count}.json`)
								.then((result) => {
									console.log(result.data);
									setData([...data, ...result.data]);
									setCount((count) => count + 1);
									if (count === 3) setIsEnded(true);
								})
								.catch((error) => {
									console.log(error.message);
								});
							setIsLoading(false);
						}}>
						show more
					</button>
				)}
				{isLoading && <p>Loading...</p>}
			</Container>
		</>
	);
}

export default Main;
