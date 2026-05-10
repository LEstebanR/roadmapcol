import { GTM, GTMNoscript } from '@/components/gtm'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { CONTACT } from '@/lib/data'
import { images } from '@/lib/images'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import './globals.css'

const isProduction = process.env.NODE_ENV === 'production'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteDescription =
  'Discover unforgettable tours in Medellín, Antioquia and Colombia. Adventure, culture and nature experiences designed for you.'
const siteTitle = 'Road Map Col — Tours in Colombia'
const ogImageUrl =
  'https://res.cloudinary.com/lesteban/image/upload/w_1200,h_630,c_pad,b_white/v1748229585/roadmap/road_map_sin_fondo_atjeji.png'

export const metadata: Metadata = {
  description: siteDescription,
  metadataBase: new URL('https://roadmapcol.com'),
  openGraph: {
    images: [
      { alt: 'Road Map Col', height: 630, url: ogImageUrl, width: 1200 },
    ],
    locale: 'en_US',
    siteName: 'Road Map Col',
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
    images: [ogImageUrl],
    title: siteTitle,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {isProduction && <GTM />}
      <body
        className={` ${geistSans.variable} ${geistMono.variable} grid min-h-dvh w-full grid-rows-[auto_1fr_auto] antialiased`}
      >
        {isProduction && <GTMNoscript />}
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
        <Analytics />

        {/* Botón flotante de WhatsApp */}
        <Link
          href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hello, I am from roadmapcol.com and I would like to get more information.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-6 bottom-12 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 md:hidden"
        >
          <Image src={images.whatsapp} alt="WhatsApp" width={28} height={28} />
        </Link>
      </body>
    </html>
  )
}
