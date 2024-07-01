import { motion } from 'framer-motion';
import { animations } from '../components/animations';
import BidirectionalScroller from '../components/BidirectionalScroller/BidirectionalScroller';

export default function About() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<BidirectionalScroller />
		</motion.main>
	);
}
