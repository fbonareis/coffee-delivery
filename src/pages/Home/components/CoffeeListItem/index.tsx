import { useContext, useState } from 'react'

import { QuantitySelector } from '@/ui-components'
import { AppContext } from '@/contexts'
import { formatNumberToRealBR } from '@/utils'

import {
  AddToCart,
  CartIcon,
  Container,
  Description,
  Footer,
  Image,
  Price,
  Tag,
  Tags,
  Title,
} from './styles'

export interface CoffeeListItemProps {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image?: string
}

export function CoffeeListItem(item: CoffeeListItemProps) {
  const { addItemToCart } = useContext(AppContext)
  const [quantity, setQuantity] = useState(0)

  const hasInvalidQuantity = quantity === 0

  const handleAddToCart = () => {
    const newItem = {
      productId: item.id,
      quantity,
      ...item,
    }

    addItemToCart(newItem)
    setQuantity(0)
  }

  const handleIncrementQuantity = () => setQuantity((prev) => prev + 1)

  const handleDecrementQuantity = () => {
    if (hasInvalidQuantity) {
      return
    }

    setQuantity((prev) => prev - 1)
  }

  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Tags>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Title>{item.name}</Title>
      <Description>{item.description}</Description>
      <Footer>
        <Price>{formatNumberToRealBR(item.price)}</Price>

        <QuantitySelector
          value={quantity}
          onDecrement={handleDecrementQuantity}
          onIncrement={handleIncrementQuantity}
        />

        <AddToCart onClick={handleAddToCart} disabled={hasInvalidQuantity}>
          <CartIcon />
        </AddToCart>
      </Footer>
    </Container>
  )
}
