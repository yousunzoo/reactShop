import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Card(props) {
	const { id, title, content, price, imgUrl } = props;
	let navigate = useNavigate();
	return (
		<Col
			onClick={() => {
				navigate(`/detail/${id}`);
			}}>
			<img src={imgUrl} width='80%' />
			<h4>{title}</h4>
			<p>{price}</p>
			<p>{content}</p>
		</Col>
	);
}

export default Card;
