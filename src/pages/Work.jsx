import { motion } from 'framer-motion';
import { animations } from '../components/animations';

export default function Work() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<div>Work</div>
		</motion.main>
	);
}
