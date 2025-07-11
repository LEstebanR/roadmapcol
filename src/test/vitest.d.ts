/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

declare global {
  const describe: typeof import('vitest').describe
  const it: typeof import('vitest').it
  const expect: typeof import('vitest').expect
  const vi: typeof import('vitest').vi
  const test: typeof import('vitest').test
  const beforeAll: typeof import('vitest').beforeAll
  const afterAll: typeof import('vitest').afterAll
  const beforeEach: typeof import('vitest').beforeEach
  const afterEach: typeof import('vitest').afterEach
}
