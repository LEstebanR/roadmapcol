'use client'

import { HEADER_LINKS } from '@/lib/data'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 16

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    if (!isHome) {
      return
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 mx-auto flex justify-center border-b transition-colors duration-300',
        isTransparent
          ? 'border-transparent bg-transparent'
          : 'bg-background/80 border-border/40 backdrop-blur-md'
      )}
    >
      <nav className="container flex h-14 items-center justify-between px-4 md:px-8">
        <Link href="/">
          <Image src={images.logo} alt="logo" width={60} height={60} />
        </Link>
        <div className="hidden gap-6 md:flex">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:underline',
                isTransparent
                  ? 'text-white hover:text-white/80'
                  : 'hover:text-primary',
                pathname === link.href &&
                  (isTransparent
                    ? 'underline underline-offset-4'
                    : 'text-primary underline underline-offset-4')
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={cn('md:hidden', isTransparent && 'text-white')}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="bg-background fixed inset-x-0 top-14 z-40 flex h-[calc(100dvh-3.5rem)] flex-col md:hidden">
          <div className="flex flex-1 flex-col items-stretch justify-evenly divide-y">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'hover:text-primary hover:bg-accent flex min-h-20 flex-1 items-center justify-center gap-3 px-8 text-xl font-medium transition-all duration-300',
                  pathname === link.href &&
                    'text-primary bg-accent underline underline-offset-4'
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
