import { images } from "@/lib/images";
import Image from "next/image";
import {
  Heart,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-600 w-full py-4">
      <div className="container mx-auto px-4 md:px-0 md:w-6/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Image
              src={images.logo}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-sm"
            />
            <p className="text-slate-300">
              Descubre la magia de Colombia con nuestras experiencias únicas y
              personalizadas.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white text-2xl font-bold">Enlaces</p>
            <div className="flex flex-col gap-1">
              <Link
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Inicio
              </Link>

              <Link
                href="#clients"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Tours{" "}
              </Link>
              <Link
                href="#clients"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Alojamiento
              </Link>
              <Link
                href="#clients"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Personaliza tu experiencia
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="text-white text-2xl font-bold">Contacto</p>
            <div className="flex flex-col gap-1">
              <Link
                href="mailto:info@roadmapcol.com"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4 flex items-center gap-2"
              >
                <MailIcon />
                info@roadmapcol.com
              </Link>
              <Link
                href="tel:+573178252525"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4 flex items-center gap-2"
              >
                <PhoneIcon />
                +57 317 825 2525
              </Link>
              <div className="flex gap-4 text-white">
                <Link
                  href="https://www.instagram.com/roadmapcol/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="https://www.facebook.com/roadmapcol/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://x.com/roadmapcol"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <XIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/@roadmapcol"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Image
                    src="/tiktok-icon.svg"
                    alt="youtube"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2 mt-14">
          <div className="flex items-center gap-x-1 text-xs sm:text-base">
            <span className="text-slate-300">Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-slate-300">por</span>
            <Link
              href="https://github.com/LEstebanR/lesteban"
              className="text-slate-300 hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
            >
              LEstebanR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
