'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CONTACT, HEADER_LINKS } from '@/lib/data'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 mx-auto flex justify-center backdrop-blur-sm">
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
                'hover:text-primary text-sm font-medium transition-all duration-300 hover:underline',
                pathname === link.href &&
                  'text-primary underline underline-offset-4'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hello, I am from roadmapcol.com and I would like to get more information.')}`}
          target="_blank"
        >
          <Button className="hidden items-center gap-2 bg-green-300 text-black hover:bg-green-400 md:inline-flex">
            <Image
              src={images.whatsapp}
              alt="whatsapp"
              width={20}
              height={20}
            />
            Contact us
          </Button>
        </Link>
        <DropdownMenu open={isOpen} onOpenChange={handleOpen}>
          <DropdownMenuTrigger asChild>
            <MenuIcon className="md:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {HEADER_LINKS.map((link) => (
              <DropdownMenuItem
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="hover:text-primary flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:underline"
                >
                  {link.icon}
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            >
              <Link
                href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hola, vengo de roadmapcol.com y me gustaría obtener más información.')}`}
                target="_blank"
                className="hover:text-primary flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:underline"
              >
                <Image
                  src={images.whatsapp}
                  alt="whatsapp"
                  width={20}
                  height={20}
                />
                Contact us
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}
