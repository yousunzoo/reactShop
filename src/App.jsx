import './App.css';
import SiteNavbar from './components/SiteNavbar';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
	return (
		<div className='App'>
			<SiteNavbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<div>about 페이지</div>} />
			</Routes>
		</div>
	);
}

export default App;
