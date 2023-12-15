import { Transaction } from "./api/transactions"
const DEDUCTION_PERCENTAGE = 6

export const getDeductionValue = (value: number) => {
  return (value * DEDUCTION_PERCENTAGE) / 100
}

export const getTotalSales = (transactions: Transaction[]) => {
  return transactions.reduce((totalSales, currentTransaction) => {
    if (currentTransaction.state === 'success') {
      return totalSales += (currentTransaction.value - getDeductionValue(currentTransaction.value))
    }
    return totalSales
  }, 0)
}