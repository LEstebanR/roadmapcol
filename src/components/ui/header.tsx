import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex gap-12 justify-center items-center md:w-1/2 py-2 px-4 ">
      <div className="flex gap-2">
        <Link href="/">Inicio</Link>
        <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
        <Link href="/tours">Tours</Link>
        <div className="bg-primary mx-2 h-[30px] w-[0.5px] rotate-[20deg]"></div>
        <Link href="/personaliza-experiencia">Personaliza experiencia</Link>
      </div>
    </header>
  );
}
