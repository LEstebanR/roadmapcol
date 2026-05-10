import RootLayout from '@/app/layout'
import { render } from '@testing-library/react'

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans', className: 'geist' }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
    className: 'geist-mono',
  }),
}))

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}))

vi.mock('@/components/gtm', () => ({
  GTM: () => null,
  GTMNoscript: () => null,
}))

vi.mock('@/components/ui/header', () => ({
  default: () => <header data-testid="header" />,
}))

vi.mock('@/components/ui/footer', () => ({
  default: () => <footer data-testid="footer" />,
}))

describe('RootLayout', () => {
  it('renders children', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    )
    expect(getByText('Page content')).toBeInTheDocument()
  })

  it('WhatsApp FAB has rel="noopener noreferrer"', () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>
    )
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders GTM components in production', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.resetModules()
    const { default: ProdLayout } = await import('@/app/layout')
    render(
      <ProdLayout>
        <div />
      </ProdLayout>
    )
    vi.unstubAllEnvs()
    vi.resetModules()
  })
})
