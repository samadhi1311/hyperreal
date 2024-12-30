'use client';

import Marquee from './ui/marquee';

export default function Hero() {
	const data = [
		{
			name: 'COLORSPECK',
			video: '/colorspeck.mp4',
		},
		{
			name: 'Hari Builders',
			video: '/haribuilders.mp4',
		},
		{
			name: 'hyperbooks.',
			video: '/hyperbooks.mp4',
		},
	];
	return (
		<section className='flex min-h-svh w-full flex-col items-center justify-center gap-8'>
			<div className='z-50 mx-auto grid h-[50vh] max-w-screen-2xl grid-cols-1 place-items-center px-8 md:px-16 lg:grid-cols-3 2xl:px-0'>
				<div className='flex flex-col gap-8 lg:col-span-2 lg:gap-16'>
					<img src='/hyperreal.svg' alt='Hyperreal Logo' width={64} height={64} className='h-16 w-16' fetchPriority='high' rel='preload' />
					<h1 className='text-3xl leading-none md:text-5xl xl:text-7xl'>
						We craft <span className='bg-gradient-to-br from-violet-600 to-orange-300 bg-clip-text text-transparent'>creative</span> and{' '}
						<span className='bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent'>efficient</span> web solutions anyone can{' '}
						<span className='bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent'>love</span>.
					</h1>
				</div>
				<div></div>
			</div>
			<div className='relative z-50 w-full'>
				<Marquee pauseOnHover className='[--duration:30s]'>
					{data.map((item, index) => (
						<div
							key={index}
							className='flex aspect-video w-[128px] flex-col items-center justify-center gap-8 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800 md:w-[256px] lg:mx-2 xl:w-[512px]'>
							<video autoPlay loop muted playsInline preload='meta' className='h-full w-full'>
								<source src={item.video} width={1280} height={720} />
							</video>
						</div>
					))}
				</Marquee>
				<div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black'></div>
				<div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black'></div>
			</div>
			<img src='/aurora.avif' alt='Aurora Backdrop' className='absolute left-0 top-0 -z-[0] w-full max-w-screen-2xl object-cover opacity-20' />
		</section>
	);
}
