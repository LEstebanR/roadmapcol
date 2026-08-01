import robots from '@/app/robots'

describe('robots', () => {
  it('returns the correct robots configuration', () => {
    expect(robots()).toEqual({
      host: 'https://roadmapcol.com',
      rules: { allow: '/', userAgent: '*' },
      sitemap: 'https://roadmapcol.com/sitemap.xml',
    })
  })
})
