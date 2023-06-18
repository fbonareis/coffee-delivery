import { formatNumberToRealBR } from '@/utils'

import { ConfirmButton, Container, Summary } from './styles'

interface CartSummaryProps {
  subTotal: number
  delivery: number
  total: number
}

export function CartSummary({ subTotal, delivery, total }: CartSummaryProps) {
  return (
    <Container>
      <Summary.Item>
        <Summary.Name>Total de itens</Summary.Name>
        <Summary.Value>{formatNumberToRealBR(subTotal)}</Summary.Value>
      </Summary.Item>

      <Summary.Item>
        <Summary.Name>Entrega</Summary.Name>
        <Summary.Value>{formatNumberToRealBR(delivery)}</Summary.Value>
      </Summary.Item>

      <Summary.Item>
        <Summary.Name strong>Total</Summary.Name>
        <Summary.Value strong>{formatNumberToRealBR(total)}</Summary.Value>
      </Summary.Item>

      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </Container>
  )
}
