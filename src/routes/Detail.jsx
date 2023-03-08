import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
	let [isNum, setIsNum] = useState(true);
	let [quantity, setQuantity] = useState(0);
	// useEffect 안의 코드는 렌더링 후에 동작
	// 어려운 연산/ 서버에서 데이터 가져오는 작업/ 타이머 장착은 useEffect 안에서
	//
	useEffect(() => {
		if (isNaN(quantity)) {
			setIsNum(false);
		} else {
			setIsNum(true);
		}
	}, [quantity]);

	const { id } = useParams();
	let productData = props.data.find((item) => item.id == id);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<img src={`https://codingapple1.github.io/shop/shoes${item.id}.jpg`} width='100%' />
				</div>
				<div className='col-md-6'>
					<h4 className='pt-5'>{productData.title}</h4>
					<p>{productData.content}</p>
					<p>{productData.price}원</p>
					<input
						onChange={(e) => {
							setQuantity(e.target.value);
						}}
					/>
					{isNum ? null : <p>숫자만 입력해주세요</p>}
					<button className='btn btn-danger'>주문하기</button>
				</div>
			</div>
		</div>
	);
}

export default Detail;
