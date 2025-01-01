'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function Lenis({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ReactLenis root options={{ lerp: 0.25 }}>
			{children}
		</ReactLenis>
	);
}
