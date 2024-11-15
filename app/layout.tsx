import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'hyperreal',
	description: 'We develop digital destinations that stand out from the crowd.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <html lang='en'>{children}</html>;
}
