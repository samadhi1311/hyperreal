'use client';

import PageWrapper from '@/components/ui/page-wrapper';
import Section from '@/components/ui/section';

import Footer from '@/components/footer';
import WorkItem from './work-item';
import { H1, P1 } from '@/components/ui/typography';

export default function Work() {
	return (
		<>
			<PageWrapper>
				<Section>
					<H1>Work</H1>
					<P1>Checkout some of the projects we have worked on.</P1>
				</Section>
				<Section>
					<WorkItem title='Hari Builders (Pvt) Ltd.' description='A primier construction company based in Sri Lanka since 2011.' video='/haribuilders.mp4' url='https://haribuilders.lk' />
				</Section>

				<Section>
					<WorkItem title='COLORSPECK' description='COLORSPECK sells handcrafts worldwide.' video='/colorspeck.mp4' url='https://colorspeck.lk' />
				</Section>

				<Section>
					<WorkItem title='hyperbooks.' description='A platform to manage and export your invoices beautifully.' video='/hyperbooks.mp4' url='https://hyperbooks.hyperreal.cloud' />
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
