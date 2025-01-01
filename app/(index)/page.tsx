'use client';

import Features from '@/components/features';
import PageWrapper from '@/components/ui/page-wrapper';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import { Pricing } from '@/components/pricing';
import Footer from '@/components/footer';
import TechStack from '@/components/tech-stack';

export default function Home() {
	return (
		<>
			<Hero />
			<PageWrapper>
				<Features />
				<Pricing />
				<FAQ />
				<TechStack />
			</PageWrapper>
			<Footer />
		</>
	);
}
