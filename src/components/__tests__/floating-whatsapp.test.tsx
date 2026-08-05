import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
}))

vi.mock('@/lib/data', () => ({
  CONTACT: { phone: '1234567890' },
  TOURS: [{ href: '/tours/salto-del-buey', title: 'El salto - Canopy' }],
}))

describe('FloatingWhatsApp', () => {
  it('uses a generic message on pages that are not a tour detail page', () => {
    vi.mocked(usePathname).mockReturnValue('/')
    render(<FloatingWhatsApp />)
    const href = decodeURIComponent(
      screen.getByRole('link').getAttribute('href')!
    )
    expect(href).toContain('I would like to get more information.')
    expect(href).not.toContain('tour')
  })

  it('mentions the specific tour when on its detail page', () => {
    vi.mocked(usePathname).mockReturnValue('/tours/salto-del-buey')
    render(<FloatingWhatsApp />)
    const href = decodeURIComponent(
      screen.getByRole('link').getAttribute('href')!
    )
    expect(href).toContain('El salto - Canopy tour')
  })

  it('has rel="noopener noreferrer" on the external link', () => {
    render(<FloatingWhatsApp />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )
  })
})
