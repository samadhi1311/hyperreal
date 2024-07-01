import { motion } from 'framer-motion';
import { animations } from '../components/animations';
import MovingGradient from '../components/MovingGradient/MovingGradient';

export default function Services() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<div>
				Services
				<MovingGradient size={320} tailLength={150} duration={100} />
			</div>
		</motion.main>
	);
}
