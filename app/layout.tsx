import type { Metadata } from 'next';
import type { Viewport } from 'next';

import './globals.css';
import MenuButton from '@/components/menu-button';
import ScrollWidget from '@/components/ui/scroll-widget';
import { display, sans } from '@/lib/fonts/fonts';
import Splash from '@/components/splash';
import ScrollProgress from '@/components/scroll-progress';
import Lenis from '@/components/lenis';

export const viewport: Viewport = {
	colorScheme: 'dark',
	height: 'device-height',
	width: 'device-width',
	initialScale: 1,
	themeColor: 'black',
	viewportFit: 'auto',
};

export const metadata: Metadata = {
	title: 'hyperreal - We develop digital destinations that stand out from the crowd.',
	description: 'We are a premier web development agency based in Sri Lanka, specializing in innovative, high-performance websites, from sleek personal sites to robust e-commerce platforms.',
	abstract: 'hyperreal - We develop digital destinations that stand out from the crowd.',
	authors: [
		{ name: 'Samadhi Gunasinghe', url: 'https://hyperreal.cloud' },
		{ name: 'Nipuni Gamage', url: 'https://hyperreal.cloud' },
	],
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: 'website',
		title: 'hyperreal - We develop digital destinations that stand out from the crowd.',
		description: 'We are a premier web development agency based in Sri Lanka, specializing in innovative, high-performance websites, from sleek personal sites to robust e-commerce platforms.',
		siteName: 'hyperreal',
		locale: 'en_US',
		url: 'https://hyperreal.cloud',
		images: [
			{
				url: 'https://www.hyperreal.cloud/meta-image.png',
				width: 1200,
				height: 628,
				alt: 'hyperreal - We develop digital destinations that stand out from the crowd.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'hyperreal - We develop digital destinations that stand out from the crowd.',
		description: 'We are a premier web development agency based in Sri Lanka, specializing in innovative, high-performance websites, from sleek personal sites to robust e-commerce platforms.',
		images: ['https://www.hyperreal.cloud/meta-image.png'],
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`${display.variable} ${sans.variable} antialiased overflow-x-hidden`}>
				<Lenis>
					<Splash />
					<ScrollProgress />
					<MenuButton />
					{children}
					<ScrollWidget />
				</Lenis>
			</body>
		</html>
	);
}
