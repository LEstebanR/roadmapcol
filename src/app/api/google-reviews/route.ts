import { getGoogleReviews } from '@/lib/google-reviews'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const reviews = await getGoogleReviews()

    return NextResponse.json(reviews, {
      headers: {
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Unable to load Google reviews', error)
    return NextResponse.json(
      { error: 'Google reviews are not available' },
      { status: 503 }
    )
  }
}
