import {
  LOGO_HEIGHT,
  LOGO_URL,
  LOGO_WIDTH,
  OG_HEIGHT,
  OG_WIDTH,
  SITE_NAME,
} from '@/lib/og'
import { ImageResponse } from 'next/og'

export const alt = SITE_NAME
export const size = { height: OG_HEIGHT, width: OG_WIDTH }
export const contentType = 'image/png'

// Logo scaled to fit the canvas, centered on white (same as Cloudinary c_pad)
const scale = Math.min(OG_WIDTH / LOGO_WIDTH, OG_HEIGHT / LOGO_HEIGHT)
const logoWidth = Math.round(LOGO_WIDTH * scale)
const logoHeight = Math.round(LOGO_HEIGHT * scale)

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#ffffff',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          alt={SITE_NAME}
          height={logoHeight}
          src={LOGO_URL}
          width={logoWidth}
        />
      </div>
    ),
    size
  )
}
