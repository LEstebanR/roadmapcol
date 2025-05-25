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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full gap-12 justify-center items-center  py-2 px-4 fixed top-0 left-0 z-50  h-20  mx-auto">
      <div className="flex gap-2 justify-between w-full items-center md:w-1/2 mx-auto">
        <Image src="/logo-3.png" alt="logo" width={50} height={50} />
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
