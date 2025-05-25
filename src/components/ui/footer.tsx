import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex gap-4 justify-between items-center md:w-1/2 p-4">
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
      <Image src="/logo-3.png" alt="logo" width={50} height={50} />
    </footer>
  );
}
