import { Link } from 'react-router-dom';
import './Navigation.css';
import { useState } from 'react';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav className='navigation'>
				<span className='nav-logo'>
					<Link to='/hyperreal' className='nav-link'>
						<h3>hyperreal</h3>
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
		</header>
	);
}
