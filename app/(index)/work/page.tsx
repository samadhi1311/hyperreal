'use client';

import { H1, H2, P2, P3 } from '@/components/ui/typography';
import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Work() {
	return (
		<>
			<PageWrapper>
				<Section>
					<H1>Our Work</H1>
					<div className='grid grid-cols-1 gap-8 py-16 md:grid-cols-2'>
						<div className='aspect-video h-full overflow-hidden rounded-2xl bg-white/5'>
							<img src='/colorspeck.png' className='h-full w-full object-contain' alt='Colorspeck thumbnail' />
						</div>
						<div className='flex w-full flex-col justify-between'>
							<div className='flex w-fit flex-col items-end gap-1'>
								<H2 className='flex items-center gap-2'>
									<img src='/colorspeck-logo.png' alt='Colorspeck logo' className='h-12 w-full' />
								</H2>
								<P3>
									Visit{' '}
									<Link href='https://colorspeck.pages.dev' className='underline'>
										colorspeck.lk
									</Link>
								</P3>
							</div>
							<P2 className='max-w-prose'>An E-commerce platform for COLORSPECK to showcase and sell handicrafts worldwide. Build and maintained by hyperreal.</P2>
						</div>
					</div>
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
