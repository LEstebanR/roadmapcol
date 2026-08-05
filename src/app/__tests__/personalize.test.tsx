import PersonalizaExperiencia from '@/app/personalize/page'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Personalize page', () => {
  it('renders the page title', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Personalized tour')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), {
      target: { value: 'jane@example.com' },
    })
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders the Send request button', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Send request')).toBeInTheDocument()
  })

  it('disables Send request and shows a validation message when the form is empty', () => {
    render(<PersonalizaExperiencia />)
    expect(screen.getByText('Send request').closest('button')).toBeDisabled()
    expect(screen.getByText('Send request').closest('a')).toBeNull()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('keeps Send request disabled when only the name is filled in', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' },
    })
    expect(screen.getByText('Send request').closest('button')).toBeDisabled()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('keeps Send request disabled when only an email is filled in', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), {
      target: { value: 'jane@example.com' },
    })
    expect(screen.getByText('Send request').closest('button')).toBeDisabled()
  })

  it('enables Send request once name and email are filled in', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), {
      target: { value: 'jane@example.com' },
    })
    expect(screen.getByText('Send request').closest('a')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('enables Send request with name and phone (no email)', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('Enter your phone'), {
      target: { value: '3001234567' },
    })
    expect(screen.getByText('Send request').closest('a')).toBeInTheDocument()
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

  it('uses the English activity label (not the internal id) in the WhatsApp message', () => {
    render(<PersonalizaExperiencia />)
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), {
      target: { value: 'jane@example.com' },
    })
    const adventureBtn = screen.getByText('Adventure').closest('button')!
    fireEvent.click(adventureBtn)

    const sendLink = screen.getByText('Send request').closest('a')!
    const href = decodeURIComponent(sendLink.getAttribute('href')!)
    expect(href).toContain('Activities: Adventure')
    expect(href).not.toContain('aventura')
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
