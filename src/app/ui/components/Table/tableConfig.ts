import { Transaction } from "@/app/lib/api/transactions"
import { ScreenType } from "@/app/lib/hooks/useScreenType"
import { faLink, faMobileRetro } from "@fortawesome/free-solid-svg-icons"

export const tableConfig = [
  {
    value: 'Transacción',
    show: (transaction: Transaction) => transaction.state === 'success' ? 'Cobro exitoso' : 'Cobro no realizado',
    icon: (transaction: Transaction) => transaction.type === 'terminal' ? faMobileRetro : faLink,
    className: 'table__row__transaction'
  },
  { value: 'Fecha y hora', show: (transaction: Transaction) => new Date(transaction.date).toLocaleString(), className: 'table__row__date' },
  {
    value: 'Método de pago',
    show: (transaction: Transaction, screenType: ScreenType) =>  screenType === 'desktop' ? `**** **** **** ${transaction.paymentMethod}` : `${transaction.paymentMethod}`,
    image: (transaction: Transaction) => {
      switch (transaction.cardScheme) {
        case 'mastercard':
          return 'card.png'
        case 'visa':
          return 'visa.png'
        default:
          return 'credit-card.png'
      }
    },
    className: 'table__row__method'
  },
  { value: 'ID transacción Bold', show: (transaction: Transaction) => transaction.id, className: 'table__row__id' },
  { value: 'Monto', showValueInfo: true, className: 'table__row__value' },
]