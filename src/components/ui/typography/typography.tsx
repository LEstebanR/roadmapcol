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

export function TitleCard({ children }: { children: React.ReactNode }) {
  return (
    <p className={`text-6xl text-secondary ${oneBrush.className}`}>
      {children}
    </p>
  );
}
