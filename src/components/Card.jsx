import React from 'react';
import { Col } from 'react-bootstrap';

function Card(props) {
	const { id, title, content, price, imgUrl } = props;
	return (
		<Col>
			<img src={imgUrl} width='80%' />
			<h4>{title}</h4>
			<p>{price}</p>
			<p>{content}</p>
		</Col>
	);
}

export default Card;
