import NotFound from '@/app/not-found'
import { render, screen } from '@testing-library/react'

describe('NotFound', () => {
  it('renders 404 title', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders the not found message', () => {
    render(<NotFound />)
    expect(
      screen.getByText(
        'The page you are looking for does not exist or has been moved.'
      )
    ).toBeInTheDocument()
  })

  it('renders a link to /tours', () => {
    render(<NotFound />)
    const link = screen.getByRole('link', { name: /explore our tours/i })
    expect(link).toHaveAttribute('href', '/tours')
  })
})
