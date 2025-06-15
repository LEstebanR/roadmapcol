import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src="/logo.png"
        alt="Loading"
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
  )
}
