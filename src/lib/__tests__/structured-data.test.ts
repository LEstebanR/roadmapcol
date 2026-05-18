import {
  breadcrumbSchema,
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
})
