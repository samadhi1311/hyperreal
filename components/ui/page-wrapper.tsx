'use client';

import { motion } from 'motion/react';
import { pageTransition } from '@/lib/animations/animations';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
	return <motion.div {...pageTransition}>{children}</motion.div>;
}
