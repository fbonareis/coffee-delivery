import { useContext } from 'react'

import { Text } from '@/ui-components'
import { QuantitySelector } from '@/ui-components/QuantitySelector'
import { AppContext } from '@/contexts'
import { CartItem } from '@/reducers/cart/reducer'
import { formatNumberToRealBR } from '@/utils'

import {
  Actions,
  Container,
  Content,
  Icon,
  Image,
  Info,
  Price,
  RemoveButton,
} from './styles'

interface CartListItemProps {
  item: CartItem
}

export function CartListItem({ item }: CartListItemProps) {
  const { removeItemFromCart, updateCartItemQuantity } = useContext(AppContext)

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(item)
  }

  const handleIncrementQuantity = () => {
    updateCartItemQuantity({ ...item, quantity: item.quantity + 1 })
  }

  const handleDecrementQuantity = () => {
    if (item.quantity === 1) {
      return
    }

    updateCartItemQuantity({ ...item, quantity: item.quantity - 1 })
  }

  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Content>
        <Info style={{ justifyContent: 'space-between' }}>
          <Text size="m" color="base-subtitle">
            {item.name}
          </Text>
          <Price>{formatNumberToRealBR(item.price)}</Price>
        </Info>

        <Actions>
          <QuantitySelector
            value={item.quantity}
            onDecrement={handleDecrementQuantity}
            onIncrement={handleIncrementQuantity}
          />
          <RemoveButton onClick={handleRemoveItemFromCart}>
            <Icon.Trash />
            Remover
          </RemoveButton>
        </Actions>
      </Content>
    </Container>
  )
}
