import ErrorPage from '@/app/error'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Error', () => {
  it('renders the error title', () => {
    render(<ErrorPage error={new Error('boom')} reset={vi.fn()} />)
    expect(screen.getByText('Oops!')).toBeInTheDocument()
  })

  it('renders the error message', () => {
    render(<ErrorPage error={new Error('boom')} reset={vi.fn()} />)
    expect(
      screen.getByText(
        'Something went wrong. Please try again or go back home.'
      )
    ).toBeInTheDocument()
  })

  it('calls reset when Try again is clicked', async () => {
    const reset = vi.fn()
    render(<ErrorPage error={new Error('boom')} reset={reset} />)
    await userEvent.click(screen.getByRole('button', { name: /try again/i }))
    expect(reset).toHaveBeenCalledOnce()
  })

  it('renders a link to home', () => {
    render(<ErrorPage error={new Error('boom')} reset={vi.fn()} />)
    const link = screen.getByRole('link', { name: /go home/i })
    expect(link).toHaveAttribute('href', '/')
  })

  it('logs the error to console', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const error = new Error('boom')
    render(<ErrorPage error={error} reset={vi.fn()} />)
    expect(spy).toHaveBeenCalledWith(error)
    spy.mockRestore()
  })
})
