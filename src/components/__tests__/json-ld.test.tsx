import { JsonLd } from '@/components/json-ld'
import { render } from '@testing-library/react'

describe('JsonLd', () => {
  it('renders a script tag with type application/ld+json', () => {
    const { container } = render(
      <JsonLd data={{ '@type': 'Organization', name: 'Test' }} />
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
  })

  it('serialises the data as JSON in the script content', () => {
    const data = { '@type': 'Organization', name: 'Road Map Col' }
    const { container } = render(<JsonLd data={data} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script?.innerHTML).toBe(JSON.stringify(data))
  })
})
