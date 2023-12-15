import { Transaction } from "@/app/lib/api/transactions"
import { faLink, faMobileRetro } from "@fortawesome/free-solid-svg-icons"

export const tableConfig = [
  {
    value: 'Transacción',
    show: (transaction: Transaction) => transaction.state === 'success' ? 'Cobro exitoso' : 'Cobro no realizado',
    icon: (transaction: Transaction) => transaction.type === 'terminal' ? faMobileRetro : faLink
  },
  { value: 'Fecha y hora', show: (transaction: Transaction) => new Date(transaction.date).toLocaleString() },
  {
    value: 'Método de pago',
    show: (transaction: Transaction) => `**** **** **** ${transaction.paymentMethod}`,
    image: (transaction: Transaction) => {
      switch (transaction.cardScheme) {
        case 'mastercard':
          return 'card.png'
        case 'visa':
          return 'visa.png'
        default:
          return 'credit-card.png'
      }
    }
  },
  { value: 'ID transacción Bold', show: (transaction: Transaction) => transaction.id },
  { value: 'Monto', showValueInfo: true },
]