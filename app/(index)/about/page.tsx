'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import ParallaxLogo from '@/components/parallax-logo';
import Section from '@/components/ui/section';
import { HiFaceSmile } from 'react-icons/hi2';
import { H2, H4, P1, P2, P4 } from '@/components/ui/typography';

export default function About() {
	return (
		<PageWrapper>
			<Section>
				<div className='flex flex-col gap-28'>
					<div className='flex flex-col gap-6'>
						<H2 className='text-3xl font-semibold lg:text-6xl'>
							Why Choose <span className='funnel-display bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>?
						</H2>
						<P1 className='max-w-lg text-pretty'>
							Because we deliver creative designs, fast hosting, and lifetime support to build websites that showcase your brand and provide a flawless online experience.
						</P1>
					</div>
					<div className='grid gap-6 md:grid-cols-2'>
						<div>
							<P4 className='mb-2'>OUR MISSION</P4>
							<P1 className='text-balance'>
								It&apos;s simple; To help businesses shine online with creative, efficient, and accessible web solutions. We’re here to make your brand stand out, deliver a great
								experience for your users, and build something you’ll be proud to share.
							</P1>
						</div>
						<span className='h-64 w-full overflow-clip rounded-2xl bg-white'>
							<ParallaxLogo />
						</span>
					</div>
					<div className='flex flex-col gap-6 md:gap-20'>
						<div className='max-w-2xl'>
							<H2 className='mb-2.5'>What client&apos;s say about us</H2>
							<P2 className=''>We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.</P2>
						</div>
						<div className='grid gap-10 md:grid-cols-3'>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<H4 className='mb-3 mt-2'>Being radically open</H4>
								<P2 className=''>We believe there’s no room for big egos and there’s always time to help each other. We strive to give and receive feedback, ideas, perspectives</P2>
							</div>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<H4 className='mb-3 mt-2'>Moving the needle</H4>
								<P2 className=''>Boldly, bravely and with clear aims. We seek out the big opportunities and double down on the most important things to work on.</P2>
							</div>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<H4 className='mb-3 mt-2'>Optimizing for empowerment</H4>
								<P2 className=''>We believe that everyone should be empowered to do whatever they think is in the company&apos;s best interests.</P2>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</PageWrapper>
	);
}
