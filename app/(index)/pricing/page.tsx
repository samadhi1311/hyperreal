'use client';

import { Card } from '@/components/card';
import { PricingTable } from '@/components/pricing';
import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import { P4, H2, H3, P2, P1 } from '@/components/ui/typography';
import { motion } from 'motion/react';
import { LuSprout } from 'react-icons/lu';

type TableRowProps = {
	technology?: string;
	service: string;
	free: React.ReactNode;
	extra: React.ReactNode;
};

export default function PricingPage() {
	function TableRow({ technology, service, free, extra }: TableRowProps) {
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
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 align-middle md:p-4'>{technology}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 align-middle md:p-4'>{service}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 text-right align-middle md:p-4'>{free}</td>
				<td className='[&amp;:has([role=checkbox])]:pr-0 p-2 text-right align-middle md:p-4'>{extra}</td>
			</motion.tr>
		);
	}
	return (
		<PageWrapper>
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
				<div className='my-16 flex flex-col gap-6 lg:flex-row lg:gap-4'>
					<motion.div
						className='h-full w-full'
						initial={{ opacity: 0 }}
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
				<PricingTable />
			</Section>
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
					<P4 className='mb-2'>also best on the market</P4>
					<H2>Hosting</H2>
				</motion.div>
				<div className='my-16 flex flex-col gap-6 lg:flex-row lg:gap-4'>
					<motion.div
						className='h-full w-full'
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							transition: {
								duration: 0.5,
								ease: [0.645, 0.045, 0.355, 1],
							},
						}}>
						<Card>
							<div className='flex flex-col space-y-2 overflow-hidden p-8'>
								<H3 className='w-fit bg-gradient-to-br from-violet-500 to-orange-400 bg-clip-text text-transparent'>Core</H3>
								<P2 className=''>Reliable hosting for your online presence.</P2>
							</div>
							<div className='p-8 pt-0'>
								<P2 className='mt-4'>Starting from just</P2>
								<H2>LKR 1, 300/month</H2>
								<P2>or LKR 15, 600/year</P2>
							</div>
						</Card>
					</motion.div>
					<motion.div
						className='h-full w-full'
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							transition: {
								duration: 0.5,
								ease: [0.645, 0.045, 0.355, 1],
							},
						}}>
						<Card>
							<div className='flex flex-col space-y-2 p-8'>
								<H3 className='w-fit bg-gradient-to-tl from-violet-500 to-orange-400 bg-clip-text text-transparent'>Business</H3>
								<P2 className=''>Complete e-commerce solution to grow your business.</P2>
							</div>
							<div className='p-8 pt-0'>
								<P2 className='mt-4'>Starting from just</P2>
								<H2>LKR 2, 400/month</H2>
								<P2>or LKR 28, 800/year</P2>
							</div>
						</Card>
					</motion.div>
				</div>
				<div className='relative mt-16 w-full overflow-hidden'>
					<table className='w-full caption-bottom border-0'>
						<thead className='[&amp;_tr]:border-b'>
							<tr className='border-b border-white/50'>
								<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-center align-middle md:px-4'></th>
								<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-left align-middle md:px-4'>Service</th>
								<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-center align-middle md:px-4'>Included</th>
								<th className='[&amp;:has([role=checkbox])]:pr-0 h-12 p-2 text-center align-middle md:px-4'>Extra usage*</th>
							</tr>
						</thead>
						<tbody className='[&amp;_tr:last-child]:border-0 capitalize'>
							<TableRow technology='Domain' service='' free='Yes' extra='' />
							<tr>
								<td className='h-8'></td>
							</tr>
							<TableRow technology='Database' service='Reads' free='750, 000' extra='100, 000' />
							<TableRow technology='' service='Row Writes' free='300, 000' extra='50, 000' />
							<TableRow technology='' service='Row Deletes' free='300, 000' extra='50, 000' />
							<TableRow technology='' service='Disk Space' free='1 GB' extra='500 MB' />
							<TableRow technology='' service='Network Bandwidth' free='5 GB' extra='1 GB' />
							<tr>
								<td className='h-8'></td>
							</tr>
							<TableRow technology='Storage' service='Download Operations' free='900, 000' extra='5, 000' />
							<TableRow technology='' service='Upload Operations' free='100, 000' extra='5, 000' />
							<TableRow technology='' service='Disk Space' free='5 GB' extra='1 GB' />
							<TableRow technology='' service='Network Bandwidth' free='15 GB' extra='1 GB' />
							<tr>
								<td className='h-8'></td>
							</tr>
							<TableRow technology='Authentication' service='Monthly Active Users' free='24, 000' extra='100' />
							<tr>
								<td className='h-8'></td>
							</tr>
							<TableRow technology='Automated Emails' service='Outbound Operations' free='5, 000' extra='250' />
							<tr>
								<td className='h-8'></td>
							</tr>
							<TableRow technology='Web Traffic' service='Network Bandwidth' free='100 GB' extra='10 GB' />
						</tbody>
						<caption className='mt-8 text-left text-sm italic text-white/60'>* Usage beyond the included is claculated per unit which costs LKR 100.</caption>
					</table>
					<motion.div className='mt-16 h-full w-full'>
						<Card>
							<div className='p-8 md:p-12'>
								<LuSprout className='size-16' />
								<P1 className='mt-4 text-2xl'>
									The Free tier can handle at least <span className='funnel-display bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>7,500</span> users
									per month or <span className='funnel-display bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent'>250</span> users a day in a real world
									scenario.
								</P1>
							</div>
						</Card>
					</motion.div>
				</div>
			</Section>
		</PageWrapper>
	);
}
