'use client';

import { menuItemText, menuSlide } from '@/lib/animations/animations';
import { stagger } from 'motion';
import { motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { PiArrowRight } from 'react-icons/pi';
import { P3 } from '@/components/ui/typography';

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	const [scope, animate] = useAnimate();

	async function NavAnimations() {
		await animate(
			'li',
			{
				x: [-50, 0],
				opacity: 1,
			},
			{
				duration: 1,
				ease: [0.645, 0.045, 0.355, 1],
				delay: stagger(0.1),
			}
		);
	}

	useEffect(() => {
		NavAnimations();
	}, []);

	const MenuItem = ({ title, url, newTab }: { title: string; url: string; newTab?: boolean }) => {
		return (
			<motion.li initial='initial' whileHover='hover' animate='animate' className='h-16 w-fit rounded-full opacity-0'>
				<Link target={newTab ? '_blank' : '_self'} rel={newTab ? 'noopener noreferrer' : ''} href={url} className='flex h-16 flex-col gap-10 overflow-hidden md:gap-16' onClick={closeMenu}>
					<motion.span variants={menuItemText} className='py-2'>
						{title}
					</motion.span>
					<motion.span variants={menuItemText} aria-hidden className='bg-gradient-to-tr from-violet-500 to-orange-400 bg-clip-text py-2 text-transparent'>
						{title}
					</motion.span>
				</Link>
			</motion.li>
		);
	};

	return (
		<motion.div
			ref={scope}
			className='navigation font-display fixed inset-0 z-[200] flex h-svh w-full items-center justify-center bg-black/60 font-normal text-white backdrop-blur-xl backdrop-saturate-200 md:h-screen'
			{...menuSlide}>
			<motion.nav className='mx-auto my-32 grid w-full grid-cols-none grid-rows-3 gap-16 px-8 py-16 text-base capitalize md:grid-cols-3 md:grid-rows-none md:gap-32 md:text-lg lg:px-16 lg:text-5xl xl:px-32'>
				<PiArrowRight className='absolute h-8 w-8 opacity-0 transition-all duration-500 group-hover/link:opacity-100' />
				<div className='group/section'>
					<P3 className='mb-1 opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Our website</P3>
					<hr className='mb-4 origin-top-left border-white opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem title='Home' url='/' />
						<MenuItem title='Work' url='/work' />
						<MenuItem title='Contact' url='/contact' />
						<MenuItem title='About' url='/about' />
					</ul>
				</div>

				<div className='group/section'>
					<P3 className='mb-1 opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Contact us</P3>
					<hr className='mb-4 border-white opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem newTab title='Whatsapp' url='https://wa.me/94782752500' />
						<MenuItem title='Email' url='mailto:hello@hyperreal.cloud' />
					</ul>
				</div>

				<div className='group/section'>
					<P3 className='mb-1 opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Socials</P3>
					<hr className='mb-4 border-white opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem newTab title='Instagram' url='https://www.instagram.com/hyperrealhq' />
						<MenuItem newTab title='Facebook' url='https://www.facebook.com/hyperrealhq' />
						<MenuItem newTab title='LinkedIn' url='https://www.linkedin.com/company/hyperrealhq/' />
					</ul>
				</div>
			</motion.nav>
		</motion.div>
	);
}
