import { menuItemText, menuSlide } from '@/lib/animations/animations';
import { stagger } from 'motion';
import { motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { PiArrowRight } from 'react-icons/pi';

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	const [scope, animate] = useAnimate();

	async function NavAnimations() {
		await animate(
			'nav',
			{
				x: [-50, 0],
			},
			{
				duration: 0.1,
			}
		);

		await animate(
			'li',
			{
				opacity: [0, 1],
				x: [-50, 0],
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

	const MenuItem = ({ title, url }: { title: string; url: string }) => {
		return (
			<motion.li initial='initial' whileHover='hover' animate='animate' className='h-16 w-fit rounded-full capitalize opacity-0'>
				<Link href={url} className='flex h-16 flex-col gap-10 overflow-hidden md:gap-16' onClick={closeMenu}>
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
			className='navigation fixed inset-0 z-50 flex h-svh w-full items-center justify-center bg-black/60 font-light text-white backdrop-blur-xl backdrop-saturate-200 md:h-screen'
			{...menuSlide}>
			<motion.nav className='mx-auto my-32 grid w-full grid-cols-none grid-rows-3 gap-16 p-16 text-base capitalize md:grid-cols-3 md:grid-rows-none md:gap-32 md:text-lg lg:text-5xl'>
				<PiArrowRight className='absolute h-8 w-8 opacity-0 transition-all duration-500 group-hover/link:opacity-100' />
				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Our website</p>
					<hr className='mb-4 origin-top-left opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<motion.ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem title='Home' url='/' />
						<MenuItem title='Work' url='/work' />
						<MenuItem title='About' url='/about' />
					</motion.ul>
				</div>

				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Contact us</p>
					<hr className='mb-4 opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<motion.ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem title='whatsapp' url='/contact' />
						<MenuItem title='email' url='/contact' />
					</motion.ul>
				</div>

				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Socials</p>
					<hr className='mb-4 opacity-20 transition-opacity duration-500 group-hover/section:opacity-60 md:mb-16' />
					<motion.ul className='flex flex-row gap-16 md:flex-col'>
						<MenuItem title='instagram' url='/' />
						<MenuItem title='facebook' url='/' />
					</motion.ul>
				</div>
			</motion.nav>
		</motion.div>
	);
}
