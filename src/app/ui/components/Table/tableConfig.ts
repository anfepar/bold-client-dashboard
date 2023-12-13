import { Transaction } from "@/app/lib/api/transactions";

export const tableConfig = [
  { value: 'Transacción', show: (transaction: Transaction) => transaction.state === 'success' ? 'Cobro exitoso' : 'Cobro no realizado' },
  { value: 'Fecha y hora', show: (transaction: Transaction) => new Date(transaction.date).toLocaleString() },
  { value: 'Método de pago', show: (transaction: Transaction) => `**** **** **** ${transaction.paymentMethod}` },
  { value: 'ID transacción Bold', show: (transaction: Transaction) => transaction.id },
  { value: 'Monto', show: (transaction: Transaction) => transaction.value },
]