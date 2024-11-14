import { Host_Grotesk, Funnel_Display } from 'next/font/google';

export const hostGrotesk = Host_Grotesk({
	subsets: ['latin'],
	variable: '--font-hostGrotesk',
	display: 'swap',
	weight: 'variable',
});

export const funnelDisplay = Funnel_Display({
	subsets: ['latin'],
	variable: '--font-funnel-display',
	display: 'swap',
	weight: '600',
});
