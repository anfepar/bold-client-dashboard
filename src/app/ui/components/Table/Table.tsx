'use client'
import Image from "next/image";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transaction } from "@/app/lib/api/transactions";
import { formatCurrency } from "@/app/lib/utils/currency";
import Pagination from "../Pagination/Pagination";
import { tableConfig } from "./tableConfig";
import { getDeductionValue } from "@/app/lib/sales";
import { RangeFilter } from "@/app/lib/types";
import { getFilterDescription } from "@/app/lib/utils/strings";
import styles from './Table.module.sass'
import useScreenType from "@/app/lib/hooks/useScreenType";

interface TableProps {
  transactions: Transaction[]
  totalItems: number,
  rangeFilter?: RangeFilter
}

export default function Table({ transactions, totalItems, rangeFilter }: TableProps) {
  const screenType = useScreenType()
  const valueInfo = useCallback((transaction: Transaction) => {
    if (transaction.state === 'failure') return null
    return (
      <>
        <p>{formatCurrency(transaction.value)}</p>
        <p className={styles.table__row__info_text}>Deducción bold</p>
        <p className={styles.table__row__info_value}>{`-${formatCurrency(getDeductionValue(transaction.value))}`}</p>
      </>
    )
  }, [])

  return (
    <section className={styles.table__container}>
      <h2 className={styles.table__title}>
        {`Tus ventas de ${getFilterDescription(rangeFilter)}`}
      </h2>
      <table className={styles.table__table}>
        <thead className={styles.table__table__header}>
          <tr>
            {tableConfig.map((header) => (
              <th key={header.value}>{header.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.value}>
              {tableConfig.map((header) => (
                <td key={header.value} className={`${styles.table__row} ${styles[header.className]}`} >
                  {header.icon && <FontAwesomeIcon className={styles.table__icon} icon={header.icon(transaction)} />}
                  {header.image && <Image className={styles.table__image} width={20} height={10} src={`/${header.image(transaction)}`} alt={`logo de ${transaction.cardScheme}`} />}
                  {header.show && header.show(transaction, screenType)}
                  {header.showValueInfo && valueInfo(transaction)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalItems={totalItems} />
    </section>
  )
}