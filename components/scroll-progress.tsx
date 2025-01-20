'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return <motion.div style={{ scaleX }} className='fixed left-0 right-0 top-0 z-[999] h-1 origin-left bg-gradient-to-r from-violet-500 to-orange-300' />;
}
