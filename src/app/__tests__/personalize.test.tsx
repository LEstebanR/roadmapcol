import PersonalizaExperiencia from '@/app/personalize/page'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Personalize page', () => {
  it('renders the page title', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Personalized tour')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<PersonalizaExperiencia />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders the Send request button', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Send request')).toBeInTheDocument()
  })

  it('renders activity options', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Adventure')).toBeInTheDocument()
    expect(screen.getByText('Nature')).toBeInTheDocument()
  })

  it('toggles activity selection on click', () => {
    render(<PersonalizaExperiencia />)
    const adventureBtn = screen.getByText('Adventure').closest('button')!
    fireEvent.click(adventureBtn)
    fireEvent.click(adventureBtn)
  })

  it('updates form fields on change', () => {
    render(<PersonalizaExperiencia />)
    const textInputs = screen.getAllByRole('textbox')
    textInputs.forEach((input) => {
      fireEvent.change(input, { target: { value: 'test' } })
    })
    const spinInputs = screen.getAllByRole('spinbutton')
    spinInputs.forEach((input) => {
      fireEvent.change(input, { target: { value: '5' } })
    })
    const { container } = render(<PersonalizaExperiencia />)
    const dateInputs = container.querySelectorAll('input[type="date"]')
    dateInputs.forEach((input) => {
      fireEvent.change(input, { target: { value: '2026-01-01' } })
    })
  })
})
