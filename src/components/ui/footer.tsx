import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex gap-4 justify-between items-center md:w-1/2 p-4 fixed bottom-0 left bg-white h-20">
      <div className="flex gap-4">
        <Image src="whatsapp-icon.svg" alt="whatsapp" width={24} height={24} />
        <Image
          src="instagram-icon.svg"
          alt="instagram"
          width={24}
          height={24}
        />
        <Image src="tiktok-icon.svg" alt="tiktok" width={24} height={24} />
      </div>
      <Image src="/logo.png" alt="logo" width={75} height={75} />
    </footer>
  );
}
