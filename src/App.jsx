import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';

function App() {
	return (
		<BrowserRouter>
			<Navigation />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/work' element={<Work />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
