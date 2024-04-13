import { Link } from 'react-router-dom';

import './stylesheets/Home.css';

export default function Home() {
	return (
		<main className='home-main-container'>
			<div className='hero-image' style={{ transition: 'filter 300ms ease' }}>
				<div className='social-media'>
					<Link>
						<i className='bx bxl-dribbble bx-md social-icon'></i>
					</Link>

					<Link>
						<i className='bx bxl-instagram bx-md social-icon'></i>
					</Link>

					<Link>
						<i className='bx bxl-github bx-md social-icon'></i>
					</Link>
				</div>
			</div>
			<div className='hero-text'>
				<span className='left'>
					<h1 className=''>hyperreal</h1>
				</span>
				<span className='right'>
					<p className='sub-heading'>
						Elevating Online Presence,
						<br />
						One Pixel at a Time:
					</p>
					<p className='paragraph'>Crafting Customized Solutions to Boost Your Brand's Visibility and Success in the Digital Realm</p>
					<Link to='/hyperreal/work'>
						<button className='button'>
							Our work
							<div className='hoverEffect'>
								<div></div>
							</div>
						</button>
					</Link>
				</span>
			</div>
		</main>
	);
}
