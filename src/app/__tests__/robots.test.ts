import robots from '@/app/robots'

describe('robots', () => {
  it('returns the correct robots configuration', () => {
    expect(robots()).toEqual({
      rules: { allow: '/', userAgent: '*' },
      sitemap: 'https://roadmapcol.com/sitemap.xml',
    })
  })
})
