import { Transaction } from "@/app/lib/api/transactions";
import { tableConfig } from "./tableConfig";

interface TableProps {
  transactions: Transaction[]
}


export default function Table({ transactions }: TableProps) {
  return (
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
          <tr className="border-b-2 border-slate-100 hover:bg-slate-100" key={transaction.value}>
            {tableConfig.map((header) => (
              <td key={header.value} >
                {header.show(transaction)}
              </td>
            ))}

          </tr>
        ))}
      </tbody>
    </table>
  )
}