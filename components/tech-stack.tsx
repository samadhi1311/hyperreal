'use client';

import Section from './ui/section';
import { motion } from 'motion/react';
import { H2, P4 } from './ui/typography';
import Marquee from './ui/marquee';

export default function TechStack() {
	const data = [
		{
			logo: '/tech/aws.svg',
			title: 'Amazon Web Services',
		},
		{
			logo: '/tech/cloudflare.svg',
			title: 'Cloudflare',
		},
		{
			logo: '/tech/firebase.svg',
			title: 'Firebase',
		},
		{
			logo: '/tech/gcp.svg',
			title: 'Google Cloud Platform',
		},
		{
			logo: '/tech/hono.svg',
			title: 'Hono',
		},
		{
			logo: '/tech/nextjs.svg',
			title: 'Next.js',
		},
		{
			logo: '/tech/nodejs.svg',
			title: 'Node.js',
		},
		{
			logo: '/tech/react.svg',
			title: 'React',
		},
		{
			logo: '/tech/workers.svg',
			title: 'Cloudflare Workers',
		},
	];
	return (
		<Section>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				viewport={{ once: true }}
				whileInView={{
					opacity: [0, 1],
					x: [-50, 0],
					transition: {
						duration: 0.5,
						ease: [0.645, 0.045, 0.355, 1],
					},
				}}
				className='pt-16'
				id='hyperreal-features'>
				<P4 className='mb-2'>unmatched deliverables</P4>
				<H2>Powered by the best</H2>
			</motion.div>
			<div className='relative mx-auto mt-16'>
				<Marquee className='[--duration:50s]'>
					{data.map((item, index) => (
						<div key={index} className='mx-4 md:mx-8 lg:mx-16'>
							<img src={item.logo} alt={item.title} className='h-16 scale-100 transition-transform duration-300 hover:scale-125' />
						</div>
					))}
				</Marquee>
				<div className='absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent' />
				<div className='absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent' />
			</div>
		</Section>
	);
}
