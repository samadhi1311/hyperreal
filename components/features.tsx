'use client';

import { motion } from 'motion/react';
import { GrTechnology } from 'react-icons/gr';
import { GrFingerPrint } from 'react-icons/gr';
import { LuSparkles } from 'react-icons/lu';
import { PiHandHeartBold } from 'react-icons/pi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import Section from '@/components/ui/section';

function FeatureItem({ icon, title, description, id }: { icon: React.ReactNode; title: string; description: string; id: string }) {
	return (
		<motion.div
			id={id}
			className='flex flex-col gap-8 rounded-lg'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: [0, 1],
				y: [50, 0],
				transition: {
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
				},
			}}>
			<span className='flex size-8 items-center justify-center rounded-full bg-white md:size-12'>{icon}</span>

			<div className='flex flex-col gap-2'>
				<h3 className='font-medium md:mb-2 md:text-2xl'>{title}</h3>
				<p className='text-balance text-sm text-white/60 md:text-base'>{description}</p>
			</div>
		</motion.div>
	);
}

export default function Features() {
	return (
		<Section>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{
					opacity: [0, 1],
					x: [-50, 0],
					transition: {
						duration: 0.5,
						ease: [0.645, 0.045, 0.355, 1],
					},
				}}>
				<p className='mb-2 text-xs uppercase text-white/60'>unmatched deliverables</p>
				<h2 className='text-3xl font-medium lg:text-5xl'>What we offer</h2>
			</motion.div>
			<div className='mx-auto mt-16 grid gap-x-24 gap-y-16 md:grid-cols-2 lg:mt-20'>
				<FeatureItem
					id='1'
					icon={<GrTechnology className='size-6 text-black md:size-8' />}
					title='Custom-Built Digital Destinations'
					description='From simple, elegant static sites to dynamic, full-fledged e-commerce platforms, we bring your vision to life with custom web development tailored to your business needs.'
				/>

				<FeatureItem
					id='2'
					icon={<GrFingerPrint className='size-6 text-black md:size-8' />}
					title='Unique Web Design'
					description='Stand out from the crowd with our creative, one-of-a-kind web designs. We craft visually stunning, user-friendly sites that reflect your brand’s personality and values.'
				/>

				<FeatureItem
					id='3'
					icon={<LuSparkles className='size-6 text-black md:size-8' />}
					title='Brand Identity Enhancement'
					description='Beyond web design, we work with you to enhance and strengthen your brand identity, ensuring your online presence is both memorable and impactful.'
				/>

				<FeatureItem
					id='4'
					icon={<PiHandHeartBold className='size-6 text-black md:size-8' />}
					title='Lifetime Support and Maintenance'
					description='Our commitment doesn’t end at launch. We provide lifetime support to keep your website updated, secure, and running smoothly, so you can focus on your business.'
				/>

				<FeatureItem
					id='5'
					icon={<AiOutlineCloudServer className='size-7 text-black md:size-10' />}
					title='Fast, Reliable Hosting'
					description='We host your website on our high-speed servers to ensure fast load times and maximum uptime, giving your visitors a seamless browsing experience.'
				/>
			</div>
		</Section>
	);
}
