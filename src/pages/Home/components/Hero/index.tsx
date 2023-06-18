import { Text, Title } from '@/components'

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
          <Title size="xl" color="base-title">
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <Text size="l" color="base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
        </Heading>

        <Highlights>
          <li>
            <Highlight.Icon background="yellow-dark">
              <Icon.ShoppingCart />
            </Highlight.Icon>
            <Text size="m" color="base-text">
              Compra simples e segura
            </Text>
          </li>

          <li>
            <Highlight.Icon background="base-text">
              <Icon.Package />
            </Highlight.Icon>
            <Text size="m" color="base-text">
              Embalagem mantém o café intacto
            </Text>
          </li>

          <li>
            <Highlight.Icon background="yellow">
              <Icon.Timer />
            </Highlight.Icon>
            <Text size="m" color="base-text">
              Entrega rápida e rastreada
            </Text>
          </li>

          <li>
            <Highlight.Icon background="purple">
              <Icon.Coffee />
            </Highlight.Icon>
            <Text size="m" color="base-text">
              O café chega fresquinho até você
            </Text>
          </li>
        </Highlights>
      </Section>

      <Section>
        <img src="assets/hero-coffee.png" alt="Café" />
      </Section>
    </Container>
  )
}
