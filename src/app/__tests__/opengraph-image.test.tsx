import OpengraphImage, { alt, contentType, size } from '@/app/opengraph-image'
import { LOGO_URL } from '@/lib/og'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

vi.mock('next/og', () => ({
  ImageResponse: class {
    element: ReactElement
    options: unknown
    constructor(element: ReactElement, options: unknown) {
      this.element = element
      this.options = options
    }
  },
}))

describe('opengraph-image', () => {
  it('exports 1200x630 PNG config', () => {
    expect(size).toEqual({ height: 630, width: 1200 })
    expect(contentType).toBe('image/png')
    expect(alt).toBe('Road Map Col')
  })

  it('renders the logo scaled to fit and centered on white', () => {
    const response = OpengraphImage() as unknown as {
      element: ReactElement
      options: unknown
    }
    expect(response.options).toEqual(size)

    const { container } = render(response.element)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.style.background).toBe('rgb(255, 255, 255)')
    expect(wrapper.style.justifyContent).toBe('center')

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', LOGO_URL)
    expect(img).toHaveAttribute('width', '884')
    expect(img).toHaveAttribute('height', '630')
  })
})
