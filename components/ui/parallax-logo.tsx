'use client';

import { motion, useTransform, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { useScreenSize } from '@/lib/hooks/useScreenSize';

export default function ParallaxLogo() {
	const container = useRef(null);
	const { height } = useScreenSize();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.0]);
	const Column = ({ y, className }: { y: MotionValue; className: string }) => {
		return (
			<motion.div style={{ y }} className='flex w-1/4 flex-col gap-2'>
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index} className={`relative grid aspect-square w-full place-items-center overflow-hidden ${className}`}>
						<img src={'/hyperreal.svg'} className='aspect-square object-contain p-4 invert' alt='logo' />
					</div>
				))}
			</motion.div>
		);
	};

	return (
		<div>
			<div ref={container} className='flex gap-2'>
				<Column className='-top-[81%]' y={y1} />
				<Column className='-top-[130%]' y={y2} />
				<Column className='-top-[104%]' y={y3} />
				<Column className='-top-[110%]' y={y4} />
			</div>
		</div>
	);
}
