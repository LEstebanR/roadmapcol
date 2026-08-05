import cloudinaryLoader from '@/lib/cloudinary-loader'

describe('cloudinary-loader default export', () => {
  it('re-exports cloudinaryImageLoader as the next/image loaderFile', () => {
    const src = 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg'
    expect(cloudinaryLoader({ src, width: 640 })).toBe(
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_640,c_limit/v1/sample.jpg'
    )
  })
})
