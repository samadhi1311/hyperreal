import { Host_Grotesk } from 'next/font/google';

export const hostGrotesk = Host_Grotesk({
	subsets: ['latin'],
	variable: '--font-hostGrotesk',
	display: 'swap',
	weight: 'variable',
	preload: true,
	adjustFontFallback: false,
});
