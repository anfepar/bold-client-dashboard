import { Transaction } from "@/app/lib/api/transactions"
import { getTotalSales } from "@/app/lib/sales"
import { RangeFilter } from "@/app/lib/types"
import { formatCurrency } from "@/app/lib/utils/currency"
import { getFilterDescription } from "@/app/lib/utils/strings"
import { useMemo } from "react"

export interface TotalSalesProps {
  transactions: Transaction[],
  rangeFilter?: RangeFilter

}

export default function TotalSales({ transactions, rangeFilter }: TotalSalesProps) {
  const totalSales = useMemo(() => getTotalSales(transactions), [transactions])
  return (
    <div>
      <h2>{`Total de ventas de ${getFilterDescription(rangeFilter)} `}</h2>
      <p>{formatCurrency(totalSales)}</p>
    </div>
  )
}