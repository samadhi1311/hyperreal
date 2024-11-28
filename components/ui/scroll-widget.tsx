'use client';

import { HiArrowSmallUp } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'motion/react';
import { fade } from '@/lib/animations/animations';
import { useEffect, useState } from 'react';

export default function ScrollWidget() {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		const handleVisibility = () => {
			if (window.scrollY > 1500) {
				setVisibility(true);
			} else {
				setVisibility(false);
			}
		};

		window.addEventListener('scroll', handleVisibility);

		return () => window.removeEventListener('scroll', handleVisibility);
	});
	return (
		<AnimatePresence>
			{visibility && (
				<motion.div
					className='fixed bottom-8 right-8 z-[999] flex cursor-pointer items-center justify-center overflow-clip rounded-[100%] border border-white/20 bg-black p-3'
					{...fade}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<HiArrowSmallUp className='h-8 w-8 text-white' />
				</motion.div>
			)}
		</AnimatePresence>
	);
}
