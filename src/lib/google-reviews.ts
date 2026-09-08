export type GoogleReview = {
  author: string
  avatarUrl?: string
  location: string
  quote: string
  rating: number
  relativeDate?: string
  googleMapsUri?: string
}

export type GoogleReviewsResponse = {
  placeName: string
  placeRating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews: GoogleReview[]
}

type PlacesReview = {
  authorAttribution?: { displayName?: string; photoUri?: string }
  googleMapsUri?: string
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
}

type PlaceDetailsResponse = {
  displayName?: { text?: string }
  googleMapsUri?: string
  rating?: number
  userRatingCount?: number
  reviews?: PlacesReview[]
}

export async function getGoogleReviews(): Promise<GoogleReviewsResponse> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    throw new Error('Google Places is not configured')
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      cache: 'no-store',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask':
          'displayName,googleMapsUri,rating,userRatingCount,reviews.rating,reviews.text,reviews.relativePublishTimeDescription,reviews.authorAttribution.displayName,reviews.authorAttribution.photoUri,reviews.googleMapsUri',
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Google Places request failed: ${response.status}`)
  }

  const place = (await response.json()) as PlaceDetailsResponse

  return {
    googleMapsUri: place.googleMapsUri,
    placeName: place.displayName?.text ?? 'Road Map Col on Google Maps',
    placeRating: place.rating,
    reviews: (place.reviews ?? [])
      .filter((review) => review.text?.text && review.rating)
      .map((review) => ({
        author: review.authorAttribution?.displayName ?? 'Google traveler',
        avatarUrl: review.authorAttribution?.photoUri,
        googleMapsUri: review.googleMapsUri,
        location: review.relativePublishTimeDescription ?? 'Google Maps',
        quote: review.text?.text ?? '',
        rating: review.rating ?? 0,
        relativeDate: review.relativePublishTimeDescription,
      })),
    userRatingCount: place.userRatingCount,
  }
}
