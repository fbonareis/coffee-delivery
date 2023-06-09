import { Minus, Plus } from '@phosphor-icons/react'
import { useContext, useState } from 'react'

import { AppContext } from '../../../../contexts'
import {
  AddToCart,
  CartIcon,
  Container,
  Description,
  Footer,
  Image,
  Price,
  QuantitySelector,
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

  const formatToCurrency = (price: number) => {
    return price.toFixed(2).replace('.', ',')
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
        <Price>
          <span>R$</span>
          {formatToCurrency(item.price)}
        </Price>

        <QuantitySelector>
          <button
            onClick={handleDecrementQuantity}
            disabled={hasInvalidQuantity}
          >
            <Minus weight="bold" />
          </button>
          <input type="number" readOnly value={quantity} />
          <button onClick={handleIncrementQuantity}>
            <Plus weight="bold" />
          </button>
        </QuantitySelector>

        <AddToCart onClick={handleAddToCart} disabled={hasInvalidQuantity}>
          <CartIcon />
        </AddToCart>
      </Footer>
    </Container>
  )
}
