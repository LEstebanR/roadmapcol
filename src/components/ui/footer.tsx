import { CONTACT } from '@/lib/data'
import { images } from '@/lib/images'
import { Heart, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-12">
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
            <p className="text-sm text-muted-foreground">
              Discover the magic of Colombia with our unique and personalized
              experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-foreground">Links</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                Home
              </Link>
              <Link
                href="/tours"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                Tours
              </Link>
              <Link
                href="/personalize"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                Personalize your experience
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-foreground">Contact us</p>
            <div className="flex flex-col gap-2">
              <Link
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                <MailIcon className="size-4" />
                {CONTACT.email}
              </Link>
              <Link
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                <PhoneIcon className="size-4" />
                {CONTACT.phone}
              </Link>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/roadmapcol/"
                  target="_blank"
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  <Image
                    src={images.instagram}
                    alt="instagram"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  href={CONTACT.tiktok}
                  target="_blank"
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  <Image
                    src={images.tiktok}
                    alt="tiktok"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 border-t border-border pt-6 sm:gap-x-2">
          <div className="flex items-center gap-x-1 text-xs text-muted-foreground sm:text-sm">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-primary" />
            <span>by</span>
            <Link
              target="_blank"
              href="https://lesteban.dev"
              className="underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
            >
              LEstebanR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
