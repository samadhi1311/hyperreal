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
				<Route path='/hyperreal' element={<Home />} />
				<Route path='/hyperreal/services' element={<Services />} />
				<Route path='/hyperreal/work' element={<Work />} />
				<Route path='/hyperreal/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
