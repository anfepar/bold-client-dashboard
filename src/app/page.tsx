import { Transaction, getTransactions } from './lib/api/transactions'
import Table from './ui/components/Table/Table'
import styles from './page.module.css'
import { getTransactionsByPage } from './lib/utils/pagination'
interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: PageProps) {
  const pageParam = searchParams.page
  const currentPage = pageParam ? parseInt(pageParam as string) : 1
  const totalTransactions: Transaction[] = await getTransactions()
  const transactions = getTransactionsByPage(currentPage, totalTransactions)

  return (
    <main className={styles.main}>
      <Table transactions={transactions} totalItems={totalTransactions.length} />
    </main>
  )
}
