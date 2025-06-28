import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
  useParams: () => ({}),
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: vi.fn(() => null),
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: vi.fn(({ children, href, ...props }) =>
    React.createElement('a', { href, ...props }, children)
  ),
}))

// Mock Next.js font
vi.mock('next/font/local', () => ({
  default: vi.fn(() => ({
    className: 'mocked-font-class',
    style: { fontFamily: 'mocked-font' },
  })),
}))
