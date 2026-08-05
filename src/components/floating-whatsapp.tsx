'use client'

import { CONTACT, TOURS } from '@/lib/data'
import { images } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function FloatingWhatsApp() {
  const pathname = usePathname()
  const tour = TOURS.find((t) => t.href === pathname)

  const message = tour
    ? `Hello, I am from roadmapcol.com and I would like to get more information about the ${tour.title} tour.`
    : 'Hello, I am from roadmapcol.com and I would like to get more information.'

  return (
    <Link
      href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-12 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <Image src={images.whatsapp} alt="WhatsApp" width={28} height={28} />
    </Link>
  )
}
