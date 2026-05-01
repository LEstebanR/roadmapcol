import Header from '@/components/ui/header'
import { render } from '@testing-library/react'

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<Header />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('has at least one external link', () => {
    render(<Header />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)
  })
})
