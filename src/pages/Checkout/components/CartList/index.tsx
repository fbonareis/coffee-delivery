import { CartItem } from '@/reducers/cart/reducer'

import { CartListItem } from '../CartListItem'
import { Container } from './styles'

interface CartListProps {
  items: CartItem[]
}

export function CartList({ items }: CartListProps) {
  return (
    <Container>
      {items.map((item) => (
        <CartListItem key={item.productId} item={item} />
      ))}
    </Container>
  )
}
