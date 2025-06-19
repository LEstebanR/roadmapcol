import { CONTACT } from '@/lib/data'
import { images } from '@/lib/images'
import { Heart, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-1 w-full bg-gray-600 py-4">
      <div className="container mx-auto px-4 md:w-6/12 md:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Image
              src={images.logo}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-sm"
            />
            <p className="text-slate-300">
              Discover the magic of Colombia with our unique and personalized
              experiences.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold text-white">Links</p>
            <div className="flex flex-col gap-1">
              <Link
                href="#services"
                className="text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                Home
              </Link>

              <Link
                href="#clients"
                className="text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                Tours{' '}
              </Link>
              <Link
                href="#clients"
                className="text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                Accommodation
              </Link>
              <Link
                href="#clients"
                className="text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                Personalize your experience
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold text-white">Contact us</p>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:info@roadmapcol.com"
                className="flex items-center gap-2 text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                <MailIcon />
                {CONTACT.email}
              </Link>
              <Link
                href="tel:+573178252525"
                className="flex items-center gap-2 text-slate-300 underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
              >
                <PhoneIcon />
                {CONTACT.phone}
              </Link>
              <div className="flex gap-4 text-white">
                <Link
                  href="https://www.instagram.com/roadmapcol/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Image
                    src={images.instagram}
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link
                  href={CONTACT.tiktok}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Image
                    src={images.tiktok}
                    alt="tiktok"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 mt-14 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2">
          <div className="flex items-center gap-x-1 text-xs sm:text-base">
            <span className="text-slate-300">Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-slate-300">by</span>
            <Link
              target="_blank"
              href="https://lesteban.dev"
              className="hover:text-primary text-slate-300 underline-offset-4 transition-all duration-300 hover:underline"
            >
              LEstebanR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
