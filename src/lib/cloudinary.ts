import type { ImageLoaderProps } from 'next/image'

/** Default max width for detail/gallery images (retina-friendly). */
export const IMG_WIDTH_DETAIL = 1600
/** Max width for card/thumbnail images. */
export const IMG_WIDTH_CARD = 800
/** Max width for OG/social preview images. */
export const IMG_WIDTH_OG = 1200
/** Max width for small icons/logos. */
export const IMG_WIDTH_ICON = 200

/**
 * Inject Cloudinary delivery transforms: format/quality auto + width cap.
 * Skips adding another `w_` when the URL already has one.
 */
export function imgUrl(url: string, width: number = IMG_WIDTH_DETAIL): string {
  if (!url.includes('/upload/')) return url

  // First path segment after /upload/ already sets a width — keep it.
  if (/\/upload\/[^/]*\bw_\d+/.test(url)) {
    if (
      /\/upload\/[^/]*\bf_auto\b/.test(url) &&
      /\/upload\/[^/]*\bq_auto\b/.test(url)
    ) {
      return url
    }
    return url.replace('/upload/', '/upload/f_auto,q_auto/')
  }

  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_limit/`)
}

const TRANSFORM_SEGMENT = /\/upload\/(?:[a-z]+_[^/,]+,?)+\//

/**
 * next/image `loaderFile`: rewrites Cloudinary URLs to the exact
 * width/quality Next requests instead of routing every image through
 * (and re-encoding via) the Next.js image optimizer — Cloudinary is
 * already an image CDN with its own f_auto/q_auto optimization.
 */
export function cloudinaryImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (!src.includes('/upload/')) return src

  const transform = `f_auto,q_${quality ?? 'auto'},w_${width},c_limit`

  if (TRANSFORM_SEGMENT.test(src)) {
    return src.replace(TRANSFORM_SEGMENT, `/upload/${transform}/`)
  }

  return src.replace('/upload/', `/upload/${transform}/`)
}

export function videoPoster(url: string): string {
  return url
    .replace(
      '/video/upload/',
      '/video/upload/so_0,w_1280,c_limit,q_auto,f_auto/'
    )
    .replace(/\.(mov|mp4|webm)$/i, '.jpg')
}

const blurSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="3"><rect fill="#e2e8f0" width="4" height="3"/></svg>'
export const blurDataUrl = `data:image/svg+xml;base64,${btoa(blurSvg)}`
