import { TOURS } from '@/lib/data'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://roadmapcol.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { changeFrequency: 'weekly', lastModified, priority: 1, url: BASE_URL },
    {
      changeFrequency: 'weekly',
      lastModified,
      priority: 0.9,
      url: `${BASE_URL}/tours`,
    },
    {
      changeFrequency: 'monthly',
      lastModified,
      priority: 0.7,
      url: `${BASE_URL}/personalize`,
    },
  ]

  const uniqueTourHrefs = [...new Set(TOURS.map((tour) => tour.href))]
  const tourRoutes: MetadataRoute.Sitemap = uniqueTourHrefs.map((href) => ({
    changeFrequency: 'monthly',
    lastModified,
    priority: 0.8,
    url: `${BASE_URL}${href}`,
  }))

  return [...staticRoutes, ...tourRoutes]
}
