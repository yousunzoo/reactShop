import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Main from './routes/Main';
import Detail from './routes/Detail';
import About from './routes/About';

function App() {
	return (
		<div className='App'>
			<SiteNavbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/detail' element={<Detail />} />
				<Route path='/about' element={<About />}>
					<Route path='member' element={<div>member</div>} />
					<Route path='location' element={<div>location</div>} />
					<Route />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
