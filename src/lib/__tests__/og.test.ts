import { DEFAULT_OG_IMAGE, ogImageUrl, socialMetadata } from '@/lib/og'

describe('ogImageUrl', () => {
  it('returns the default logo OG when no source is given', () => {
    expect(ogImageUrl()).toBe(DEFAULT_OG_IMAGE)
    expect(ogImageUrl(undefined)).toBe(DEFAULT_OG_IMAGE)
  })

  it('returns the default logo OG for non-Cloudinary URLs', () => {
    expect(ogImageUrl('https://example.com/photo.jpg')).toBe(DEFAULT_OG_IMAGE)
  })

  it('returns the default logo OG for Cloudinary URLs without a versioned public id', () => {
    expect(
      ogImageUrl(
        'https://res.cloudinary.com/lesteban/image/upload/sample.jpg'
      )
    ).toBe(DEFAULT_OG_IMAGE)
  })

  it('builds a 1200x630 fill OG from a plain Cloudinary image', () => {
    const src =
      'https://res.cloudinary.com/lesteban/image/upload/v1/roadmapcol/guatape/photo.jpg'
    const result = ogImageUrl(src)
    expect(result).toContain('/image/upload/')
    expect(result).toContain('w_1200')
    expect(result).toContain('h_630')
    expect(result).toContain('c_fill')
    expect(result).toContain('g_auto')
    expect(result).toContain('f_jpg')
    expect(result).toContain('l_roadmap:road_map_sin_fondo_atjeji')
    expect(result).toContain('v1/roadmapcol/guatape/photo.jpg')
  })

  it('strips existing transforms before applying OG transforms', () => {
    const src =
      'https://res.cloudinary.com/lesteban/image/upload/f_auto,q_auto,w_1600,c_limit/v1/path/photo.jpg'
    const result = ogImageUrl(src)
    expect(result).not.toContain('w_1600')
    expect(result).toContain('w_1200,h_630,c_fill')
    expect(result).toContain('v1/path/photo.jpg')
  })

  it('converts a video URL into a first-frame jpg OG', () => {
    const src =
      'https://res.cloudinary.com/lesteban/video/upload/v1/path/clip.mov'
    const result = ogImageUrl(src)
    expect(result).toContain('/image/upload/')
    expect(result).toContain('so_0')
    expect(result).toContain('clip.jpg')
    expect(result).not.toContain('.mov')
  })
})

describe('socialMetadata', () => {
  it('returns openGraph and twitter with summary_large_image', () => {
    const meta = socialMetadata({
      description: 'A trip',
      imageUrl:
        'https://res.cloudinary.com/lesteban/image/upload/v1/tours/a.jpg',
      title: 'Guatapé',
      url: 'https://roadmapcol.com/tours/guatape',
    })

    expect(meta.openGraph?.title).toBe('Guatapé')
    expect(meta.openGraph?.description).toBe('A trip')
    expect(meta.openGraph?.url).toBe('https://roadmapcol.com/tours/guatape')
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({
        alt: 'Guatapé',
        height: 630,
        width: 1200,
      }),
    ])
    expect(meta.twitter).toMatchObject({
      card: 'summary_large_image',
      title: 'Guatapé',
    })
    expect(meta.twitter).toMatchObject({
      images: expect.any(Array),
    })
  })

  it('uses default OG when imageUrl is omitted', () => {
    const meta = socialMetadata({
      description: 'Site',
      title: 'Road Map Col',
    })
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({ url: DEFAULT_OG_IMAGE }),
    ])
  })
})
