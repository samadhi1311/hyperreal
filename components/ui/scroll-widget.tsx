'use client';

import { HiArrowSmallUp } from 'react-icons/hi2';
import { useScroll, motion } from 'motion/react';

export default function ScrollWidget() {
	return (
		<div className='fixed bottom-8 right-8 z-[999] flex items-center justify-center overflow-clip rounded-[100%] bg-white p-4'>
			<HiArrowSmallUp className='h-8 w-8 text-black' />
		</div>
	);
}
