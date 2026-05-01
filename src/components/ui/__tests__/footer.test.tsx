import Footer from '@/components/ui/footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<Footer />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('has at least one external link', () => {
    render(<Footer />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)
  })
})
