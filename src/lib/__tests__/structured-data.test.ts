import { TESTIMONIALS } from '@/lib/data'
import {
  blogBreadcrumbSchema,
  blogPostingSchema,
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  touristTripSchema,
} from '@/lib/structured-data'

describe('structured-data', () => {
  describe('organizationSchema', () => {
    it('returns Organization schema with correct type and url', () => {
      const schema = organizationSchema()
      expect(schema['@type']).toBe('Organization')
      expect(schema.url).toBe('https://roadmapcol.com')
      expect(schema.name).toBe('Road Map Col')
    })

    it('includes contact point with phone and email', () => {
      const schema = organizationSchema()
      expect(schema.contactPoint.telephone).toBeDefined()
      expect(schema.contactPoint.email).toBeDefined()
    })

    it('includes sameAs with social links', () => {
      const schema = organizationSchema()
      expect(Array.isArray(schema.sameAs)).toBe(true)
      expect(schema.sameAs.length).toBeGreaterThan(0)
    })

    it('includes an aggregateRating derived from TESTIMONIALS', () => {
      const schema = organizationSchema()
      expect(schema.aggregateRating['@type']).toBe('AggregateRating')
      expect(schema.aggregateRating.reviewCount).toBe(TESTIMONIALS.length)
      expect(schema.aggregateRating.ratingValue).toBeGreaterThan(0)
      expect(schema.aggregateRating.ratingValue).toBeLessThanOrEqual(5)
    })

    it('includes one Review per testimonial with matching author and rating', () => {
      const schema = organizationSchema()
      expect(schema.review).toHaveLength(TESTIMONIALS.length)
      expect(schema.review[0]).toMatchObject({
        '@type': 'Review',
        author: { '@type': 'Person', name: TESTIMONIALS[0].author },
        reviewBody: TESTIMONIALS[0].quote,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: TESTIMONIALS[0].rating,
        },
      })
    })
  })

  describe('touristTripSchema', () => {
    const tour = {
      description: 'A great tour',
      href: '/tours/test',
      image: 'https://example.com/img.jpg',
      price: 120,
      title: 'Test Tour',
    }

    it('returns TouristTrip schema with tour data', () => {
      const schema = touristTripSchema(tour)
      expect(schema['@type']).toBe('TouristTrip')
      expect(schema.name).toBe('Test Tour')
      expect(schema.description).toBe('A great tour')
      expect(schema.image).toBe('https://example.com/img.jpg')
    })

    it('includes offer with correct price and currency', () => {
      const schema = touristTripSchema(tour)
      expect(schema.offers.price).toBe(120)
      expect(schema.offers.priceCurrency).toBe('USD')
    })

    it('builds full url from href', () => {
      const schema = touristTripSchema(tour)
      expect(schema.url).toBe('https://roadmapcol.com/tours/test')
    })
  })

  describe('itemListSchema', () => {
    const tours = [
      { href: '/tours/tour-a', title: 'Tour A' },
      { href: '/tours/tour-b', title: 'Tour B' },
    ]

    it('returns ItemList schema with one entry per tour', () => {
      const schema = itemListSchema(tours)
      expect(schema['@type']).toBe('ItemList')
      expect(schema.itemListElement).toHaveLength(2)
    })

    it('sets positions and names in order', () => {
      const schema = itemListSchema(tours)
      expect(schema.itemListElement[0]).toMatchObject({
        name: 'Tour A',
        position: 1,
      })
      expect(schema.itemListElement[1]).toMatchObject({
        name: 'Tour B',
        position: 2,
      })
    })

    it('builds full item urls from href', () => {
      const schema = itemListSchema(tours)
      expect(schema.itemListElement[0].item).toBe(
        'https://roadmapcol.com/tours/tour-a'
      )
    })
  })

  describe('breadcrumbSchema', () => {
    it('returns BreadcrumbList with 3 items', () => {
      const schema = breadcrumbSchema('Test Tour', '/tours/test')
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(3)
    })

    it('sets correct positions and names', () => {
      const schema = breadcrumbSchema('Test Tour', '/tours/test')
      const [home, tours, tour] = schema.itemListElement
      expect(home.position).toBe(1)
      expect(home.name).toBe('Home')
      expect(tours.position).toBe(2)
      expect(tours.name).toBe('Tours')
      expect(tour.position).toBe(3)
      expect(tour.name).toBe('Test Tour')
    })

    it('builds full item urls', () => {
      const schema = breadcrumbSchema('Test Tour', '/tours/test')
      expect(schema.itemListElement[2].item).toBe(
        'https://roadmapcol.com/tours/test'
      )
    })
  })

  describe('blogBreadcrumbSchema', () => {
    it('returns BreadcrumbList with Home, Blog and the post', () => {
      const schema = blogBreadcrumbSchema('Test Post', 'test-post')
      expect(schema['@type']).toBe('BreadcrumbList')
      const [home, blog, post] = schema.itemListElement
      expect(home.name).toBe('Home')
      expect(blog.name).toBe('Blog')
      expect(blog.item).toBe('https://roadmapcol.com/blog')
      expect(post.name).toBe('Test Post')
      expect(post.item).toBe('https://roadmapcol.com/blog/test-post')
    })
  })

  describe('blogPostingSchema', () => {
    const post = {
      coverImage: 'https://example.com/cover.jpg',
      date: '2026-01-15',
      description: 'A great post',
      slug: 'test-post',
      title: 'Test Post',
    }

    it('returns BlogPosting schema with post data', () => {
      const schema = blogPostingSchema(post)
      expect(schema['@type']).toBe('BlogPosting')
      expect(schema.headline).toBe('Test Post')
      expect(schema.description).toBe('A great post')
      expect(schema.image).toBe('https://example.com/cover.jpg')
      expect(schema.datePublished).toBe('2026-01-15')
    })

    it('builds full url and mainEntityOfPage from slug', () => {
      const schema = blogPostingSchema(post)
      expect(schema.url).toBe('https://roadmapcol.com/blog/test-post')
      expect(schema.mainEntityOfPage).toBe(
        'https://roadmapcol.com/blog/test-post'
      )
    })

    it('includes publisher with logo', () => {
      const schema = blogPostingSchema(post)
      expect(schema.publisher.name).toBe('Road Map Col')
      expect(schema.publisher.logo.url).toContain('cloudinary.com')
    })
  })
})
