'use client';

import { H2, P2 } from '@/components/ui/typography';
import { LuArrowUpRight } from 'react-icons/lu';
import Link from 'next/link';

export default function WorkItem({ title, description, video, url }: { title: string; description: string; video: string; url: string }) {
	return (
		<section className='group'>
			<div className='container'>
				<div className='grid items-center gap-8 lg:grid-cols-2'>
					<div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
						<span className='relative'>
							<H2 className='bg-gradient-to-r from-white to-white bg-clip-text py-1 text-transparent opacity-100 transition-all duration-300 group-hover:opacity-0'>{title}</H2>
							<H2 className='absolute top-0 bg-gradient-to-r from-violet-500 to-orange-300 bg-clip-text py-1 text-transparent opacity-0 transition-all duration-300 group-hover:opacity-100'>
								{title}
							</H2>
						</span>
						<P2 className='mt-4'>{description}</P2>
						<Link href={url} className='mt-4'>
							<button className='flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white transition-colors duration-300 hover:bg-neutral-800'>
								<LuArrowUpRight />
								Visit Website
							</button>
						</Link>
					</div>
					<video autoPlay loop muted playsInline className='object-fit aspect-video max-w-full rounded-md transition-all duration-500 group-hover:scale-105'>
						<source src={video} />
					</video>
				</div>
			</div>
		</section>
	);
}
