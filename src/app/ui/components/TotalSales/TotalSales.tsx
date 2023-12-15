import { Transaction } from "@/app/lib/api/transactions"
import { getTotalSales } from "@/app/lib/sales"
import { RangeFilter } from "@/app/lib/types"
import { formatCurrency } from "@/app/lib/utils/currency"
import { getFilterDescription } from "@/app/lib/utils/strings"
import { useMemo } from "react"
import styles from './TotalSales.module.sass'

export interface TotalSalesProps {
  transactions: Transaction[],
  rangeFilter?: RangeFilter

}

export default function TotalSales({ transactions, rangeFilter }: TotalSalesProps) {
  const totalSales = useMemo(() => getTotalSales(transactions), [transactions])
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{`Total de ventas de ${getFilterDescription(rangeFilter)}`}</h2>
      <div className={styles.container__content}>
        <p className={styles.container__text}>{formatCurrency(totalSales)}</p>
      </div>
    </div>
  )
}