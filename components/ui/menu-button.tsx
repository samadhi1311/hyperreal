'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './navigation';
import { menuButton } from '@/lib/animations/animations';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button className='fixed right-8 top-8 z-[999] w-24 overflow-hidden rounded-full bg-white p-2 text-black' onClick={() => setIsOpen(!isOpen)}>
				<label htmlFor='menu' className='relative flex w-32 items-center px-4 py-3'>
					<motion.p variants={menuButton} animate={isOpen ? 'open' : 'closed'} className='absolute bg-white'>
						CLOSE
					</motion.p>
					<motion.p variants={menuButton} animate={!isOpen ? 'open' : 'closed'} className='absolute bg-white'>
						MENU
					</motion.p>
				</label>
			</button>

			<AnimatePresence>{isOpen && <Navigation />}</AnimatePresence>
		</>
	);
}
