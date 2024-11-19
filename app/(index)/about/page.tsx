'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import ParallaxLogo from '@/components/parallax-logo';
import Section from '@/components/ui/section';
import Footer from '@/components/footer';
import { H1, H2, P1, P2 } from '@/components/ui/typography';

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
			</PageWrapper>
			<Footer />
		</>
	);
}
