'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';
import Section from '@/components/ui/section';
import { H2, H4, P2 } from '@/components/ui/typography';

type FAQItemProps = {
	icon?: React.ReactNode;
	question: string;
	answer: string;
};

const answerAnimation = {
	initial: {
		height: 0,
		opacity: 0,
	},
	animate: {
		height: 'auto',
		opacity: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
	exit: {
		height: 0,
		opacity: 0,
		transition: { duration: 0.5, ease: 'easeIn' },
	},
};

const paragraphAnimation = {
	initial: {
		y: -20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5 },
	},
	exit: {
		y: -20,
		opacity: 0,
		transition: { duration: 0.5 },
	},
};

function FAQItem({ question, answer }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div className='mx-auto w-full transition-all duration-500 ease-in-out'>
			<button className='flex w-full cursor-pointer items-center justify-between' onClick={() => setIsOpen(!isOpen)}>
				<H4 className='cursor-pointer'>{question}</H4>
				<motion.span
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.1 : 1,
					}}
					transition={{ duration: 0.3 }}
					className='flex-shrink-0'>
					<FaChevronDown className='h-4 w-4' />
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div {...answerAnimation}>
						<div className='pb-4 pt-2'>
							<motion.p className='text-pretty text-sm text-white/60 md:text-base' {...paragraphAnimation}>
								{answer}
							</motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function FAQ() {
	return (
		<Section>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<motion.div
					className='w-full space-y-4'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{
						opacity: [0, 1],
						x: [-50, 0],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<H2 className='text-3xl font-medium md:text-5xl'>Frequently Asked Questions</H2>
					<P2 className='max-w-lg'>You might have the same questions. So, we answered them before you ask. If you have any further questions, please contact us.</P2>
				</motion.div>
				<motion.div
					className='w-full space-y-8 opacity-0'
					initial={{ opacity: 0, x: 50 }}
					whileInView={{
						opacity: [0, 1],
						x: [50, 0],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<FAQItem
						question='What types of websites do you build?'
						answer='We create everything from simple static websites like portfolios to full-scale e-commerce platforms, all tailored to meet your unique business needs.'
					/>

					<FAQItem question='Will you host my website?' answer='Optional but absolutely. We offer fast, reliable hosting services to give your website maximum speed and uptime.' />

					<FAQItem
						question='Can you help with the design and branding?'
						answer='Of course! We specialize in unique web designs and can help strengthen your brand identity for a consistent online presence.'
					/>

					<FAQItem
						question='How long does it take to build a website?'
						answer='The timeline depends on the complexity of the project, but we work efficiently to deliver your website on time without compromising quality.'
					/>

					<FAQItem question='Will my website be mobile-friendly?' answer='Yes, all the websites we build are fully responsive and optimized for mobile, tablet, and desktop devices.' />

					<FAQItem
						question='Can you help improve my existing website?'
						answer='Definitely! We can update and optimize your current website to improve its performance, design, and functionality.'
					/>
				</motion.div>
			</div>
		</Section>
	);
}
