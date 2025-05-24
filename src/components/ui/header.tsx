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
    <header className="w-full flex gap-12 justify-center items-center md:w-1/2 py-2 px-4 ">
      <div className="flex gap-2 justify-between w-full items-center ">
        <Image src="/logo.png" alt="logo" width={75} height={75} />
        <div className="gap-2 hidden md:flex">
          <Link href="/">Inicio</Link>
          <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
          <Link href="/tours">Tours</Link>
          <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
          <Link href="/personaliza-experiencia">Personaliza experiencia</Link>
        </div>
        <div className="md:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white mr-2">
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/">Inicio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/tours">Tours</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Link href="/personaliza-experiencia">
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
