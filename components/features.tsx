'use client';

import { motion } from 'motion/react';
import { GrTechnology } from 'react-icons/gr';
import { GrFingerPrint } from 'react-icons/gr';
import { LuSparkles } from 'react-icons/lu';
import { PiHandHeartBold } from 'react-icons/pi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import Section from '@/components/ui/section';
import { H2, H3, P2, P4 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

function FeatureItem({ icon, title, description, id, background }: { icon: React.ReactNode; title: string; description: string; id: string; background: string }) {
	return (
		<motion.div
			id={id}
			className='flex flex-col gap-8 rounded-lg'
			initial={{ opacity: 0, y: 50 }}
			viewport={{ once: true }}
			whileInView={{
				opacity: [0, 1],
				y: [50, 0],
				transition: {
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
				},
			}}>
			<span className={cn('flex size-8 items-center justify-center rounded-full bg-gradient-to-br md:size-12', background)}>{icon}</span>

			<div className='flex flex-col gap-2'>
				<H3 className='md:mb-2'>{title}</H3>
				<P2 className='text-white/60'>{description}</P2>
			</div>
		</motion.div>
	);
}

export default function Features() {
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
				<H2>What we offer</H2>
			</motion.div>
			<div className='mx-auto mt-8 grid gap-x-24 gap-y-16 md:grid-cols-2 lg:mt-16'>
				<FeatureItem
					id='1'
					icon={<GrTechnology className='size-6 text-white md:size-8' />}
					background='from-red-600 to-red-400'
					title='Custom-Built Digital Destinations'
					description='From simple, elegant static sites to dynamic, full-fledged e-commerce platforms, we bring your vision to life with custom web development tailored to your business needs.'
				/>

				<FeatureItem
					id='2'
					icon={<GrFingerPrint className='size-6 text-white md:size-8' />}
					background='from-violet-700 to-violet-400'
					title='Unique Web Design'
					description='Stand out from the crowd with our creative, one-of-a-kind web designs. We craft visually stunning, user-friendly sites that reflect your brand’s personality and values.'
				/>

				<FeatureItem
					id='3'
					icon={<LuSparkles className='size-6 text-white md:size-8' />}
					background='from-emerald-600 to-emerald-400'
					title='Tailored Brand Identity'
					description='Beyond web design, we work with you to enhance and strengthen your brand identity, ensuring your online presence is both memorable and impactful.'
				/>

				<FeatureItem
					id='4'
					icon={<PiHandHeartBold className='size-6 text-white md:size-8' />}
					background='from-pink-700 to-pink-400'
					title='Lifetime Support and Maintenance'
					description='Our commitment doesn’t end at launch. We provide lifetime support to keep your website updated, secure, and running smoothly, so you can focus on your business.'
				/>

				<FeatureItem
					id='5'
					icon={<AiOutlineCloudServer className='size-7 text-white md:size-10' />}
					background='from-orange-600 to-orange-400'
					title='Fast, Reliable Hosting'
					description='We host your website on our high-speed servers to ensure fast load times, maximum uptime and ultimate security, giving your visitors a seamless browsing experience.'
				/>
			</div>
		</Section>
	);
}
