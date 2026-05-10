import { Checkbox } from '@/components/ui/checkbox'
import { render, screen } from '@testing-library/react'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders checked when defaultChecked is set', () => {
    render(<Checkbox defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
