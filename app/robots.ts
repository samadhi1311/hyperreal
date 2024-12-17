import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/about', '/contact', '/pricing', '/terms-and-conditions', '/work'],
			disallow: [],
		},
		sitemap: 'https://hyperreal.cloud/sitemap.xml',
	};
}
