import { Title, TitleCard } from '@/components/ui/typography/typography'
import { render, screen } from '@testing-library/react'

describe('Title', () => {
  it('renders an h1 with children', () => {
    render(<Title>Hello World</Title>)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Hello World' })
    ).toBeInTheDocument()
  })
})

describe('TitleCard', () => {
  it('renders a paragraph with children', () => {
    render(<TitleCard>Card Title</TitleCard>)
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })
})
