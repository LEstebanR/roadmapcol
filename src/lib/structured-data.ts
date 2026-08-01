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

export function itemListSchema(tours: { href: string; title: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tours.map((tour, index) => ({
      '@type': 'ListItem',
      item: `${BASE_URL}${tour.href}`,
      name: tour.title,
      position: index + 1,
    })),
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

export function blogBreadcrumbSchema(postTitle: string, slug: string) {
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
        item: `${BASE_URL}/blog`,
        name: 'Blog',
        position: 2,
      },
      {
        '@type': 'ListItem',
        item: `${BASE_URL}/blog/${slug}`,
        name: postTitle,
        position: 3,
      },
    ],
  }
}

export function blogPostingSchema(post: {
  coverImage: string
  date: string
  description: string
  slug: string
  title: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    author: { '@type': 'Organization', name: 'Road Map Col' },
    datePublished: post.date,
    description: post.description,
    headline: post.title,
    image: post.coverImage,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
      name: 'Road Map Col',
    },
    url: `${BASE_URL}/blog/${post.slug}`,
  }
}
