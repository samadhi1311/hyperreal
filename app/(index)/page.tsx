'use client';

import Features from '@/components/features';
import PageWrapper from '@/components/ui/page-wrapper';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import Pricing from '@/components/pricing';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<>
			<PageWrapper>
				<Hero />

				<Features />

				<Pricing />

				<FAQ />
			</PageWrapper>
			<Footer />
		</>
	);
}
