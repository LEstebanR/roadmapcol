import { LOGO_URL, OG_HEIGHT, OG_WIDTH, SITE_NAME } from '@/lib/og'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = `${SITE_NAME} — Tours in Medellín & Colombia`
export const size = { height: OG_HEIGHT, width: OG_WIDTH }
export const contentType = 'image/png'

// DESIGN.md tokens
const PRIMARY = '#ff3314'
const SECONDARY = '#ffc600'
const INK = '#222222'
const MUTED = '#6a6a6a'

const PHOTO_WIDTH = 520
// Guatapé hero (same photo as the home carousel); Satori needs JPG/PNG
const PHOTO_URL = `https://res.cloudinary.com/lesteban/image/upload/w_${PHOTO_WIDTH},h_${OG_HEIGHT},c_fill,g_auto,q_auto,f_jpg/v1749941780/roadmapcol/guatape/guatape_yv0q5f.jpg`
// Logo is 1401×999
const LOGO_RENDER_WIDTH = 168
const LOGO_RENDER_HEIGHT = 120

// oneBrush only covers A–Z, a–z and space: keep accents/punctuation in Geist
const fontPath = (file: string) => join(process.cwd(), 'src/fonts', file)

export default async function OpengraphImage() {
  const [geist, oneBrush] = await Promise.all([
    readFile(fontPath('Geist-Regular.ttf')),
    readFile(fontPath('oneBrush.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          display: 'flex',
          fontFamily: 'Geist',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '48px 56px 56px 64px',
          }}
        >
          <img
            alt={SITE_NAME}
            height={LOGO_RENDER_HEIGHT}
            src={LOGO_URL}
            width={LOGO_RENDER_WIDTH}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                color: INK,
                display: 'flex',
                fontFamily: 'oneBrush',
                fontSize: 104,
                gap: 4,
                lineHeight: 1,
              }}
            >
              <span>Discover</span>
              <span style={{ color: PRIMARY }}>Colombia</span>
            </div>
            <div style={{ color: MUTED, fontSize: 34, lineHeight: 1.2 }}>
              Tours in Medellín & Antioquia
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                background: PRIMARY,
                borderRadius: 9999,
                color: '#ffffff',
                fontSize: 24,
                padding: '12px 28px',
              }}
            >
              roadmapcol.com
            </div>
          </div>
        </div>
        <div style={{ background: SECONDARY, display: 'flex', width: 14 }} />
        <img
          alt=""
          height={OG_HEIGHT}
          src={PHOTO_URL}
          style={{ objectFit: 'cover' }}
          width={PHOTO_WIDTH}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { data: geist, name: 'Geist', style: 'normal', weight: 400 },
        { data: oneBrush, name: 'oneBrush', style: 'normal', weight: 400 },
      ],
    }
  )
}
