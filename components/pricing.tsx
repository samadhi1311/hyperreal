'use client';

import Section from '@/components/ui/section';
import { LuCheck, LuX } from 'react-icons/lu';
import { Card } from './card';
import { motion } from 'motion/react';
import { H2, H3, P2, P4 } from '@/components/ui/typography';

type TableRowProps = {
	title: string;
	core: React.ReactNode;
	business: React.ReactNode;
	enterprise: React.ReactNode;
};

export default function Pricing() {
	function TableRow({ title, core, business, enterprise }: TableRowProps) {
		return (
			<motion.tr
				className='border-b border-b-white/20 transition-colors duration-500 ease-in-out hover:bg-white/5'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{
					opacity: [0, 1],
					y: [20, 0],
					transition: {
						duration: 1,
						ease: [0.645, 0.045, 0.355, 1],
					},
				}}>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-5 align-middle'>{title}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-5 align-middle'>{core}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-5 align-middle'>{business}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-5 align-middle'>{enterprise}</td>
			</motion.tr>
		);
	}

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
				<P4 className='mb-2'>best on the market</P4>
				<H2>Pricing</H2>
			</motion.div>
			<div className='mt-16 flex flex-col gap-6 lg:flex-row lg:gap-4'>
				<motion.div
					className='h-full w-full'
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{
						opacity: [0, 1],
						scale: [0.9, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='flex flex-col space-y-2 p-8'>
							<H3 className='text-xl font-medium leading-none tracking-tight md:text-2xl'>Core</H3>
							<P2 className=''>Quick, reliable solutions to establish your online presence.</P2>
						</div>
						<div className='p-8 pt-0'>
							<P2 className='mt-4'>Starting from</P2>
							<span className='text-3xl font-semibold md:text-5xl'>LKR 32, 000</span>
						</div>
					</Card>
				</motion.div>
				<motion.div
					className='h-full w-full'
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{
						opacity: [0, 1],
						scale: [0.9, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='flex flex-col space-y-2 p-8'>
							<H3 className='text-xl font-medium leading-none tracking-tight md:text-2xl'>Business</H3>
							<P2 className=''>Complete e-commerce solution to grow your business.</P2>
						</div>
						<div className='p-8 pt-0'>
							<P2 className='mt-4'>Starting from</P2>
							<span className='text-3xl font-semibold md:text-5xl'>LKR 56, 000</span>
						</div>
					</Card>
				</motion.div>
				<motion.div
					className='h-full w-full'
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{
						opacity: [0, 1],
						scale: [0.9, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='flex flex-col space-y-2 p-8'>
							<H3 className='text-xl font-medium leading-none tracking-tight md:text-2xl'>Enterprise</H3>
							<P2 className=''>Advanced, tailor-made web solution for your company.</P2>
						</div>
						<div className='p-8 pt-0'>
							<P2 className='mt-4'>Starting from</P2>
							<span className='text-3xl font-semibold md:text-5xl'>LKR 122, 000</span>
						</div>
					</Card>
				</motion.div>
			</div>
			<div className='relative mt-8 w-full overflow-hidden'>
				<table className='mt-10 w-full min-w-[420px] caption-bottom border-0'>
					<thead className='[&amp;_tr]:border-b'>
						<tr className='border-b border-white/50'>
							<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'></th>
							<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>Core</th>
							<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>Advanced</th>
							<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle'>Entreprise</th>
						</tr>
					</thead>
					<tbody className='[&amp;_tr:last-child]:border-0 capitalize'>
						<TableRow title='Type' core='Static' business='Dynamic' enterprise='Fully Customizable' />
						<TableRow title='Pages' core='Up to 5' business='Up to 10' enterprise='Up to 50' />
						<TableRow title='Responsive Design' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='SEO Optimization' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='Maintenance' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='Custom Features' core='Limited' business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='Content Management System' core={<LuX className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='Contact Form' core={<LuX className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
						<TableRow title='Payment Integration' core={<LuX className='size-5' />} business={<LuCheck className='size-5' />} enterprise={<LuCheck className='size-5' />} />
					</tbody>
				</table>
			</div>
		</Section>
	);
}
