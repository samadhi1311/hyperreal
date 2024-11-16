'use client';

import { motion } from 'motion/react';
import { pageTransition } from '@/lib/animations/animations';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.main {...pageTransition} className='mx-auto px-4 md:px-8 lg:px-16 xl:px-32'>
			{children}
		</motion.main>
	);
}
