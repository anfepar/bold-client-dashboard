export const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumSignificantDigits: 3
  })
  return formatter.format(value)
}