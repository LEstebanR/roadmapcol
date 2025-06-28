import type {
  afterAll as vitestAfterAll,
  afterEach as vitestAfterEach,
  beforeAll as vitestBeforeAll,
  beforeEach as vitestBeforeEach,
  describe as vitestDescribe,
  expect as vitestExpect,
  it as vitestIt,
  test as vitestTest,
  vi as vitestVi,
} from 'vitest'

declare global {
  const describe: typeof vitestDescribe
  const it: typeof vitestIt
  const expect: typeof vitestExpect
  const vi: typeof vitestVi
  const test: typeof vitestTest
  const beforeAll: typeof vitestBeforeAll
  const afterAll: typeof vitestAfterAll
  const beforeEach: typeof vitestBeforeEach
  const afterEach: typeof vitestAfterEach
}

export {}
