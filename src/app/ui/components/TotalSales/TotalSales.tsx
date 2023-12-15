import { Transaction } from "@/app/lib/api/transactions"
import { getTotalSales } from "@/app/lib/sales"
import { formatCurrency } from "@/app/lib/utils/currency"

export interface TotalSalesProps {
  transactions: Transaction[]
}

export default function TotalSales({ transactions }: TotalSalesProps) {
  const totalSales = getTotalSales(transactions)
  return (
    <div>
      <h2>Total de ventas hoy</h2>
      <p>{formatCurrency(totalSales)}</p>
    </div>
  )
}