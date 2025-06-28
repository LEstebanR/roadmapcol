import { cn } from '@/lib/utils'

describe('Utils', () => {
  describe('cn function', () => {
    it('combines class names correctly', () => {
      const result = cn('class1', 'class2')
      expect(result).toContain('class1')
      expect(result).toContain('class2')
    })

    it('handles conditional classes', () => {
      const result = cn('base', true && 'conditional', false && 'hidden')
      expect(result).toContain('base')
      expect(result).toContain('conditional')
      expect(result).not.toContain('hidden')
    })

    it('handles undefined and null values', () => {
      const result = cn('base', undefined, null, 'valid')
      expect(result).toContain('base')
      expect(result).toContain('valid')
    })

    it('merges conflicting Tailwind classes correctly', () => {
      const result = cn('p-4', 'p-8')
      // Should keep the last one (p-8) when using tailwind-merge
      expect(result).toContain('p-8')
      expect(result).not.toContain('p-4')
    })
  })
})
