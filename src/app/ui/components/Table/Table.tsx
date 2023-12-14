'use client'
import { Transaction } from "@/app/lib/api/transactions";
import { useParams } from "next/navigation";
import { tableConfig } from "./tableConfig";
import Pagination from "../Pagination/Pagination";
import { getTransactionsByPage } from "@/app/lib/utils/pagination";


interface TableProps {
  transactions: Transaction[]
  totalItems: number
}


export default function Table({ transactions, totalItems }: TableProps) {
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
                  {header.show(transaction)}
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