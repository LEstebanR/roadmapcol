import Header from '@/components/ui/header'
import { fireEvent, render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
}))

describe('Header', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/')
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0,
      writable: true,
    })
  })

  it('renders without crashing', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('renders transparently at the top of the home page', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')).toHaveClass('bg-transparent')
  })

  it('switches to a solid background once scrolled', () => {
    const { container } = render(<Header />)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 50 })
    fireEvent.scroll(window)

    expect(container.querySelector('header')).not.toHaveClass('bg-transparent')
  })

  it('is never transparent on non-home pages', () => {
    vi.mocked(usePathname).mockReturnValue('/tours')
    const { container } = render(<Header />)
    expect(container.querySelector('header')).not.toHaveClass('bg-transparent')
  })

  it('opens the full-screen mobile menu when the burger button is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    fireEvent.click(toggle)

    expect(
      screen.getByRole('button', { name: 'Close menu' })
    ).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
  })

  it('closes the mobile menu when a nav link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.click(screen.getAllByText('Tours').at(-1)!)

    expect(
      screen.queryByRole('button', { name: 'Close menu' })
    ).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the close button is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(
      screen.queryByRole('button', { name: 'Close menu' })
    ).not.toBeInTheDocument()
  })
})
