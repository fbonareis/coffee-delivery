import { CoffeeListItem } from '../CoffeeListItem'
import { Container, List } from './styles'

interface CoffeeType {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

const coffees: CoffeeType[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.9,
    image: '/assets/coffees/expresso.png',
  },
  {
    id: '2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 9.9,
    image: '/assets/coffees/americano.png',
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.9,
    image: '/assets/coffees/expresso-cremoso.png',
  },
  {
    id: '4',
    title: 'Expresso Cremoso',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: 9.9,
    image: '/assets/coffees/expresso-cremoso.png',
  },
  {
    id: '5',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/cafe-com-leite.png',
  },
  {
    id: '6',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/latte.png',
  },
  {
    id: '7',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/capuccino.png',
  },
  {
    id: '8',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/macchiato.png',
  },
  {
    id: '9',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/mocaccino.png',
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com Leite'],
    price: 9.9,
    image: '/assets/coffees/chocolate-quente.png',
  },
  {
    id: '11',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    image: '/assets/coffees/cubano.png',
  },
  {
    id: '12',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: 9.9,
    image: '/assets/coffees/havaiano.png',
  },
  {
    id: '13',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: 9.9,
    image: '/assets/coffees/arabe.png',
  },
  {
    id: '14',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: 9.9,
    image: '/assets/coffees/irlandes.png',
  },
]

export function CoffeeList() {
  return (
    <Container>
      <h2>Nossos Cafés</h2>

      <List>
        {coffees.map(({ id, ...props }) => (
          <CoffeeListItem key={id} id={id} {...props} />
        ))}
      </List>
    </Container>
  )
}
