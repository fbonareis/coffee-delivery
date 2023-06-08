import { Minus, Plus } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'

import { AppContext } from '../../../../contexts/AppContext'
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

interface CoffeeListItemProps {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  tags: string[]
  image?: string
}

export function CoffeeListItem({
  id,
  name,
  description,
  quantity,
  tags,
  image,
  price,
}: CoffeeListItemProps) {
  const { updateQuantity } = useContext(AppContext)

  useEffect(() => {
    console.log('item use effect')
  }, [])

  function handleIncrementQuantity() {
    updateQuantity(id, quantity + 1)
  }

  function handleDecrementQuantity() {
    updateQuantity(id, quantity - 1)
  }

  return (
    <Container>
      <Image src={image} alt={name} />
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Title>{name}</Title>
      <Description>{description}</Description>

      <Footer>
        <Price>
          <span>R$</span>
          {price.toFixed(2).replace('.', ',')}
        </Price>

        <QuantitySelector>
          <button onClick={handleDecrementQuantity}>
            <Minus weight="bold" />
          </button>
          <input type="number" readOnly value={quantity} />
          <button onClick={handleIncrementQuantity}>
            <Plus weight="bold" />
          </button>
        </QuantitySelector>

        <AddToCart>
          <CartIcon />
        </AddToCart>
      </Footer>
    </Container>
  )
}
