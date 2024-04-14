import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';

export default function App() {
	const location = useLocation();

	return (
		<>
			<Navigation />

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/hyperreal' element={<Home />} />
					<Route path='/hyperreal/services' element={<Services />} />
					<Route path='/hyperreal/work' element={<Work />} />
					<Route path='/hyperreal/about' element={<About />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}
