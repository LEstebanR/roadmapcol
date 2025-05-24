import localFont from "next/font/local";

const oneBrush = localFont({
  src: "./oneBrush.ttf",
  variable: "--font-onebrush",
  weight: "400",
  style: "normal",
});

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-9xl text-center ${oneBrush.className}`}>{children}</h1>
  );
}
