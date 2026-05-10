import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { render, screen } from '@testing-library/react'

describe('Card components', () => {
  it('renders Card', () => {
    render(<Card data-testid="card">content</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('renders CardHeader', () => {
    render(<CardHeader data-testid="header">header</CardHeader>)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders CardTitle', () => {
    render(<CardTitle>Title text</CardTitle>)
    expect(screen.getByText('Title text')).toBeInTheDocument()
  })

  it('renders CardDescription', () => {
    render(<CardDescription>Description text</CardDescription>)
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  it('renders CardAction', () => {
    render(<CardAction>Action</CardAction>)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('renders CardContent', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders CardFooter', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
