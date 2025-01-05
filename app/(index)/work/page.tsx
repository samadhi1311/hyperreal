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
					<WorkItem
						title='Hari Builders (Pvt) Ltd.'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.'
						video='/haribuilders.mp4'
						url='https://haribuilders.lk'
					/>
				</Section>

				<Section>
					<WorkItem title='COLORSPECK' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.' video='/colorspeck.mp4' url='https://colorspeck.lk' />
				</Section>

				<Section>
					<WorkItem
						title='hyperbooks.'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.'
						video='/hyperbooks.mp4'
						url='https://hyperbooks.hyperreal.cloud'
					/>
				</Section>
			</PageWrapper>
			<Footer />
		</>
	);
}
