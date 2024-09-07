import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animations } from '../components/animations';
import './stylesheets/Home.css';

export default function Home() {
	return (
		<motion.main className='home-main-container' variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<motion.div className='hero-image' variants={animations.heroImage} initial='hidden' animate='fadeIn'>
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
			</motion.div>
			<div className='hero-text'>
				<span className='left'>
					<motion.h1 className='hero-title' initial='hidden' animate='visible' variants={animations.textContainer}>
						{Array.from('hyperreal.').map((char, index) => (
							<motion.span key={index} variants={animations.child}>
								{char}
							</motion.span>
						))}
					</motion.h1>
				</span>
				<span className='right'>
					<motion.p className='sub-heading' variants={animations.textContainer} initial='hidden' animate='visible' style={{ display: 'flex' }}>
						{'We craft sleek & efficient solutions from desktop to mobile to web tailored to your unique needs.'.split(' ').map((word, index) => (
							<motion.span variants={animations.child} key={index} style={{ marginRight: '0.3rem' }}>
								{word}
							</motion.span>
						))}
					</motion.p>
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
		</motion.main>
	);
}
