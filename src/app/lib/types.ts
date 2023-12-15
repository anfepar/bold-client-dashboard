import { TransactionType } from "./api/transactions"

export type RangeFilter = 'today' | 'week' | 'month'

export interface Filters {
  range?: RangeFilter,
  type?: TransactionType
}