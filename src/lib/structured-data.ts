import { CONTACT } from './data'

const BASE_URL = 'https://roadmapcol.com'
const LOGO_URL =
  'https://res.cloudinary.com/lesteban/image/upload/v1748229585/roadmap/road_map_sin_fondo_atjeji.png'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTACT.email,
      telephone: CONTACT.phone,
    },
    logo: LOGO_URL,
    name: 'Road Map Col',
    sameAs: [CONTACT.instagram, CONTACT.tiktok],
    url: BASE_URL,
  }
}

export function touristTripSchema(tour: {
  description: string
  href: string
  image: string
  price: number
  title: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    description: tour.description,
    image: tour.image,
    name: tour.title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: tour.price,
      priceCurrency: 'USD',
      url: `${BASE_URL}${tour.href}`,
    },
    url: `${BASE_URL}${tour.href}`,
  }
}

export function breadcrumbSchema(tourTitle: string, tourHref: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        item: BASE_URL,
        name: 'Home',
        position: 1,
      },
      {
        '@type': 'ListItem',
        item: `${BASE_URL}/tours`,
        name: 'Tours',
        position: 2,
      },
      {
        '@type': 'ListItem',
        item: `${BASE_URL}${tourHref}`,
        name: tourTitle,
        position: 3,
      },
    ],
  }
}
