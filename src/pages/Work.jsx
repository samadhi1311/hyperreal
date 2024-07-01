import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SnappingScroller from '../components/SnappingScroller/SnappingScroller';
import { animations } from '../components/animations';
import './stylesheets/Work.css';

export default function Work() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<SnappingScroller />
		</motion.main>
	);
}
