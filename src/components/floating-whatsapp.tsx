import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { CONTACT, TOURS } from '@/lib/data'

// Server component: only the pathname → title map crosses to the client,
// so the full tour catalog never ships in the global client bundle.
const TOUR_TITLES: Record<string, string> = Object.fromEntries(
  TOURS.map((tour) => [tour.href, tour.title])
)

export function FloatingWhatsApp() {
  return (
    <FloatingWhatsAppButton phone={CONTACT.phone} tourTitles={TOUR_TITLES} />
  )
}
