'use client';

import { menuItemText } from '@/lib/animations/animations';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
};

export function PrimaryButton({ className, children, onClick }: ButtonProps) {
	return (
		<motion.button
			initial='initial'
			whileHover='hover'
			animate='animate'
			className={cn('py-3 px-6 flex flex-col h-12 gap-6 font-medium overflow-hidden rounded-full text-black bg-white border border-white/20', className)}
			onClick={onClick}>
			<motion.span variants={menuItemText} className='flex items-center'>
				{children}
			</motion.span>
			<motion.span variants={menuItemText} aria-hidden className='flex items-center bg-gradient-to-tr from-violet-700 to-orange-500 bg-clip-text text-transparent'>
				{children}
			</motion.span>
		</motion.button>
	);
}

export function SecondaryButton({ className, children, onClick }: ButtonProps) {
	return (
		<motion.button
			initial='initial'
			whileHover='hover'
			animate='animate'
			className={cn('py-3 px-6 flex flex-col h-12 gap-6 font-medium overflow-hidden rounded-full text-white bg-transparent border border-white/20', className)}
			onClick={onClick}>
			<motion.span variants={menuItemText} className='flex items-center'>
				{children}
			</motion.span>
			<motion.span variants={menuItemText} aria-hidden className='flex items-center bg-gradient-to-tr from-violet-600 to-orange-400 bg-clip-text text-transparent'>
				{children}
			</motion.span>
		</motion.button>
	);
}
