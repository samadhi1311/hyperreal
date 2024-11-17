'use client';

import { H1, P2, P3 } from '@/components/ui/typography';

export default function Footer() {
	return (
		<div className='relative h-[80vh]' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
			<div className='relative -top-[100vh] h-[calc(100vh+80vh)]'>
				<div className='sticky top-[calc(100vh-80vh)] h-[80vh]'>
					<footer className='grains flex h-full w-full flex-col items-center justify-around'>
						<div className='absolute top-0 -z-20 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-800 via-violet-600 to-orange-600'></div>
						<div className='absolute bottom-0 -z-10 h-full w-full bg-gradient-to-t from-black'></div>
						<div className=''>
							<H1 className='funnel-display'>hyperreal</H1>
						</div>
						<div className='grid w-full grid-cols-2 gap-8 px-4 md:grid-cols-4 md:gap-4'>
							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Links</P3>
									<hr className='pb-2' />
									<P2 className='cursor-pointer py-1'>Home</P2>
									<P2 className='cursor-pointer py-1'>Work</P2>
									<P2 className='cursor-pointer py-1'>About</P2>
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Get in touch</P3>
									<hr className='pb-2' />
									<P2 className='cursor-pointer py-1'>WhatsApp</P2>
									<P2 className='cursor-pointer py-1'>Contact</P2>
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-full min-w-[120px] max-w-[200px] space-y-2'>
									<P3>Legal</P3>
									<hr className='pb-2' />
									<P2 className='cursor-pointer py-1'>Pricing</P2>
									<P2 className='cursor-pointer py-1'>Terms and Conditions</P2>
									<P2 className='cursor-pointer py-1'>Privacy Policy</P2>
								</ul>
							</div>

							<div className='flex items-start justify-center'>
								<ul className='w-[200px] space-y-2'>
									<P3>Socials</P3>
									<hr className='pb-2' />
									<P2 className='cursor-pointer py-1'>Instagram</P2>
									<P2 className='cursor-pointer py-1'>Facebook</P2>
								</ul>
							</div>
						</div>

						<div className=''>
							<P3>&copy; 2024 hyperreal, All Rights Reserved.</P3>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
}
