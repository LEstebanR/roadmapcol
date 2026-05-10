import { blurDataUrl, imgUrl, videoPoster } from '@/lib/cloudinary'

describe('imgUrl', () => {
  it('injects f_auto,q_auto into a Cloudinary upload URL', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
    expect(imgUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/sample.jpg'
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
      'https://res.cloudinary.com/demo/video/upload/so_0/sample.jpg'
    )
  })

  it('generates a jpg poster from a mov URL', () => {
    const url = 'https://res.cloudinary.com/demo/video/upload/sample.mov'
    expect(videoPoster(url)).toBe(
      'https://res.cloudinary.com/demo/video/upload/so_0/sample.jpg'
    )
  })

  it('generates a jpg poster from a webm URL', () => {
    const url = 'https://res.cloudinary.com/demo/video/upload/sample.webm'
    expect(videoPoster(url)).toBe(
      'https://res.cloudinary.com/demo/video/upload/so_0/sample.jpg'
    )
  })
})

describe('blurDataUrl', () => {
  it('is a valid base64 SVG data URL', () => {
    expect(blurDataUrl).toMatch(/^data:image\/svg\+xml;base64,/)
  })
})
