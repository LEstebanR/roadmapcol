import localFont from "next/font/local";

const oneBrush = localFont({
  src: "../../../public/fonts/onebrush.ttf",
});

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-9xl text-center ${oneBrush.className}`}>{children}</h1>
  );
}
