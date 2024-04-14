import { motion } from 'framer-motion';
import { animations } from '../components/animations';

export default function Services() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<div>Services</div>
		</motion.main>
	);
}
