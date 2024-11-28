'use client';

import { P1, P3 } from '@/components/ui/typography';
import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import Footer from '@/components/footer';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function Work() {
	return (
		<>
			<PageWrapper>
				<Section>
					<div className='flex items-center justify-end'>
						<P3 className=''>
							<Link href='https://colorspeck.lk' className='flex items-center gap-2 duration-500 hover:text-white/80'>
								visit <span className='underline'>colorspeck.lk</span>
								<LuArrowUpRight className='size-4' />
							</Link>
						</P3>
					</div>
					<div data-orientation='horizontal' role='none' className='bg-border mb-8 mt-3 h-[1px] w-full shrink-0'></div>
					<div className='flex flex-col justify-between gap-6 md:flex-row'>
						<img src='/colorspeck-logo.png' alt='Colorspeck logo' className='h-16 w-auto' />
						<P1 className='md:w-1/2'>An E-commerce platform for COLORSPECK to showcase and sell handicrafts worldwide. Build and maintained by hyperreal.</P1>
					</div>
					<video src='/colorspeck.mp4' about='Colorspeck' autoPlay loop controls={false} className='mt-16 aspect-video w-full rounded-lg object-cover' />
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
