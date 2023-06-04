import { Minus, Plus } from '@phosphor-icons/react'

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
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function CoffeeListItem({
  id,
  title,
  description,
  tags,
  image,
  price,
}: CoffeeListItemProps) {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Footer>
        <Price>
          <span>R$</span>
          {price.toFixed(2).replace('.', ',')}
        </Price>

        <QuantitySelector>
          <button>
            <Minus weight="bold" />
          </button>
          <input type="number" readOnly value={2} />
          <button>
            <Plus weight="bold" />
          </button>
        </QuantitySelector>

        <AddToCart type="button">
          <CartIcon />
        </AddToCart>
      </Footer>
    </Container>
  )
}
