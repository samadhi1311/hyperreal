'use client';

import Footer from '@/components/footer';
import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import { H2, H3, H4, P2 } from '@/components/ui/typography';

export default function PrivacyPolicy() {
	function ConditionItem({ title, description }: { title: React.ReactNode; description: React.ReactNode }) {
		return (
			<div className='mt-4 flex flex-col gap-2'>
				<H3>{title}</H3>
				<P2 className='text-pretty text-justify'>{description}</P2>
			</div>
		);
	}

	return (
		<>
			<PageWrapper>
				<Section>
					<div className='mx-auto max-w-prose space-y-8'>
						<div>
							<H2>Terms & Conditions</H2>
							<P2 className='mt-4 text-white/60'>
								Last updated: <span className='font-medium'>January 02, 2025</span>
							</P2>
						</div>

						<div className='mt-16 space-y-8'>
							<ConditionItem
								title='01. Introduction'
								description="At 'hyperreal', we take your privacy seriously and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard data collected through our website."
							/>

							<div className='mt-4 flex flex-col gap-2'>
								<H3>02. Information We Collect</H3>
								<H4>a. Anonymous Data</H4>
								<P2 className='text-pretty text-justify'>We collect anonymous user data to monitor website performance and improve our services. This data may include:</P2>
								<ul className='list-disc pl-8'>
									<li>Browser type and version</li>
									<li>Pages visited on our website</li>
									<li>Time spent on the website</li>
								</ul>
								<P2 className='text-pretty text-justify'>This information does not identify individual users and is used solely for analytical purposes.</P2>

								<H4 className='mt-4'>b. Personal Data via Contact Form</H4>
								<P2>When you use the contact form on our website, we collect the following information:</P2>
								<ul className='list-disc pl-8'>
									<li>First Name</li>
									<li>Last Name</li>
									<li>Email Address</li>
									<li>Phone Number</li>
								</ul>
								<P2 className='text-pretty text-justify'>
									This information is voluntarily provided by you and is used to respond to inquiries and provide information about our web development services.
								</P2>
							</div>

							<div className='mt-4 flex flex-col gap-2'>
								<H3>03. How We Use Your Information</H3>
								<P2 className='text-pretty text-justify'>Anonymous Data: Used for website analytics to understand performance and enhance user experience.</P2>
								<P2 className='text-pretty text-justify'>
									Personal Data: Used to contact you in response to inquiries submitted through the contact form and to discuss potential projects or collaborations.
								</P2>
							</div>

							<ConditionItem
								title='04. Data Sharing'
								description='We do not share, sell, or rent your personal information to third parties. Anonymous data collected for analytics purposes may be processed by trusted third-party services.'
							/>

							<ConditionItem
								title='05. Data Security'
								description='We employ industry-standard practices to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.'
							/>

							<div className='mt-4 flex flex-col gap-2'>
								<H3>06. Your Rights</H3>
								<P2 className='text-pretty text-justify'>You have the right to:</P2>
								<ul className='list-disc pl-8'>
									<li>Access the personal data we hold about you.</li>
									<li>Request corrections to your personal information.</li>
									<li>Request deletion of your personal data, subject to legal or operational requirements.</li>
								</ul>
							</div>

							<ConditionItem
								title='07. Changes to this Privacy Policy'
								description='We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.'
							/>

							<ConditionItem
								title='Contact Us'
								description={
									<span>
										If you have any questions or concerns regarding this Privacy Policy, please contact us at{' '}
										<a href='mailto:hello@hyperreal.cloud' className='underline'>
											hello@hyperreal.cloud
										</a>
										.
									</span>
								}
							/>
						</div>
					</div>
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
