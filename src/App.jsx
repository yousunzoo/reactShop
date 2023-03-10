import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Main from './routes/Main';
import Detail from './routes/Detail';
import About from './routes/About';
import Events from './routes/Events';
import { createContext, useState } from 'react';
import data from './data';

export let Context1 = createContext();

function App() {
	let [productData] = useState(data);
	let [remains] = useState([10, 11, 12]);
	return (
		<div className='App'>
			<SiteNavbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route
					path='/detail/:id'
					element={
						<Context1.Provider value={{ remains }}>
							<Detail data={productData} />
						</Context1.Provider>
					}
				/>
				<Route path='/about' element={<About />}>
					<Route path='member' element={<div>member</div>} />
					<Route path='location' element={<div>location</div>} />
					<Route />
				</Route>
				<Route path='/event' element={<Events />}>
					<Route path='1' element={<div>첫 주문 시 무료 배송 이벤트</div>} />
					<Route path='2' element={<div>신규 회원 쿠폰 증정 이벤트</div>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
