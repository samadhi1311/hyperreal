import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiInstagram, SiGithub, SiDribbble } from 'react-icons/si';

import './stylesheets/Home.css';

export default function Home() {
	const [hue, setHue] = useState(0);

	document.addEventListener('mouseup', function (e) {
		let mouseX = e.clientX;
		let mouseY = e.clientY;

		setHue(Math.atan2(mouseX, mouseY) * (180 / Math.PI));
	});

	return (
		<main className='home-main-container'>
			<div className='hero-image' style={{ transition: 'filter 300ms ease' }}>
				<div className='social-media'>
					<Link>
						<SiInstagram className='social-icon' size={32} />
					</Link>
					<Link>
						<SiGithub className='social-icon' size={32} />
					</Link>
					<Link>
						<SiDribbble className='social-icon' size={32} />
					</Link>
				</div>
			</div>
			<div className='hero-text'>
				<span className='left'>
					<h1 className=''>hyperreal</h1>
				</span>
				<span className='right'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius, illum doloremque corporis sequi veritatis ea asperiores placeat facere atque totam culpa distinctio cum
						libero explicabo animi quisquam porro architecto.
					</p>
					<Link to='/work'>
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
