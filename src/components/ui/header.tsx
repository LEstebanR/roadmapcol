"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { images } from "@/lib/images";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full gap-12 justify-center items-center  p-4 h-16 mx-auto">
      <div className="flex gap-2 justify-between w-full items-center md:w-1/2 mx-auto">
        <Image src={images.logo} alt="logo" width={75} height={75} />
        <div className="gap-2 hidden md:flex">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-300"
          >
            Inicio
          </Link>
          <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
          <Link
            href="/tours"
            className="hover:text-primary transition-colors duration-300"
          >
            Tours
          </Link>
          <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
          <Link
            href="/personaliza-experiencia"
            className="hover:text-primary transition-colors duration-300"
          >
            Personaliza experiencia
          </Link>
        </div>
        <div className="md:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white mr-2">
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/" className="w-full">
                  Inicio
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/tours" className="w-full ">
                  Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/personaliza-experiencia" className="w-full">
                  Personaliza experiencia
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
