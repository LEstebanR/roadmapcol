import { GTM, GTMNoscript } from '@/components/gtm'
import { render } from '@testing-library/react'
import { useSearchParams } from 'next/navigation'

vi.mock('next/script', () => ({
  default: ({ id, strategy }: { id: string; strategy: string }) => (
    <script data-strategy={strategy} id={id} />
  ),
}))

vi.mock('next/navigation', () => ({
  useParams: () => ({}),
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}))

type SearchParamsReturn = ReturnType<typeof useSearchParams>

describe('GTM', () => {
  afterEach(() => {
    vi.mocked(useSearchParams).mockReturnValue(
      new URLSearchParams() as unknown as SearchParamsReturn
    )
    delete window.dataLayer
  })

  it('renders the GTM script tag', () => {
    render(<GTM />)
    expect(document.getElementById('gtm-script')).toBeInTheDocument()
  })

  it('loads the GTM script lazily after window load', () => {
    render(<GTM />)
    expect(document.getElementById('gtm-script')).toHaveAttribute(
      'data-strategy',
      'lazyOnload'
    )
  })

  it('queues the pageview when GTM has not created dataLayer yet', () => {
    render(<GTM />)
    expect(window.dataLayer).toEqual([
      expect.objectContaining({ event: 'pageview', page: '/' }),
    ])
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
      new URLSearchParams('tour=medellin') as unknown as SearchParamsReturn
    )
    window.dataLayer = []
    render(<GTM />)
    const entry = window.dataLayer.find((e) => e['event'] === 'pageview')
    expect(String(entry?.['page'])).toContain('tour=medellin')
  })
})

describe('GTMNoscript', () => {
  it('renders a noscript element', () => {
    render(<GTMNoscript />)
    expect(document.querySelector('noscript')).toBeInTheDocument()
  })
})
