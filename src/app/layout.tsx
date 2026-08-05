import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { GTM, GTMNoscript } from '@/components/gtm'
import { JsonLd } from '@/components/json-ld'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { DEFAULT_OG_IMAGE, OG_HEIGHT, OG_WIDTH } from '@/lib/og'
import { organizationSchema } from '@/lib/structured-data'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const isProduction = process.env.NODE_ENV === 'production'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const siteDescription =
  'Discover unforgettable tours in Medellín, Antioquia and Colombia. Adventure, culture and nature experiences designed for you.'
const siteTitle = 'Road Map Col — Tours in Colombia'

export const metadata: Metadata = {
  description: siteDescription,
  metadataBase: new URL('https://roadmapcol.com'),
  openGraph: {
    description: siteDescription,
    images: [
      {
        alt: 'Road Map Col',
        height: OG_HEIGHT,
        url: DEFAULT_OG_IMAGE,
        width: OG_WIDTH,
      },
    ],
    locale: 'en_US',
    siteName: 'Road Map Col',
    title: siteTitle,
    type: 'website',
    url: 'https://roadmapcol.com',
  },
  title: {
    default: siteTitle,
    template: '%s | Road Map Col',
  },
  twitter: {
    card: 'summary_large_image',
    description: siteDescription,
    images: [DEFAULT_OG_IMAGE],
    title: siteTitle,
  },
  verification: {
    google: 'y0ILgwAWbWcPcW8gLNfy_9ePypx4-29fe5HTopErX3A',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      {isProduction && <GTM />}
      <body
        className={`${inter.variable} grid min-h-dvh w-full grid-rows-[auto_1fr_auto] font-sans antialiased`}
      >
        {isProduction && <GTMNoscript />}
        <Header />
        <div className="w-full min-w-0">{children}</div>
        <Footer />
        <Analytics />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
