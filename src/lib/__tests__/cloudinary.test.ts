import {
  IMG_WIDTH_CARD,
  blurDataUrl,
  cloudinaryImageLoader,
  imgUrl,
  videoPoster,
} from '@/lib/cloudinary'

describe('imgUrl', () => {
  it('injects f_auto,q_auto and a default width cap', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
    expect(imgUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600,c_limit/sample.jpg'
    )
  })

  it('accepts a custom width', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
    expect(imgUrl(url, IMG_WIDTH_CARD)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800,c_limit/sample.jpg'
    )
  })

  it('does not double-add w_ when the URL already has a width', () => {
    const url =
      'https://res.cloudinary.com/demo/image/upload/w_1920,q_auto,f_auto/v1/sample.jpg'
    expect(imgUrl(url)).toBe(url)
  })

  it('adds f_auto,q_auto when width exists but format/quality do not', () => {
    const url =
      'https://res.cloudinary.com/demo/image/upload/w_1000,c_fill/v1/sample.jpg'
    expect(imgUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/w_1000,c_fill/v1/sample.jpg'
    )
  })

  it('returns non-Cloudinary URLs unchanged', () => {
    const url = 'https://example.com/image.jpg'
    expect(imgUrl(url)).toBe(url)
  })
})

describe('videoPoster', () => {
  it('generates a jpg poster from an mp4 URL', () => {
    const url = 'https://res.cloudinary.com/demo/video/upload/sample.mp4'
    expect(videoPoster(url)).toBe(
      'https://res.cloudinary.com/demo/video/upload/so_0,w_1280,c_limit,q_auto,f_auto/sample.jpg'
    )
  })

  it('generates a jpg poster from a mov URL', () => {
    const url = 'https://res.cloudinary.com/demo/video/upload/sample.mov'
    expect(videoPoster(url)).toBe(
      'https://res.cloudinary.com/demo/video/upload/so_0,w_1280,c_limit,q_auto,f_auto/sample.jpg'
    )
  })

  it('generates a jpg poster from a webm URL', () => {
    const url = 'https://res.cloudinary.com/demo/video/upload/sample.webm'
    expect(videoPoster(url)).toBe(
      'https://res.cloudinary.com/demo/video/upload/so_0,w_1280,c_limit,q_auto,f_auto/sample.jpg'
    )
  })
})

describe('cloudinaryImageLoader', () => {
  it('injects f_auto,q_auto and the requested width on a raw URL', () => {
    const src = 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg'
    expect(cloudinaryImageLoader({ src, width: 640 })).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_640,c_limit/v1/sample.jpg'
    )
  })

  it('replaces an existing transform segment with the requested width', () => {
    const src =
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600,c_limit/v1/sample.jpg'
    expect(cloudinaryImageLoader({ src, width: 384 })).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_384,c_limit/v1/sample.jpg'
    )
  })

  it('uses the requested quality when provided', () => {
    const src = 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg'
    expect(cloudinaryImageLoader({ quality: 60, src, width: 640 })).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_60,w_640,c_limit/v1/sample.jpg'
    )
  })

  it('returns non-Cloudinary URLs unchanged', () => {
    const src = 'https://example.com/image.jpg'
    expect(cloudinaryImageLoader({ src, width: 640 })).toBe(src)
  })
})

describe('blurDataUrl', () => {
  it('is a valid base64 SVG data URL', () => {
    expect(blurDataUrl).toMatch(/^data:image\/svg\+xml;base64,/)
  })
})
