import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://roadmapcol.com',
    rules: { allow: '/', userAgent: '*' },
    sitemap: 'https://roadmapcol.com/sitemap.xml',
  }
}
