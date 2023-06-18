import { Text } from '@/ui-components'
import { formatNumberToRealBR } from '@/utils'

import { ConfirmButton, Container, Item } from './styles'

interface CartSummaryProps {
  subTotal: number
  delivery: number
  total: number
}

export function CartSummary({ subTotal, delivery, total }: CartSummaryProps) {
  return (
    <Container>
      <Item>
        <Text size="s" color="base-text">
          Total de itens
        </Text>

        <Text size="m" color="base-text">
          {formatNumberToRealBR(subTotal)}
        </Text>
      </Item>

      <Item>
        <Text size="s" color="base-text">
          Entrega
        </Text>
        <Text size="m" color="base-text">
          {formatNumberToRealBR(delivery)}
        </Text>
      </Item>

      <Item>
        <Text size="l" color="base-text" weight="bold">
          Total
        </Text>
        <Text size="l" color="base-text" weight="bold">
          {formatNumberToRealBR(total)}
        </Text>
      </Item>

      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </Container>
  )
}
