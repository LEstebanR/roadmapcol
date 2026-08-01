import { renderMarkdown } from '@/lib/markdown'

describe('renderMarkdown', () => {
  it('converts a heading to HTML', async () => {
    const html = await renderMarkdown('## Hello')
    expect(html).toContain('<h2>Hello</h2>')
  })

  it('converts a GFM table to an HTML table', async () => {
    const html = await renderMarkdown('| A | B |\n|---|---|\n| 1 | 2 |')
    expect(html).toContain('<table>')
  })

  it('converts a link to an anchor tag', async () => {
    const html = await renderMarkdown('[Tours](/tours)')
    expect(html).toContain('<a href="/tours">Tours</a>')
  })
})
