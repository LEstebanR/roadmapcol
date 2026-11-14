import OpengraphImage, { alt, contentType, size } from '@/app/opengraph-image'
import { LOGO_URL } from '@/lib/og'
import { render, screen } from '@testing-library/react'
import { readFile } from 'node:fs/promises'
import type { ReactElement } from 'react'

vi.mock('node:fs/promises', () => {
  const readFile = vi.fn(async (path: string) => Buffer.from(path))
  return { default: { readFile }, readFile }
})

vi.mock('next/og', () => ({
  ImageResponse: class {
    element: ReactElement
    options: { fonts: { data: Buffer; name: string }[] }
    constructor(
      element: ReactElement,
      options: { fonts: { data: Buffer; name: string }[] }
    ) {
      this.element = element
      this.options = options
    }
  },
}))

type MockResponse = {
  element: ReactElement
  options: {
    fonts: { data: Buffer; name: string }[]
    height: number
    width: number
  }
}

describe('opengraph-image', () => {
  it('exports 1200x630 PNG config', () => {
    expect(size).toEqual({ height: 630, width: 1200 })
    expect(contentType).toBe('image/png')
    expect(alt).toBe('Road Map Col — Tours in Medellín & Colombia')
  })

  it('loads Geist and oneBrush from src/fonts', async () => {
    const response = (await OpengraphImage()) as unknown as MockResponse
    expect(response.options).toMatchObject(size)
    expect(response.options.fonts.map((f) => f.name)).toEqual([
      'Geist',
      'oneBrush',
    ])
    expect(vi.mocked(readFile)).toHaveBeenCalledWith(
      expect.stringMatching(/src\/fonts\/Geist-Regular\.ttf$/)
    )
    expect(vi.mocked(readFile)).toHaveBeenCalledWith(
      expect.stringMatching(/src\/fonts\/oneBrush\.ttf$/)
    )
  })

  it('renders logo, headline, tagline, URL pill and Guatapé photo', async () => {
    const response = (await OpengraphImage()) as unknown as MockResponse
    render(response.element)

    expect(screen.getByAltText('Road Map Col')).toHaveAttribute('src', LOGO_URL)
    expect(screen.getByText('Discover')).toBeInTheDocument()
    expect(screen.getByText('Colombia')).toHaveStyle({
      color: 'rgb(255, 51, 20)',
    })
    expect(
      screen.getByText('Tours in Medellín & Antioquia')
    ).toBeInTheDocument()
    expect(screen.getByText('roadmapcol.com')).toBeInTheDocument()

    const photo = document.querySelector('img[alt=""]')
    expect(photo?.getAttribute('src')).toContain('guatape')
    expect(photo?.getAttribute('src')).toContain('f_jpg')
  })
})
