import React, { useContext, useEffect, useState } from 'react';
import { Context1 } from '../App';

function TabContent({ tab, shoes }) {
	const [fade, setFade] = useState('');
	const { remains } = useContext(Context1);

	useEffect(() => {
		setTimeout(() => {
			setFade('end');
		}, 100);
		return () => {
			setFade('');
		};
	}, [tab]);
	return (
		<div className={`start ${fade}`}>
			<p>{shoes.title}</p>
			<p>재고: {remains[tab]}</p>
			{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
		</div>
	);
}

export default TabContent;
