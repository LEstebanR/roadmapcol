import {
  TourBookingProvider,
  useTourBooking,
} from '@/app/tours/[name]/tour-booking-context'
import { fireEvent, render, screen } from '@testing-library/react'

function Consumer() {
  const { isSelected, selectedActivities, toggleActivity } = useTourBooking()
  return (
    <div>
      <p>selected: {selectedActivities.join(', ') || 'none'}</p>
      <p>is-tour-selected: {isSelected('Tour') ? 'yes' : 'no'}</p>
      <button onClick={() => toggleActivity('Tour')}>Toggle Tour</button>
    </div>
  )
}

describe('TourBookingProvider / useTourBooking', () => {
  it('tracks and toggles selected activities', () => {
    render(
      <TourBookingProvider>
        <Consumer />
      </TourBookingProvider>
    )

    expect(screen.getByText('selected: none')).toBeInTheDocument()
    expect(screen.getByText('is-tour-selected: no')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Toggle Tour'))
    expect(screen.getByText('selected: Tour')).toBeInTheDocument()
    expect(screen.getByText('is-tour-selected: yes')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Toggle Tour'))
    expect(screen.getByText('selected: none')).toBeInTheDocument()
  })

  it('throws when used outside a TourBookingProvider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<Consumer />)).toThrow(
      'useTourBooking must be used within TourBookingProvider'
    )

    consoleError.mockRestore()
  })
})
