import { useContext } from 'react'

import { AppContext } from '../../../../contexts'
import { CartItem } from '../../../../reducers/cart/reducer'
import { formatNumberToRealBR } from '../../../../utils'
import {
  Container,
  HStack,
  Icon,
  Name,
  Price,
  QuantitySelector,
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
          <QuantitySelector>
            <button
              onClick={handleDecrementQuantity}
              disabled={item.quantity === 1}
            >
              <Icon.Minus />
            </button>
            <input type="number" readOnly value={item.quantity} />
            <button onClick={handleIncrementQuantity}>
              <Icon.Plus />
            </button>
          </QuantitySelector>

          <RemoveButton onClick={handleRemoveItemFromCart}>
            <Icon.Trash />
            Remover
          </RemoveButton>
        </HStack>
      </VStack>
    </Container>
  )
}
