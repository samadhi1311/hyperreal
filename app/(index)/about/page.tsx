'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import ParallaxLogo from '@/components/parallax-logo';
import Section from '@/components/ui/section';
import Footer from '@/components/footer';
import { H1, H2, H3, P1, P2 } from '@/components/ui/typography';
import { Card } from '@/components/card';
import { LuCode2 } from 'react-icons/lu';
import { LuPaintbrush } from 'react-icons/lu';

export default function About() {
	return (
		<>
			<PageWrapper>
				<Section>
					<div className='grid grid-cols-1 gap-8 py-16 md:grid-cols-2'>
						<div className='flex w-full flex-col justify-around'>
							<div>
								<H1>
									Why Choose <span className='animate-text bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>?
								</H1>
							</div>
							<div>
								<H2 className='mb-4'>Our mission</H2>
								<P1 className='max-w-prose'>
									It&apos;s simple; To help businesses shine online with creative, efficient, and accessible web solutions that make your brand stand out and delight your users.
								</P1>
							</div>
							<div>
								<H2 className='mb-4'>How it started</H2>
								<P2 className='max-w-prose'>
									Hyperreal began during my university days, building websites and exploring the latest web technologies. After graduating, a shared vision with a close friend turned
									into reality, and we launched <span className='bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>.
								</P2>
								<P2 className='mt-8 max-w-prose'>Today, we craft innovative, user-friendly solutions, making the web more impactful and accessible.</P2>
							</div>
						</div>

						<div className='h-[30vh] w-full overflow-hidden rounded-2xl bg-white lg:h-[80vh]'>
							<ParallaxLogo />
						</div>
					</div>
				</Section>
				<Section>
					<H2>Team</H2>
					<div className='grid grid-cols-1 gap-8 py-16 md:grid-cols-2'>
						<div className='overflow-hidden'>
							<Card>
								<div className='grid grid-cols-2 p-8'>
									<div className='flex size-64 items-center justify-center'>
										<img src={'/hyperreal.svg'} className='aspect-square object-contain' alt='logo' />
									</div>
									<div className='flex h-64 w-full flex-col items-start justify-end gap-2'>
										<LuCode2 className='size-6' />
										<H3 className='bg-gradient-to-br from-violet-600 to-orange-400 bg-clip-text text-transparent'>Samadhi Gunasinghe</H3>
										<P2>Product Manager, Software Developer</P2>
									</div>
								</div>
							</Card>
						</div>
						<div className='overflow-hidden'>
							<Card>
								<div className='grid grid-cols-2 p-8'>
									<div className='flex size-64 items-center justify-center'>
										<img src={'/hyperreal.svg'} className='aspect-square object-contain' alt='logo' />
									</div>
									<div className='flex h-64 w-full flex-col items-start justify-end gap-2'>
										<LuPaintbrush className='size-6' />
										<H3 className='bg-gradient-to-br from-violet-600 to-orange-400 bg-clip-text text-transparent'>Nipuni Gamage</H3>
										<P2>Marketing Manager, UI/UX Designer</P2>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
