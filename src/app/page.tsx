import { Transaction, getTransactions } from './lib/api/transactions'
import Table from './ui/components/Table/Table'
import styles from './page.module.css'

export default async function Home() {
  const transactions: Transaction[] = await getTransactions()
  return (
    <main className={styles.main}>
      <Table transactions={transactions} />
    </main>
  )
}
