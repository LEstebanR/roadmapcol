import { getGoogleReviews } from '@/lib/google-reviews'
import { GET } from '@/app/api/google-reviews/route'

vi.mock('@/lib/google-reviews', () => ({
  getGoogleReviews: vi.fn(),
}))

const getGoogleReviewsMock = vi.mocked(getGoogleReviews)

describe('GET /api/google-reviews', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.restoreAllMocks()
  })

  it('returns Google reviews with cache headers', async () => {
    getGoogleReviewsMock.mockResolvedValue({
      placeName: 'Road Map Col',
      reviews: [],
    })

    const response = await GET()

    expect(response.status).toBe(200)
    expect(response.headers.get('Cache-Control')).toContain('max-age=300')
    await expect(response.json()).resolves.toEqual({
      placeName: 'Road Map Col',
      reviews: [],
    })
  })

  it('returns a service unavailable response when Google fails', async () => {
    getGoogleReviewsMock.mockRejectedValue(new Error('Google failed'))
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await GET()

    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toEqual({
      error: 'Google reviews are not available',
    })
    expect(consoleError).toHaveBeenCalled()
  })
})
