import { motion } from 'framer-motion';
import { animations } from '../components/animations';

export default function About() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<div>About</div>
		</motion.main>
	);
}
