"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {  MenuIcon } from "lucide-react";
import { useState } from "react";
import { CONTACT, HEADER_LINKS } from "@/lib/data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm mx-auto flex justify-center">
      <nav className="container flex h-14 items-center justify-between px-4 md:px-8  ">
        <Link href="/">
          <Image src={images.logo} alt="logo" width={60} height={60} />
        </Link>
        <div className=" gap-6 hidden md:flex">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:underline hover:text-primary transition-all duration-300",
                pathname === link.href &&
                  "text-primary underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
            href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent('Hola, vengo de roadmapcol.com y me gustaría obtener más información.')}`}
            target="_blank"
          
          >
        <Button className="hidden md:inline-flex items-center gap-2 bg-green-300 text-black hover:bg-green-400">
          <Image
            src={images.whatsapp}
            alt="whatsapp"
            width={20}
            height={20}
          />
            Contáctanos
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
                  className="flex items-center gap-2 text-sm font-medium hover:underline hover:text-primary transition-all duration-300"
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
                className="flex items-center gap-2 text-sm font-medium hover:underline hover:text-primary transition-all duration-300"
              >
                <Image
                  src={images.whatsapp}
                  alt="whatsapp"
                  width={20}
                  height={20}
                />
                Contáctanos
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
