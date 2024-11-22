'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';
import { H2, H3, P1, P2 } from '@/components/ui/typography';

export default function TermsConditions() {
	function ConditionItem({ title, description }: { title: React.ReactNode; description: React.ReactNode }) {
		return (
			<div className='mt-4 flex flex-col gap-2'>
				<H3>{title}</H3>
				<P1 className='text-pretty text-justify'>{description}</P1>
			</div>
		);
	}

	return (
		<PageWrapper>
			<Section>
				<div className='mx-auto max-w-prose space-y-8'>
					<div>
						<H2>Terms & Conditions</H2>
						<P2 className='mt-4 text-white/60'>
							Last updated: <span className='font-medium'>November 21, 2024</span>
						</P2>
					</div>

					<div className='mt-16 space-y-8'>
						<ConditionItem
							title='01. Introduction'
							description='Welcome to hyperreal. By accessing or using our services, you agree to comply with these Terms and Conditions. Please read them carefully before engaging with us for any project or service.'
						/>

						<ConditionItem
							title='02. Eligibility'
							description='By entering into a service agreement, you confirm that you are legally capable of doing so and agree to provide accurate and complete information about your project requirements. We reserve the right to refuse service or terminate agreements at our discretion.'
						/>

						<ConditionItem
							title='03. Services'
							description='We provide web development, design, and hosting services tailored to your needs. While we strive for perfection, we cannot guarantee that all aspects of the service will meet your expectations if your requirements change mid-project. Revisions and additional requests may incur extra charges.'
						/>

						<ConditionItem
							title='04. Pricing and Payment'
							description='Our service fees are listed in Sri Lankan Rupees (LKR) and US Dollars (USD). A deposit may be required to commence work, with the balance due upon project completion. Payments are accepted via bank transfer, credit card, or other agreed methods. By making a payment, you agree to the terms outlined in our invoice and payment policies.'
						/>

						<ConditionItem
							title='05. Delivery'
							description='Project timelines are agreed upon at the outset. Delivery delays may occur due to unforeseen circumstances or client-side delays in providing required materials or approvals. We are not liable for missed deadlines caused by these factors.'
						/>

						<ConditionItem
							title='06. Revisions and Support'
							description='Our pricing includes a set number of revisions as outlined in the service agreement. Additional revisions beyond this scope may be subject to extra charges. We provide limited post-launch support for bug fixes or adjustments, as specified in the agreement.'
						/>

						<ConditionItem
							title='07. Limitation of Liability'
							description='To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from our services, including but not limited to loss of business or data. Our liability is limited to the amount paid for the service.'
						/>

						<ConditionItem
							title='08. Intellectual Property'
							description='All websites, designs, and deliverables created by our agency remain our property until full payment is received. Upon payment, ownership of the final deliverables transfers to you. However, we retain the right to showcase the work in our portfolio unless otherwise agreed upon.'
						/>

						<ConditionItem
							title='09. Termination'
							description='We reserve the right to terminate a project or service agreement if the client fails to provide required materials, make payments, or comply with these Terms and Conditions. In such cases, payments made are non-refundable. If the project is terminated before substantial progress is made, 70% of the advance payment will be refunded.'
						/>

						<ConditionItem
							title='10. Governing Law'
							description='These Terms and Conditions are governed by the laws of Sri Lanka. Any disputes will be resolved under the jurisdiction of Sri Lanka.'
						/>

						<ConditionItem
							title='11. Changes to Terms and Conditions'
							description='We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and your continued engagement with our services constitutes acceptance of the revised terms.'
						/>

						<ConditionItem
							title='Contact Us'
							description={
								<span>
									If you have questions about these Terms and Conditions, please reach out to us at{' '}
									<a href='mailto:hyperreal89@gmail.com' className='underline'>
										hyperreal89@gmail.com
									</a>
									.
								</span>
							}
						/>
					</div>
				</div>
			</Section>
		</PageWrapper>
	);
}
