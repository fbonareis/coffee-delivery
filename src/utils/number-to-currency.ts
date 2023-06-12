export function formatNumberToRealBR(value: number) {
  const numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return numberFormat.format(value)
}
