'use client';

import { motion, useAnimate, stagger } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiUserVoice } from 'react-icons/bi';
import { useScreenSize } from '@/lib/hooks/useScreenSize';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { LuArrowDownCircle } from 'react-icons/lu';
import { menuItemText } from '@/lib/animations/animations';

export default function Hero() {
	const [scope, animate] = useAnimate();
	const { width } = useScreenSize();

	useEffect(() => {
		const heading = document.getElementsByClassName('logo-container')[0];
		const displacement = heading.clientWidth / 2;

		async function animateLogo() {
			if (!displacement) return;

			animate('.logo-container', {
				x: displacement,
			});

			animate('.hyperreal-heading', {
				y: width > 768 ? 50 : 50,
			});

			await animate(
				'.logo-container',
				{
					opacity: 1,
					y: width > 768 ? [80, 0] : [40, 0],
				},
				{
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
					delay: 0.5,
				}
			);

			// slide to left
			animate(
				'.logo-container',
				{
					x: 0,
				},
				{
					duration: 0.8,
					ease: [0.645, 0.045, 0.355, 1],
					delay: 0.5,
				}
			);

			await animate(
				'.hyperreal-heading',
				{
					y: width > 768 ? 100 : 50,
				},
				{
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
				}
			);

			animate(
				'.hyperreal-heading-letter',
				{
					opacity: [0, 1],
					y: width > 768 ? -50 : -48,
				},
				{
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
					delay: stagger(0.05),
				}
			);

			animate(
				'.slogan-words',
				{
					opacity: [0, 1],
					x: [-50, 0],
				},
				{
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
					delay: stagger(0.05),
				}
			);

			await animate(
				'.cta-buttons',
				{
					opacity: 1,
				},
				{
					duration: 1,
					delay: 0.5,
				}
			);

			await animate(
				'.scroll-notice',
				{
					opacity: 1,
				},
				{
					duration: 1,
					delay: 0.5,
				}
			);
		}

		animateLogo();
	}, []);

	return (
		<section className='flex h-svh w-full items-center justify-center'>
			<div ref={scope} className='flex flex-col items-center justify-center gap-16 md:max-w-min'>
				<motion.span className='logo-container flex items-center gap-8 overflow-clip opacity-0'>
					<motion.img className='hyperreal-logo h-8 w-8 max-w-none scale-[1.06] md:h-16 md:w-16' src='/hyperreal.svg' loading='lazy' width={32} height={32} alt='hyperreal logo' />
					<motion.h1 className='hyperreal-heading funnel-display flex items-center text-5xl font-semibold leading-none text-white md:text-8xl'>
						{Array.from('hyperreal').map((letter, index) => (
							<motion.span className='hyperreal-heading-letter pb-2 opacity-0' key={index}>
								{letter}
							</motion.span>
						))}
					</motion.h1>
				</motion.span>

				<motion.span className='flex items-center justify-center self-end overflow-clip text-center md:self-start'>
					<motion.p className='slogan relative flex max-w-[300px] flex-wrap items-center justify-center gap-1.5 text-lg font-light leading-none text-white md:max-w-[600px] md:gap-2 md:text-3xl'>
						{Array.from('we craft creative and efficient web solutions anyone can love'.split(' ')).map((word, index) => (
							<motion.span
								className={`slogan-words opacity-0 ${
									['creative', 'efficient', 'love'].includes(word) ? 'font-medium bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent' : ''
								}`}
								key={index}>
								{word}
							</motion.span>
						))}
					</motion.p>
				</motion.span>

				<motion.span className='cta-buttons flex items-center gap-4 self-center opacity-0'>
					<Link href='/contact'>
						<motion.button
							initial='initial'
							whileHover='hover'
							animate='animate'
							className='flex h-12 flex-col gap-6 overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white'>
							<motion.span variants={menuItemText} className='flex items-center gap-3'>
								<BiUserVoice className='size-5' />
								Contact us
							</motion.span>
							<motion.span variants={menuItemText} aria-hidden className='flex items-center gap-3 bg-gradient-to-tr from-violet-700 to-orange-500 bg-clip-text text-transparent'>
								<BiUserVoice className='size-5' style={{ fill: 'url(#hyperreal-gradient)' }} />
								Contact us
							</motion.span>
							<svg width='0' height='0'>
								<linearGradient id='hyperreal-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
									<stop stopColor='#8b5cf6' offset='0%' />
									<stop stopColor='#fdba74' offset='100%' />
								</linearGradient>
							</svg>
						</motion.button>
					</Link>

					<Link href='/#hyperreal-features'>
						<motion.button initial='initial' whileHover='hover' animate='animate' className='flex h-12 flex-col gap-6 overflow-hidden bg-transparent px-6 py-3 font-medium text-white'>
							<motion.span variants={menuItemText} className='flex items-center underline decoration-white/30 underline-offset-8'>
								Learn more
							</motion.span>
							<motion.span variants={menuItemText} aria-hidden className='flex items-center bg-gradient-to-tr from-violet-600 to-orange-400 bg-clip-text text-transparent'>
								Learn more
							</motion.span>
						</motion.button>
					</Link>
				</motion.span>

				<motion.div className='scroll-notice absolute bottom-8 flex items-center gap-3 rounded-3xl border border-white/20 px-4 py-2 opacity-0 md:bottom-12 lg:bottom-16'>
					<LuArrowDownCircle className='size-5 text-[#71717a]' />
					<TextShimmer duration={2} spread={1}>
						Scroll to discover more
					</TextShimmer>
				</motion.div>
			</div>
		</section>
	);
}
