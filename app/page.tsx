'use client';

import { motion, useAnimate, stagger } from 'motion/react';
import { useEffect } from 'react';

export default function Home() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const heading = document.getElementsByClassName('logo-container')[0];
		const displacement = heading.clientWidth / 2;

		async function animateLogo() {
			if (!displacement) return;

			animate('.logo-container', {
				x: displacement,
			});

			animate('.hyperreal-heading', {
				y: 50,
			});

			await animate(
				'.logo-container',
				{
					opacity: 1,
					y: [80, 0],
				},
				{
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
					delay: 0.5,
				}
			);

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
					y: 100,
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
					y: '-100%',
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
		}

		animateLogo();
	}, []);
	return (
		<main className='flex h-[300vh] w-full flex-col items-center'>
			<section className='flex h-svh w-full items-center justify-center'>
				<div ref={scope} className='relative flex h-fit flex-col items-center justify-center gap-4'>
					<motion.span className='logo-container flex items-center gap-8 overflow-clip opacity-0'>
						<motion.img className='hyperreal-logo h-16 w-16 max-w-none scale-[1.06]' src='/hyperreal.svg' width={64} height={64} alt='hyperreal logo' />
						<motion.h1 className='hyperreal-heading funnel-display flex items-center text-8xl font-semibold leading-none text-white'>
							{Array.from('hyperreal').map((letter, index) => (
								<motion.span className='hyperreal-heading-letter pb-2 opacity-0' key={index}>
									{letter}
								</motion.span>
							))}
						</motion.h1>
					</motion.span>

					<motion.span className='flex items-center self-start overflow-clip'>
						<motion.p className='slogan relative flex w-[480px] flex-wrap gap-1.5 text-xl leading-none text-white'>
							{Array.from('we craft creative, efficient web solutions anyone can love.'.split(' ')).map((word, index) => (
								<motion.span
									className={`slogan-words opacity-0 ${
										word === 'creative,' || word === 'efficient' || word === 'love.'
											? 'font-medium bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'
											: ''
									}`}
									key={index}>
									{word}
								</motion.span>
							))}
						</motion.p>
					</motion.span>
				</div>
			</section>
		</main>
	);
}
