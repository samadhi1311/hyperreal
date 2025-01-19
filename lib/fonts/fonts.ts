import { Funnel_Display, Funnel_Sans } from 'next/font/google';

export const display = Funnel_Display({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap',
	weight: 'variable',
	preload: true,
	adjustFontFallback: false,
});

export const sans = Funnel_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
	weight: 'variable',
	preload: true,
	adjustFontFallback: false,
});
