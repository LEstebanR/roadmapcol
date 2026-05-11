import sitemap from '@/app/sitemap'

vi.mock('@/lib/data', () => ({
  TOURS: [
    { href: '/tours/tour-1', title: 'Tour 1' },
    { href: '/tours/tour-2', title: 'Tour 2' },
    { href: '/tours/tour-1', title: 'Tour 1 duplicate' },
  ],
}))

describe('sitemap', () => {
  it('includes all static routes', () => {
    const urls = sitemap().map((r) => r.url)
    expect(urls).toContain('https://roadmapcol.com')
    expect(urls).toContain('https://roadmapcol.com/tours')
    expect(urls).toContain('https://roadmapcol.com/personalize')
  })

  it('includes unique tour routes', () => {
    const urls = sitemap().map((r) => r.url)
    expect(urls).toContain('https://roadmapcol.com/tours/tour-1')
    expect(urls).toContain('https://roadmapcol.com/tours/tour-2')
    const duplicates = urls.filter(
      (u) => u === 'https://roadmapcol.com/tours/tour-1'
    )
    expect(duplicates).toHaveLength(1)
  })
})
