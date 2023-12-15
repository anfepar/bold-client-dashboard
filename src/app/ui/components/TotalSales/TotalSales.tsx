import { Transaction } from "@/app/lib/api/transactions"
import { getTotalSales } from "@/app/lib/sales"
import { formatCurrency } from "@/app/lib/utils/currency"
import { useMemo } from "react"

export interface TotalSalesProps {
  transactions: Transaction[]
}

export default function TotalSales({ transactions }: TotalSalesProps) {
  const totalSales = useMemo(() => getTotalSales(transactions), [transactions])
  return (
    <div>
      <h2>Total de ventas hoy</h2>
      <p>{formatCurrency(totalSales)}</p>
    </div>
  )
}