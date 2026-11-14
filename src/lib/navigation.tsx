import { Home, Map, MapPin } from 'lucide-react'

// Kept apart from data.tsx so client components (e.g. the global header)
// can import nav links without pulling the full tour catalog.
export const HEADER_LINKS = [
  {
    label: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    label: 'Tours',
    href: '/tours',
    icon: <Map />,
  },
  {
    label: 'Personalize your experience',
    href: '/personalize',
    icon: <MapPin />,
  },
]
