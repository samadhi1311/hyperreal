import { menuItemText, menuSlide } from '@/lib/animations/animations';
import { stagger } from 'motion';
import { motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { PiArrowRight } from 'react-icons/pi';

export default function Navigation() {
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
				<Link href={url} className='flex h-16 flex-col gap-16 overflow-hidden'>
					<motion.span variants={menuItemText} className='py-2'>
						{title}
					</motion.span>
					<motion.span variants={menuItemText} aria-hidden className='bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text py-2 text-transparent'>
						{title}
					</motion.span>
				</Link>
			</motion.li>
		);
	};

	return (
		<motion.div
			ref={scope}
			className='navigation grains fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/60 font-light text-white backdrop-blur-lg backdrop-saturate-200'
			{...menuSlide}>
			<motion.nav className='mx-auto grid w-full grid-cols-3 gap-32 p-16 text-5xl capitalize'>
				<PiArrowRight className='absolute h-8 w-8 opacity-0 transition-all duration-500 group-hover/link:opacity-100' />
				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Our website</p>
					<hr className='mb-16 opacity-20 transition-opacity duration-500 group-hover/section:opacity-60' />
					<motion.ul className='flex flex-col gap-16'>
						<MenuItem title='Home' url='/' />
						<MenuItem title='Work' url='/work' />
						<MenuItem title='About' url='/about' />
					</motion.ul>
				</div>

				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Contact us</p>
					<hr className='mb-16 opacity-20 transition-opacity duration-500 group-hover/section:opacity-60' />
					<motion.ul className='flex h-fit flex-col gap-16'>
						<MenuItem title='whatsapp' url='/contact' />
						<MenuItem title='email' url='/contact' />
					</motion.ul>
				</div>

				<div className='group/section'>
					<p className='mb-1 text-sm opacity-50 transition-opacity duration-500 group-hover/section:opacity-80'>Socials</p>
					<hr className='mb-16 opacity-20 transition-opacity duration-500 group-hover/section:opacity-60' />
					<motion.ul className='flex h-fit flex-col gap-16'>
						<MenuItem title='instagram' url='/' />
						<MenuItem title='facebook' url='/' />
					</motion.ul>
				</div>
			</motion.nav>
		</motion.div>
	);
}
