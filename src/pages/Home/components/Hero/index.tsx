import {
  Container,
  Heading,
  Highlight,
  Highlights,
  Icon,
  Section,
} from './styles'

export function Hero() {
  return (
    <Container>
      <Section>
        <Heading>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Heading>

        <Highlights>
          <li>
            <Highlight.Icon background="yellow-dark">
              <Icon.ShoppingCart />
            </Highlight.Icon>
            <Highlight.Text>Compra simples e segura</Highlight.Text>
          </li>

          <li>
            <Highlight.Icon background="base-text">
              <Icon.Package />
            </Highlight.Icon>
            <Highlight.Text>Embalagem mantém o café intacto</Highlight.Text>
          </li>

          <li>
            <Highlight.Icon background="yellow">
              <Icon.Timer />
            </Highlight.Icon>
            <Highlight.Text>Entrega rápida e rastreada</Highlight.Text>
          </li>

          <li>
            <Highlight.Icon background="purple">
              <Icon.Coffee />
            </Highlight.Icon>
            <Highlight.Text>O café chega fresquinho até você</Highlight.Text>
          </li>
        </Highlights>
      </Section>

      <Section>
        <img src="assets/hero-coffee.png" alt="Café" />
      </Section>
    </Container>
  )
}
