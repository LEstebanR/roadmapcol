import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { CONTACT } from '@/lib/data'
import { images } from '@/lib/images'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import './globals.css'

const GTM_ID = 'GTM-N2ZVJPC2'
const isProduction = process.env.NODE_ENV === 'production'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Road Map Col',
  description: 'Road Map Col',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {isProduction && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}
      <body
        className={` ${geistSans.variable} ${geistMono.variable} grid min-h-dvh w-full grid-rows-[auto_1fr_auto] antialiased`}
      >
        {isProduction && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
        <Analytics />

        {/* Botón flotante de WhatsApp */}
        <Link
          href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hello, I am from roadmapcol.com and I would like to get more information.')}`}
          target="_blank"
          className="fixed right-6 bottom-12 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 md:hidden"
        >
          <Image src={images.whatsapp} alt="WhatsApp" width={28} height={28} />
        </Link>
      </body>
    </html>
  )
}
