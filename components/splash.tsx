'use client';

import { useScreenSize } from '@/lib/hooks/useScreenSize';
import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function Splash() {
	const [scope, animate] = useAnimate();
	const { width } = useScreenSize();

	useEffect(() => {
		const heading = document.getElementsByClassName('logo-container')[0];
		const displacement = heading.clientWidth / 2;

		async function animateLogo() {
			if (!displacement) return;

			animate(scope.current, {
				zIndex: 9999,
			});

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

			await animate(
				scope.current,
				{
					opacity: [1, 0],
				},
				{
					duration: 0.5,
					delay: 3,
				}
			);

			await animate(scope.current, {
				zIndex: -9999,
			});
		}
		animateLogo();
	}, []);

	return (
		<section ref={scope} className='pointer-events-none fixed z-[9999] flex h-svh w-full items-center justify-center bg-black'>
			<div className='flex flex-col items-center justify-center gap-16 md:max-w-min'>
				<span className='logo-container flex items-center gap-8 overflow-clip opacity-0'>
					<img className='hyperreal-logo h-8 w-8 max-w-none scale-[1.06] md:h-16 md:w-16' src='/hyperreal.svg' loading='lazy' width={32} height={32} alt='hyperreal logo' />
					<h1 className='hyperreal-heading  flex items-center text-5xl font-medium leading-none text-white md:text-8xl'>
						{Array.from('hyperreal').map((letter, index) => (
							<motion.span className='hyperreal-heading-letter pb-2 opacity-0' key={index}>
								{letter}
							</motion.span>
						))}
					</h1>
				</span>
			</div>
		</section>
	);
}

{
	/* we craft creative and efficient web solutions anyone can love */
}
