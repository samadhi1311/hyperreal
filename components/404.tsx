'use client';

import Link from 'next/link';
import { H1, P1 } from './ui/typography';
import { LuArrowLeftCircle } from 'react-icons/lu';

export default function Error404() {
	return (
		<main className='flex h-svh w-full flex-col items-center justify-center gap-4'>
			<H1>Are you lost?</H1>
			<P1>The page you are looking for doesn&apos;t seem to exist.</P1>
			<Link href='/' className='flex items-center gap-2 underline underline-offset-4'>
				<LuArrowLeftCircle className='size-6' />
				Let&apos;s head back home
			</Link>
		</main>
	);
}
