import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Geist, Geist_Mono } from "next/font/google";

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
        className={` ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full justify-between bg-[url('/landscape.png')] bg-cover bg-center bg-no-repeat bg-fixed `}
      >
        <Header />
        <div className="mt-20 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
