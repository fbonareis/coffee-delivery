import { CoffeeListItem } from '../CoffeeListItem'
import { Container, List } from './styles'

interface CoffeeListProps {
  items: {
    id: string
    name: string
    description: string
    price: number
    tags: string[]
    quantity: number
    image?: string
  }[]
}

export function CoffeeList({ items }: CoffeeListProps) {
  return (
    <Container>
      <h2>Nossos Cafés</h2>
      <List>
        {items.map(({ id, ...props }) => (
          <CoffeeListItem key={id} id={id} {...props} />
        ))}
      </List>
    </Container>
  )
}
