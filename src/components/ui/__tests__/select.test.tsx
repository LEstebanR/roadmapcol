import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { render, screen } from '@testing-library/react'

describe('Select', () => {
  it('renders a combobox trigger with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            <SelectItem value="a">Option A</SelectItem>
            <SelectSeparator />
          </SelectGroup>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('renders SelectContent with items when open', () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group</SelectLabel>
            <SelectItem value="b">Option B</SelectItem>
            <SelectSeparator />
          </SelectGroup>
        </SelectContent>
      </Select>
    )
    expect(document.body.textContent).toContain('Option B')
    expect(document.body.textContent).toContain('Group')
  })
})
