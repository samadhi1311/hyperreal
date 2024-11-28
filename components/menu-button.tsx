'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from '@/components/navigation';
import { initialFade, menuButton } from '@/lib/animations/animations';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<motion.button
				className='fixed right-8 top-8 z-[999] w-24 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-white/5 p-2 text-white'
				onClick={() => setIsOpen(!isOpen)}
				{...initialFade}>
				<label htmlFor='menu' className='relative flex w-32 cursor-pointer items-center px-4 py-3'>
					<motion.p variants={menuButton} animate={isOpen ? 'open' : 'closed'} className='absolute text-white'>
						CLOSE
					</motion.p>
					<motion.p variants={menuButton} animate={!isOpen ? 'open' : 'closed'} className='absolute'>
						MENU
					</motion.p>
				</label>
			</motion.button>

			<AnimatePresence>{isOpen && <Navigation closeMenu={() => setIsOpen(false)} />}</AnimatePresence>
		</>
	);
}
