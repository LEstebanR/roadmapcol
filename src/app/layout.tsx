import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import localFont from "next/font/local";

const grotters = localFont({
  src: "../../public/fonts/grotters.ttf",
});

const frabk = localFont({
  src: "../../public/fonts/frabk.ttf",
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
        className={` ${frabk.className} ${grotters.className} antialiased flex flex-col min-h-screen items-center w-full justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
