import { Transaction, TransactionType } from "./api/transactions";
import { Filters, RangeFilter } from "./types";

export const filterTransactions = (filters: Filters, transactions: Transaction[]) => {
  const filtersFunctions: { [key: string]: Function } = { type: filterByType, range: filterByRange }
  let filteredTransactions = transactions
  for (let key in filters) {
    const filter = filters[key as keyof Filters]
    if (filter) {
      filteredTransactions = filtersFunctions[key as string](filteredTransactions, filter)
    }
  }
  return filteredTransactions
}

const filterByType = (transactions: Transaction[], type: TransactionType): Transaction[] => transactions.filter((transaction) => transaction.type === type)
const filterByRange = (transactions: Transaction[], range: RangeFilter): Transaction[] => {
  return transactions.filter((transaction: Transaction) => {
    const transactionDate = new Date(transaction.date)
    const currentDate = new Date()
    switch (range) {
      case 'today':
        return transactionDate.getDate() === currentDate.getDate()
      case 'week':
        const currentWeekDay = currentDate.getDay()
        const lastWeekDay = 6
        const firstWeekDate = currentDate.getDate() - currentWeekDay;
        const lastWeekDate = currentDate.getDate() + (lastWeekDay - currentWeekDay)
        return transactionDate.getDate() >= firstWeekDate && transactionDate.getDate() <= lastWeekDate
      case 'month':
        return transactionDate.getMonth() === currentDate.getMonth()
    }
  })
}