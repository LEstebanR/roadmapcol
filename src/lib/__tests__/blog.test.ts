import { getAllPostSlugs, getAllPosts, getPostBySlug } from '@/lib/blog'

describe('blog', () => {
  describe('getAllPostSlugs', () => {
    it('returns at least 15 slugs', () => {
      expect(getAllPostSlugs().length).toBeGreaterThanOrEqual(15)
    })

    it('returns unique slugs', () => {
      const slugs = getAllPostSlugs()
      expect(new Set(slugs).size).toBe(slugs.length)
    })
  })

  describe('getPostBySlug', () => {
    it('returns null for an unknown slug', () => {
      expect(getPostBySlug('this-post-does-not-exist')).toBeNull()
    })

    it('returns full post data for a known slug', () => {
      const [slug] = getAllPostSlugs()
      const post = getPostBySlug(slug)
      expect(post).not.toBeNull()
      expect(post?.slug).toBe(slug)
      expect(post?.title).toBeTruthy()
      expect(post?.description).toBeTruthy()
      expect(post?.coverImage).toMatch(/^https:\/\//)
      expect(post?.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Array.isArray(post?.tags)).toBe(true)
      expect(post?.tags.length).toBeGreaterThan(0)
      expect(post?.content.length).toBeGreaterThan(200)
    })
  })

  describe('getAllPosts', () => {
    it('returns posts sorted by date, most recent first', () => {
      const dates = getAllPosts().map((post) => post.date)
      const expectedDescending = [...dates].sort().reverse()
      expect(dates).toEqual(expectedDescending)
    })

    it('every post has complete, well-formed frontmatter', () => {
      getAllPosts().forEach((post) => {
        expect(post.title.length).toBeGreaterThan(10)
        expect(post.description.length).toBeGreaterThan(20)
        expect(post.description.length).toBeLessThanOrEqual(170)
        expect(post.coverImage).toMatch(/^https:\/\/res\.cloudinary\.com\//)
        expect(post.tags.length).toBeGreaterThan(0)
      })
    })
  })
})
