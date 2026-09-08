import { getGoogleReviews } from '@/lib/google-reviews'

describe('getGoogleReviews', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('requires the API configuration', async () => {
    vi.stubEnv('GOOGLE_MAPS_API_KEY', '')
    vi.stubEnv('GOOGLE_PLACE_ID', '')

    await expect(getGoogleReviews()).rejects.toThrow(
      'Google Places is not configured'
    )
  })

  it('throws when Google rejects the request', async () => {
    vi.stubEnv('GOOGLE_MAPS_API_KEY', 'test-key')
    vi.stubEnv('GOOGLE_PLACE_ID', 'test-place')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 403 }))

    await expect(getGoogleReviews()).rejects.toThrow(
      'Google Places request failed: 403'
    )
  })

  it('maps review data and ignores reviews without text', async () => {
    vi.stubEnv('GOOGLE_MAPS_API_KEY', 'test-key')
    vi.stubEnv('GOOGLE_PLACE_ID', 'test-place')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          displayName: { text: 'Road Map Col' },
          googleMapsUri: 'https://maps.google.com/place',
          rating: 4.8,
          userRatingCount: 42,
          reviews: [
            {
              authorAttribution: {
                displayName: 'Test Traveler',
                photoUri: 'https://example.com/avatar.jpg',
              },
              googleMapsUri: 'https://maps.google.com/review',
              rating: 5,
              relativePublishTimeDescription: 'a week ago',
              text: { text: 'Wonderful tour.' },
            },
            {
              rating: 4,
              text: { text: 'Good experience.' },
            },
          ],
        }),
      })
    )

    await expect(getGoogleReviews()).resolves.toEqual({
      googleMapsUri: 'https://maps.google.com/place',
      placeName: 'Road Map Col',
      placeRating: 4.8,
      reviews: [
        {
          author: 'Test Traveler',
          avatarUrl: 'https://example.com/avatar.jpg',
          googleMapsUri: 'https://maps.google.com/review',
          location: 'a week ago',
          quote: 'Wonderful tour.',
          rating: 5,
          relativeDate: 'a week ago',
        },
        {
          author: 'Google traveler',
          location: 'Google Maps',
          quote: 'Good experience.',
          rating: 4,
        },
      ],
      userRatingCount: 42,
    })
  })

  it('uses safe defaults when optional place data is missing', async () => {
    vi.stubEnv('GOOGLE_MAPS_API_KEY', 'test-key')
    vi.stubEnv('GOOGLE_PLACE_ID', 'test-place')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({}),
      })
    )

    await expect(getGoogleReviews()).resolves.toMatchObject({
      placeName: 'Road Map Col on Google Maps',
      reviews: [],
    })
  })
})
