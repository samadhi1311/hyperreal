'use client';

import Section from '@/components/ui/section';
import { LuCheck, LuX } from 'react-icons/lu';
import { TbServerBolt } from 'react-icons/tb';
import { Card } from './card';
import { motion } from 'motion/react';
import { H2, H3, P1, P2, P4 } from '@/components/ui/typography';
import Link from 'next/link';

export type TableRowProps = {
	title: string;
	core: React.ReactNode;
	business: React.ReactNode;
};

function TableRow({ title, core, business }: TableRowProps) {
	return (
		<motion.tr
			className='border-b border-b-white/20 transition-colors duration-500 ease-in-out hover:bg-white/5'
			initial={{ opacity: 0, y: 20 }}
			viewport={{ once: true }}
			whileInView={{
				opacity: [0, 1],
				y: [20, 0],
				transition: {
					duration: 1,
					ease: [0.645, 0.045, 0.355, 1],
				},
			}}>
			<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 align-middle md:p-4'>{title}</td>
			<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 align-middle md:p-4'>{core}</td>
			<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 align-middle md:p-4'>{business}</td>
		</motion.tr>
	);
}

function PricingTable() {
	return (
		<table className='w-full caption-bottom border-0'>
			<thead className='[&amp;_tr]:border-b'>
				<tr className='border-b border-white/50'>
					<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-left align-middle md:px-4'></th>
					<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-left align-middle md:px-4'>Core</th>
					<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-left align-middle md:px-4'>Business</th>
				</tr>
			</thead>
			<tbody className='[&amp;_tr:last-child]:border-0 capitalize'>
				<TableRow title='Type' core='Static' business='Dynamic' />
				<TableRow title='Pages' core='Up to 8' business='Up to 20' />
				<TableRow title='Responsive Design' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} />
				<TableRow title='SEO Optimization' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} />
				<TableRow title='Maintenance' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} />
				<TableRow title='Contact Form' core={<LuCheck className='size-5' />} business={<LuCheck className='size-5' />} />
				<TableRow
					title='Custom Features'
					core={
						<span className='flex items-center gap-1'>
							<LuCheck className='size-5' />*
						</span>
					}
					business={<LuCheck className='size-5' />}
				/>
				<TableRow title='Content Management System' core={<LuX className='size-5' />} business={<LuCheck className='size-5' />} />
				<TableRow title='Payment Integration' core={<LuX className='size-5' />} business={<LuCheck className='size-5' />} />
			</tbody>
			<caption className='mt-8 text-left text-sm italic text-white/60'>* Some advanced features may require to upgrade to Business package</caption>
		</table>
	);
}

function Pricing() {
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
				}}>
				<P4 className='mb-2'>best on the market</P4>
				<H2>Pricing</H2>
			</motion.div>
			<div className='mt-16 flex flex-col gap-6 lg:flex-row lg:gap-4'>
				<motion.div
					className='h-full w-full'
					initial={{ opacity: 0 }}
					viewport={{ once: true }}
					whileInView={{
						opacity: [0, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='absolute right-0 top-0 overflow-hidden rounded-bl-2xl bg-white/5 p-4 backdrop-blur-[1px]'>
							<P4 className='bg-gradient-to-r from-violet-500 to-orange-400 bg-clip-text font-medium tracking-widest text-transparent'>Limited-time Offer</P4>
						</div>
						<div className='flex flex-col space-y-2 overflow-hidden p-8'>
							<H3 className='w-fit bg-gradient-to-br from-violet-500 to-orange-400 bg-clip-text text-transparent'>Core</H3>
							<P2 className=''>Quick, reliable solutions to establish your online presence.</P2>
						</div>
						<div className='p-8 pt-0'>
							<P2 className='mt-4'>
								Starting from <span className='line-through decoration-white/60'>LKR 42, 000</span>
							</P2>
							<H2>LKR 34, 000</H2>
						</div>
					</Card>
				</motion.div>
				<motion.div
					className='h-full w-full'
					initial={{ opacity: 0 }}
					viewport={{ once: true }}
					whileInView={{
						opacity: [0, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='absolute right-0 top-0 overflow-hidden rounded-bl-2xl bg-white/5 p-4 backdrop-blur-[1px]'>
							<P4 className='bg-gradient-to-r from-violet-500 to-orange-400 bg-clip-text font-medium tracking-widest text-transparent'>Limited-time Offer</P4>
						</div>
						<div className='flex flex-col space-y-2 p-8'>
							<H3 className='w-fit bg-gradient-to-tl from-violet-500 to-orange-400 bg-clip-text text-transparent'>Business</H3>
							<P2 className=''>Complete e-commerce solution to grow your business.</P2>
						</div>
						<div className='p-8 pt-0'>
							<P2 className='mt-4'>
								Starting from <span className='line-through decoration-white/60'>LKR 82, 000</span>
							</P2>
							<H2>LKR 72, 000</H2>
						</div>
					</Card>
				</motion.div>
			</div>
			<div className='relative mt-16 w-full overflow-hidden'>
				<PricingTable />
				<motion.div
					className='mt-16 h-full w-full'
					initial={{ opacity: 0 }}
					viewport={{ once: true }}
					whileInView={{
						opacity: [0, 1],
						transition: {
							duration: 0.5,
							ease: [0.645, 0.045, 0.355, 1],
						},
					}}>
					<Card>
						<div className='p-8 md:p-12'>
							<TbServerBolt className='size-8' />
							<P1 className='mt-4 text-lg'>
								For more details on how pricing works at <span className='bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>hyperreal</span>, visit our{' '}
								<Link href='/pricing' className='underline'>
									pricing
								</Link>{' '}
								page.
							</P1>
						</div>
					</Card>
				</motion.div>
			</div>
		</Section>
	);
}

export { Pricing, PricingTable };
