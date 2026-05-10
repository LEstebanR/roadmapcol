import { GTM, GTMNoscript } from '@/components/gtm'
import { render } from '@testing-library/react'
import { useSearchParams } from 'next/navigation'

vi.mock('next/script', () => ({
  default: ({ id }: { id: string }) => <script id={id} />,
}))

vi.mock('next/navigation', () => ({
  useParams: () => ({}),
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}))

describe('GTM', () => {
  afterEach(() => {
    vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams() as any)
    delete (window as any).dataLayer
  })

  it('renders the GTM script tag', () => {
    render(<GTM />)
    expect(document.getElementById('gtm-script')).toBeInTheDocument()
  })

  it('pushes a pageview without search params to dataLayer', () => {
    window.dataLayer = []
    render(<GTM />)
    expect(
      window.dataLayer.some((entry) => entry['event'] === 'pageview')
    ).toBe(true)
  })

  it('includes search params in the pageview page value when present', () => {
    vi.mocked(useSearchParams).mockReturnValue(
      new URLSearchParams('tour=medellin') as any
    )
    window.dataLayer = []
    render(<GTM />)
    const entry = window.dataLayer.find((e) => e['event'] === 'pageview') as any
    expect(entry?.page).toContain('tour=medellin')
  })
})

describe('GTMNoscript', () => {
  it('renders a noscript element', () => {
    render(<GTMNoscript />)
    expect(document.querySelector('noscript')).toBeInTheDocument()
  })
})
