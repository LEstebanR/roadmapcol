import localFont from "next/font/local";

const oneBrush = localFont({
  src: "./oneBrush.ttf",
});

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-8xl md:text-9xl text-center ${oneBrush.className}`}>
      {children}
    </h1>
  );
}
