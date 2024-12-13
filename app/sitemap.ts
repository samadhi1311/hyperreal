import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://hyperreal.cloud',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://hyperreal.cloud/about',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://hyperreal.cloud/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://hyperreal.cloud/pricing',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://hyperreal.cloud/terms-and-conditions',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://hyperreal.cloud/work',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	];
}
