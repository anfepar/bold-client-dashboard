'use client'
import Image from "next/image";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transaction } from "@/app/lib/api/transactions";
import { formatCurrency } from "@/app/lib/utils/currency";
import Pagination from "../Pagination/Pagination";
import { tableConfig } from "./tableConfig";

interface TableProps {
  transactions: Transaction[]
  totalItems: number
}

const DEDUCTION_PERCENTAGE = 6

export default function Table({ transactions, totalItems }: TableProps) {
  const valueInfo = useCallback((transaction: Transaction) => {
    if (transaction.state === 'failure') return null
    return (
      <>
        <p>{formatCurrency(transaction.value)}</p>
        <p>Deducción bold</p>
        <p>{formatCurrency((transaction.value * DEDUCTION_PERCENTAGE) / 100)}</p>
      </>
    )
  }, [])

  return (
    <section>
      <table>
        <thead>
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
                <td key={header.value} >
                  {header.icon && <FontAwesomeIcon icon={header.icon(transaction)} />}
                  {header.image && <Image width={20} height={10} src={`/${header.image(transaction)}`} alt={`logo de ${transaction.cardScheme}`} />}
                  {header.show && header.show(transaction)}
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