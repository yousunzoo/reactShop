import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import TabContent from './TabContent';

import { Context1 } from './../App';

function Detail(props) {
	let { remains } = useContext(Context1);
	let [isNum, setIsNum] = useState(true);
	let [quantity, setQuantity] = useState(0);
	let [tab, setTab] = useState(0);
	let [fade, setFade] = useState('');
	// useEffect 안의 코드는 렌더링 후에 동작
	// 어려운 연산/ 서버에서 데이터 가져오는 작업/ 타이머 장착은 useEffect 안에서
	//
	useEffect(() => {
		if (isNaN(quantity)) {
			setIsNum(false);
		} else {
			setIsNum(true);
		}
		setFade('end');
		return () => {
			setFade('');
		};
	}, [quantity]);

	const { id } = useParams();
	let productData = props.data.find((item) => item.id == id);
	return (
		<div className={`container start ${fade}`}>
			<div className='row'>
				<div className='col-md-6'>
					<img src={`https://codingapple1.github.io/shop/shoes${productData.id + 1}.jpg`} width='100%' />
				</div>
				<div className='col-md-6'>
					<h4 className='pt-5'>{productData.title}</h4>
					<p>{productData.content}</p>
					<p>{productData.price}원</p>
					<p>재고 : {remains[0]}</p>
					<input
						onChange={(e) => {
							setQuantity(e.target.value);
						}}
					/>
					{isNum ? null : <p>숫자만 입력해주세요</p>}
					<button className='btn btn-danger'>주문하기</button>
				</div>
			</div>
			<Nav variant='tabs' defaultActiveKey='link0'>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(0);
						}}
						eventKey='link0'>
						버튼0
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(1);
						}}
						eventKey='link1'>
						버튼1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(2);
						}}
						eventKey='link2'>
						버튼2
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tab={tab} shoes={productData} />
		</div>
	);
}

export default Detail;
