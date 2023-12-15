import { RangeFilter } from "../types"
import { getMonth } from "./date"

export const getFilterDescription = (rangeFilter: RangeFilter | undefined) => {
  switch (rangeFilter) {
    case 'today':
      return 'hoy'
    case 'week':
      return 'esta semana'
    case 'month':
      return `${getMonth(new Date().getMonth())}`
    default:
      return ''
  }
}