import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Geist, Geist_Mono } from "next/font/google";
import { images } from "@/lib/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Road Map Col",
  description: "Road Map Col",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full justify-between bg-center bg-cover bg-no-repeat bg-fixed`}
        style={{ backgroundImage: `url(${images.backgroundMain})` }}
      >
        <Header />
        <div className=" w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
