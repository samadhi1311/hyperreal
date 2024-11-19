'use client';

import { H1, P3 } from '@/components/ui/typography';
import { menuItemText } from '@/lib/animations/animations';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
	const MenuItem = ({ title, url }: { title: string; url: string }) => {
		return (
			<motion.li initial='initial' whileHover='hover' animate='animate' className='h-8 w-fit rounded-full'>
				<Link href={url} className='flex h-8 flex-col gap-10 overflow-hidden text-lg md:gap-10'>
					<motion.span variants={menuItemText} className='py-2 font-light'>
						{title}
					</motion.span>
					<motion.span variants={menuItemText} aria-hidden className='bg-gradient-to-tr from-violet-500 to-orange-400 bg-clip-text py-2 font-medium text-transparent'>
						{title}
					</motion.span>
				</Link>
			</motion.li>
		);
	};

	return (
		<div className='relative h-[80vh]' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
			<div className='relative -top-[100vh] h-[calc(100vh+80vh)]'>
				<div className='sticky top-[calc(100vh-80vh)] h-[80vh]'>
					<footer className='grains flex h-full w-full flex-col items-center justify-around'>
						<div className='absolute top-0 -z-20 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-800 via-violet-600 to-orange-600'></div>
						<div className='absolute bottom-0 -z-10 h-full w-full bg-gradient-to-t from-black'></div>
						<div>
							<H1>hyperreal</H1>
						</div>
						<div className='grid w-full grid-cols-2 gap-8 px-4 md:grid-cols-4 md:gap-4'>
							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Main Links</P3>
									<hr className='pb-2 opacity-60' />
									<MenuItem title='Home' url='/' />
									<MenuItem title='Work' url='/work' />
									<MenuItem title='About' url='/about' />
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Important Links</P3>
									<hr className='pb-2 opacity-60' />
									<MenuItem title='Pricing' url='/pricing' />
									<MenuItem title='Contact' url='/contact' />
									<MenuItem title='FAQ' url='/faq' />
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-full min-w-[120px] max-w-[200px] space-y-2'>
									<P3>Legal</P3>
									<hr className='pb-2 opacity-60' />
									<MenuItem title='Terms and Conditions' url='/terms-and-conditions' />
									<MenuItem title='Privacy Policy' url='/privacy-policy' />
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Socials</P3>
									<hr className='pb-2 opacity-60' />
									<MenuItem title='Instagram' url='/' />
									<MenuItem title='Facebook' url='/' />
								</ul>
							</div>
						</div>

						<div className=''>
							<P3 className='tracking-wider opacity-90'>
								&copy; 2024 <span className='bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>, All Rights Reserved.
							</P3>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
}
