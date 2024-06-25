export function formatNumber(price: number) {
  return `R$ ${price.toFixed(2).replace('.', ',')}`
}