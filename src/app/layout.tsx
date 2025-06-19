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
      <body
        className={` ${geistSans.variable} ${geistMono.variable} grid min-h-dvh w-full grid-rows-[auto_1fr_auto] antialiased`}
      >
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
