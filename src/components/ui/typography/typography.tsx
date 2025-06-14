import localFont from 'next/font/local'

const oneBrush = localFont({
  src: './oneBrush.ttf',
})

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-center text-6xl md:text-9xl ${oneBrush.className}`}>
      {children}
    </h1>
  )
}

export function TitleCard({ children }: { children: React.ReactNode }) {
  return (
    <p className={`text-primary text-6xl text-shadow-lg ${oneBrush.className}`}>
      {children}
    </p>
  )
}
