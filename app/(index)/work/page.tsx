'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageWrapper from '@/components/ui/page-wrapper';
import { FaChevronDown } from 'react-icons/fa';

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
		transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
	},
	exit: {
		height: 0,
		opacity: 0,
		transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
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
	},
	exit: {
		y: -20,
		opacity: 0,
	},
};

function FAQItem({ question, answer }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div className='flex w-full flex-col gap-1'>
			<button className='flex w-full cursor-pointer items-center justify-between' onClick={() => setIsOpen(!isOpen)}>
				<h3 className='font cursor-pointer md:text-xl'>{question}</h3>
				<motion.span
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.1 : 1,
					}}
					transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}>
					<FaChevronDown className='h-4 w-4' />
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div className='px-4 md:px-8' {...answerAnimation}>
						<motion.p className='text-pretty text-sm text-white/60 md:text-base' {...paragraphAnimation}>
							{answer}
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function Work() {
	return (
		<PageWrapper>
			<section className='mx-auto flex max-w-3xl flex-col gap-8 py-32'>
				<h1 className='py-4 text-2xl font-semibold md:text-4xl'>Frequently Asked Questions</h1>
				<FAQItem
					question='What types of websites can you build?'
					answer='We create everything from simple static websites to full-scale e-commerce platforms, all tailored to meet your unique business needs.'
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
			</section>
		</PageWrapper>
	);
}
