'use client';

import { PrimaryButton, SecondaryButton } from '@/components/ui/button';
import { motion, useAnimate, stagger } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiUserVoice } from 'react-icons/bi';
import { useScreenSize } from '@/lib/hooks/useScreenSize';

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
					ease: [0.645, 0.045, 0.355, 1],
					delay: 0.5,
				}
			);
		}

		animateLogo();
	}, []);

	return (
		<section className='flex h-svh w-full items-center justify-center'>
			<div ref={scope} className='flex max-w-min flex-col items-center justify-center gap-16'>
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
					<motion.p className='slogan relative flex max-w-[300px] flex-wrap gap-1.5 text-lg font-light leading-none text-white md:max-w-[600px] md:gap-2 md:text-3xl'>
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

				<motion.span className='cta-buttons flex items-center gap-4 self-start opacity-0'>
					<Link href='/contact'>
						<PrimaryButton>
							<BiUserVoice className='mr-2 h-5 w-5 text-black' />
							Contact us
						</PrimaryButton>
					</Link>

					<Link href='/#hyperreal-features'>
						<SecondaryButton>Learn more</SecondaryButton>
					</Link>
				</motion.span>
			</div>
		</section>
	);
}
