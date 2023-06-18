import { useContext } from 'react'

import { QuantitySelector } from '../../../../Components/QuantitySelector'
import { AppContext } from '../../../../contexts'
import { CartItem } from '../../../../reducers/cart/reducer'
import { formatNumberToRealBR } from '../../../../utils'
import {
  Container,
  HStack,
  Icon,
  Name,
  Price,
  RemoveButton,
  VStack,
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
      <img src={item.image} alt={item.name} />

      <VStack style={{ gap: '0.5rem' }}>
        <HStack style={{ justifyContent: 'space-between' }}>
          <Name>{item.name}</Name>
          <Price>{formatNumberToRealBR(item.price)}</Price>
        </HStack>

        <HStack style={{ gap: '0.5rem' }}>
          <QuantitySelector
            value={item.quantity}
            onDecrement={handleDecrementQuantity}
            onIncrement={handleIncrementQuantity}
          />

          <RemoveButton onClick={handleRemoveItemFromCart}>
            <Icon.Trash />
            Remover
          </RemoveButton>
        </HStack>
      </VStack>
    </Container>
  )
}
