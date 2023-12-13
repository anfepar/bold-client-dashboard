import styles from './page.module.css'
import { getTransactions } from './lib/api/transactions'

export default async function Home() {
  const transactions = await getTransactions()
  return (
    <main className={styles.main}>
    </main>
  )
}
