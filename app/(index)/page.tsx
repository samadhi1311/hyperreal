'use client';

import Features from '@/components/features';
import PageWrapper from '@/components/ui/page-wrapper';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import Pricing from '@/components/pricing';
import Section from '@/components/ui/section';

export default function Home() {
	return (
		<PageWrapper>
			<Section>
				<Hero />

				<Features />

				<Pricing />

				<FAQ />
			</Section>
		</PageWrapper>
	);
}
