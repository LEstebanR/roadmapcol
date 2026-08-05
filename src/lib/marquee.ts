export const MARQUEE_CARD_WIDTH = 320
export const MARQUEE_GAP = 24
export const MARQUEE_SPEED = 40

export function marqueeDuration(itemCount: number) {
  return (itemCount * (MARQUEE_CARD_WIDTH + MARQUEE_GAP)) / MARQUEE_SPEED
}
