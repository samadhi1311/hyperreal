import { Host_Grotesk, Inter } from 'next/font/google';

export const hostGrotesk = Host_Grotesk({
	subsets: ['latin'],
	variable: '--font-hostGrotesk',
	display: 'swap',
	weight: 'variable',
	preload: true,
	adjustFontFallback: false,
});

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
	weight: 'variable',
	preload: true,
	adjustFontFallback: false,
});
