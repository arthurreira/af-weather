export type CardSize = "small" | "medium" | "tall" | "wide" | "large"

export interface CardItem {
  id: string | number
  title: string
  description?: string
  size: CardSize
  image?: string
  tags?: string[]
  url?: string
  secondaryUrl?: string
  highlight?: string
}

export const cardSizes: Record<CardSize, { cols: string; rows: string }> = {
  small: { cols: "col-span-1", rows: "row-span-1" },
  medium: { cols: "col-span-1", rows: "row-span-2" },
  tall:   { cols: "col-span-1", rows: "row-span-3" },
  wide:   { cols: "col-span-2", rows: "row-span-1" },
  large:  { cols: "col-span-2", rows: "row-span-2" },
}
