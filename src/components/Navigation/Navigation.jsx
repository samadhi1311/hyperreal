import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const animation = {
		default: {
			opacity: 1,
		},
	};

	return (
		<motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping: 20 }}>
			<nav className='navigation'>
				<span className='nav-logo'>
					<Link to='/hyperreal' className='nav-link'>
						<motion.h3>hyperreal</motion.h3>
					</Link>
				</span>

				<span className='nav-links'>
					<Link to='/hyperreal/services' className='nav-link'>
						Services
					</Link>
					<Link to='/hyperreal/work' className='nav-link'>
						Work
					</Link>
					<Link to='/hyperreal/about' className='nav-link'>
						About
					</Link>
				</span>

				<span className='nav-buttons'>
					<Link to='/hyperreal/contact' className='nav-link'>
						<button className='button'>
							Contact
							<div className='hoverEffect'>
								<div></div>
							</div>
						</button>
					</Link>
				</span>

				<span className='hamburger-menu'>
					<i className='bx bx-menu-alt-right bx-md'></i>
				</span>
			</nav>
		</motion.header>
	);
}
