'use client';

import '../globals.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import MenuButton from '@/components/menu-button';
import ScrollWidget from '@/components/ui/scroll-widget';
import { hostGrotesk, funnelDisplay } from '@/lib/fonts/fonts';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<body style={{ backgroundColor: 'black' }} className={`${hostGrotesk} ${funnelDisplay} antialiased`}>
			<ReactLenis root options={{ lerp: 0.25 }}>
				<motion.div style={{ scaleX }} className='fixed left-0 right-0 top-0 z-10 h-1 origin-left bg-gradient-to-r from-violet-500 to-orange-300' />
				<MenuButton />

				{children}
				<ScrollWidget />
			</ReactLenis>
		</body>
	);
}
