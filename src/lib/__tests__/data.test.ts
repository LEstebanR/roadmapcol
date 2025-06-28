import { CONTACT, HEADER_LINKS, TOURS } from '@/lib/data'

describe('Data Constants', () => {
  describe('TOURS', () => {
    it('should be an array', () => {
      expect(Array.isArray(TOURS)).toBe(true)
    })

    it('should have tours with required properties', () => {
      expect(TOURS.length).toBeGreaterThan(0)

      TOURS.forEach((tour) => {
        expect(tour).toHaveProperty('place')
        expect(tour).toHaveProperty('title')
        expect(tour).toHaveProperty('description')
        expect(tour).toHaveProperty('price')
        expect(tour).toHaveProperty('href')
        expect(typeof tour.price).toBe('number')
      })
    })

    it('should have activities with numeric prices', () => {
      TOURS.forEach((tour) => {
        if (tour.activities && tour.activities.length > 0) {
          tour.activities.forEach((activity) => {
            expect(typeof activity.price).toBe('number')
          })
        }
      })
    })
  })

  describe('HEADER_LINKS', () => {
    it('should be an array with navigation links', () => {
      expect(Array.isArray(HEADER_LINKS)).toBe(true)
      expect(HEADER_LINKS.length).toBeGreaterThan(0)

      HEADER_LINKS.forEach((link) => {
        expect(link).toHaveProperty('label')
        expect(link).toHaveProperty('href')
        expect(typeof link.label).toBe('string')
        expect(typeof link.href).toBe('string')
      })
    })
  })

  describe('CONTACT', () => {
    it('should have contact information', () => {
      expect(CONTACT).toHaveProperty('phone')
      expect(CONTACT).toHaveProperty('email')
      expect(typeof CONTACT.phone).toBe('string')
      expect(typeof CONTACT.email).toBe('string')
    })
  })
})
