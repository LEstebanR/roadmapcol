import Loading from '@/app/loading'
import { images } from '@/lib/images'
import { render } from '@testing-library/react'
import Image from 'next/image'

describe('Loading', () => {
  it('renders the loading container', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('uses the logo from images (not a broken /logo.png path)', () => {
    render(<Loading />)
    expect(vi.mocked(Image)).toHaveBeenCalledWith(
      expect.objectContaining({ src: images.logo }),
      undefined
    )
  })
})
