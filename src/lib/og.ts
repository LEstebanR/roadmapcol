import type { Metadata } from 'next'

export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

const CLOUD_BASE = 'https://res.cloudinary.com/lesteban'
const LOGO_PUBLIC_ID = 'v1748229585/roadmap/road_map_sin_fondo_atjeji.png'
const LOGO_OVERLAY = 'roadmap:road_map_sin_fondo_atjeji'

/** Default share image: logo centered on white 1200×630 canvas. */
export const DEFAULT_OG_IMAGE = `${CLOUD_BASE}/image/upload/w_${OG_WIDTH},h_${OG_HEIGHT},c_pad,b_rgb:ffffff,f_jpg,q_auto/${LOGO_PUBLIC_ID}`

/**
 * Build a 1200×630 social preview from a Cloudinary image (or video frame).
 * Falls back to the branded logo OG when the source is missing/non-Cloudinary.
 */
export function ogImageUrl(sourceUrl?: string): string {
  if (!sourceUrl?.includes('res.cloudinary.com')) return DEFAULT_OG_IMAGE

  const match = sourceUrl.match(
    /^(https:\/\/res\.cloudinary\.com\/[^/]+)\/(image|video)\/upload\/(?:.*\/)?(v\d+\/.+)$/
  )
  if (!match) return DEFAULT_OG_IMAGE

  const [, host, resourceType, publicIdWithVersion] = match
  const isVideo = resourceType === 'video'
  // so_0 grabs first frame; force jpg for reliable social crawlers
  const transforms = [
    isVideo ? 'so_0' : null,
    `w_${OG_WIDTH}`,
    `h_${OG_HEIGHT}`,
    'c_fill',
    'g_auto',
    'f_jpg',
    'q_auto',
    // brand mark bottom-right
    `l_${LOGO_OVERLAY},w_100,o_90,g_south_east,x_32,y_32`,
  ]
    .filter(Boolean)
    .join(',')

  const id = isVideo
    ? publicIdWithVersion.replace(/\.(mov|mp4|webm)$/i, '.jpg')
    : publicIdWithVersion

  return `${host}/image/upload/${transforms}/${id}`
}

/** Open Graph + Twitter card metadata for any page. */
export function socialMetadata(opts: {
  alt?: string
  description: string
  imageUrl?: string
  title: string
  url?: string
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const image = ogImageUrl(opts.imageUrl)
  const alt = opts.alt ?? opts.title

  return {
    openGraph: {
      description: opts.description,
      images: [
        {
          alt,
          height: OG_HEIGHT,
          url: image,
          width: OG_WIDTH,
        },
      ],
      title: opts.title,
      type: 'website',
      ...(opts.url ? { url: opts.url } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      description: opts.description,
      images: [image],
      title: opts.title,
    },
  }
}
