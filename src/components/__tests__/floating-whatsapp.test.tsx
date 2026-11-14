import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
}))

vi.mock('@/lib/data', () => ({
  CONTACT: { phone: '1234567890' },
  TOURS: [{ href: '/tours/salto-del-buey', title: 'El salto - Canopy' }],
}))

function getHref() {
  return decodeURIComponent(screen.getByRole('link').getAttribute('href')!)
}

describe('FloatingWhatsApp', () => {
  it('uses a generic message on pages that are not a tour detail page', () => {
    vi.mocked(usePathname).mockReturnValue('/')
    render(<FloatingWhatsApp />)
    const href = getHref()
    expect(href).toContain('I would like to get more information.')
    expect(href).not.toContain('tour')
  })

  it('mentions the specific tour when on its detail page', () => {
    vi.mocked(usePathname).mockReturnValue('/tours/salto-del-buey')
    render(<FloatingWhatsApp />)
    expect(getHref()).toContain('El salto - Canopy tour')
  })

  it('sends the message to the contact phone', () => {
    render(<FloatingWhatsApp />)
    expect(getHref()).toMatch(/^https:\/\/wa\.me\/1234567890\?text=/)
  })

  it('has rel="noopener noreferrer" on the external link', () => {
    render(<FloatingWhatsApp />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )
  })

  it('keeps the tour data module out of the client component', () => {
    const source = readFileSync(
      resolve(__dirname, '../floating-whatsapp-button.tsx'),
      'utf8'
    )
    expect(source).toContain("'use client'")
    expect(source).not.toContain('@/lib/data')
  })
})
