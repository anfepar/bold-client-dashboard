import { Transaction, TransactionType, getTransactions } from './lib/api/transactions'
import Table from './ui/components/Table/Table'
import TotalSales from './ui/components/TotalSales/TotalSales'
import { filterTransactions } from './lib/filters'
import { Filters, RangeFilter } from './lib/types'
import styles from './page.module.sass'
import { getTransactionsByPage } from './lib/utils/pagination'
import TableFilters from './ui/components/TableFilters/TableFilters'
interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: PageProps) {
  const { page, range, type } = searchParams
  const filters: Filters = {
    range: range as RangeFilter || 'month',
    type: type as TransactionType
  }
  const totalTransactions: Transaction[] = await getTransactions()
  const filteredTransactions = filterTransactions(filters, totalTransactions)
  const currentPage = page ? parseInt(page as string) : 1
  const transactionsByPage = getTransactionsByPage(filteredTransactions, currentPage)

  return (
    <main className={styles.wrapper}>
      <section className={styles.page__head}>
        <TotalSales transactions={filteredTransactions} rangeFilter={filters.range} />
        <TableFilters filters={filters} />
      </section>
      <Table transactions={transactionsByPage} totalItems={filteredTransactions.length} rangeFilter={filters.range} />
    </main>
  )
}
