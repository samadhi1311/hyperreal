'use client';

import { motion } from 'motion/react';
import { pageTransition } from '@/lib/animations/animations';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.main {...pageTransition} className='mx-auto max-w-screen-2xl'>
			{children}
		</motion.main>
	);
}
