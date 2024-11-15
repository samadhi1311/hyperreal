'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import { HiFaceSmile } from 'react-icons/hi2';

export default function About() {
	return (
		<PageWrapper>
			<section className='mx-auto max-w-screen-2xl px-4 py-32 md:px-8 lg:px-16'>
				<div className='container flex flex-col gap-28'>
					<div className='flex flex-col gap-6'>
						<h1 className='text-3xl font-semibold lg:text-6xl'>
							Why Choose <span className='funnel-display bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>?
						</h1>
						<p className='max-w-xl text-lg'>
							Because we deliver creative designs, fast hosting, and lifetime support to build websites that showcase your brand and provide a flawless online experience.
						</p>
					</div>
					<div className='grid gap-6 md:grid-cols-2'>
						<span className='flex aspect-square h-64 w-full items-center justify-center rounded-2xl bg-white'>
							<img src='/hyperreal.svg' alt='placeholder' className='size-32 invert' />
						</span>
						<div className='flex flex-col justify-between gap-10 rounded-2xl p-10'>
							<p className='text-sm tracking-wide'>OUR MISSION</p>
							<p className='text-lg'>
								It&apos;s simple; To help businesses shine online with creative, efficient, and accessible web solutions. We’re here to make your brand stand out, deliver a great
								experience for your users, and build something you’ll be proud to share.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-6 md:gap-20'>
						<div className='max-w-2xl'>
							<h2 className='mb-2.5 text-3xl font-semibold md:text-5xl'>What client&apos;s say about us</h2>
							<p className=''>We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.</p>
						</div>
						<div className='grid gap-10 md:grid-cols-3'>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<h3 className='mb-3 mt-2 text-lg font-semibold'>Being radically open</h3>
								<p className=''>We believe there’s no room for big egos and there’s always time to help each other. We strive to give and receive feedback, ideas, perspectives</p>
							</div>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<h3 className='mb-3 mt-2 text-lg font-semibold'>Moving the needle</h3>
								<p className=''>Boldly, bravely and with clear aims. We seek out the big opportunities and double down on the most important things to work on.</p>
							</div>
							<div className='flex flex-col'>
								<div className='bg-accent mb-5 flex size-12 items-center justify-center rounded-2xl'>
									<HiFaceSmile className='size-5' />
								</div>
								<h3 className='mb-3 mt-2 text-lg font-semibold'>Optimizing for empowerment</h3>
								<p className=''>We believe that everyone should be empowered to do whatever they think is in the company&apos;s best interests.</p>
							</div>
						</div>
					</div>
					<div className='grid gap-10 md:grid-cols-2'>
						<div>
							<p className='mb-10 text-sm font-medium'>JOIN OUR TEAM</p>
							<h2 className='mb-2.5 text-3xl font-semibold md:text-5xl'>We&apos;re changing how software is made</h2>
						</div>
						<div>
							<img src='https://www.shadcnblocks.com/images/block/placeholder.svg' alt='placeholder' className='mb-6 max-h-36 w-full rounded-xl object-cover' />
							<p className='text-muted-foreground'>
								And we&apos;re looking for the right people to help us do it. If you&apos;re passionate about making change in the world, this might be the place for you
							</p>
						</div>
					</div>
				</div>
			</section>
		</PageWrapper>
	);
}
