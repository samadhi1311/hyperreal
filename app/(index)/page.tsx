'use client';

import Features from '@/components/features';
import PageWrapper from '@/components/ui/page-wrapper';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import Pricing from '@/components/pricing';

export default function Home() {
	return (
		<PageWrapper>
			<Hero />

			<Features />

			<Pricing />

			<FAQ />
		</PageWrapper>
	);
}
