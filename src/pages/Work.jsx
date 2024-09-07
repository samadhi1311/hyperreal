import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../components/animations';
import './stylesheets/Work.css';

export default function Work() {
	return (
		<motion.main variants={animations.container} initial='hidden' animate='visible' exit='exit'>
			<h1>Work</h1>
		</motion.main>
	);
}
