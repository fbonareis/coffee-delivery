import successIllustration from '@/assets/success-illustration.svg'
import { Text, Title } from '@/ui-components'

import {
  Container,
  Icon,
  Icons,
  Item,
  Items,
  Section,
  Sections,
} from './styles'

export function Success() {
  return (
    <Container>
      <Title size="l" color="yellow-dark" weight="extraBold">
        Uhu! Pedido confirmado
      </Title>
      <Text size="l" color="base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </Text>

      <Sections>
        <Section.Informations>
          <Section.Content>
            <Items>
              <Item>
                <Icon background="purple">
                  <Icons.MapPin />
                </Icon>
                <Text size="m" color="base-text">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </Text>
              </Item>

              <Item>
                <Icon background="yellow">
                  <Icons.Timer />
                </Icon>
                <Text size="m" color="base-text">
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min </strong>
                </Text>
              </Item>

              <Item>
                <Icon background="yellow-dark">
                  <Icons.Currency />
                </Icon>
                <Text size="m" color="base-text">
                  Pagamento na entrega
                  <br />
                  <strong>Cartão de Crédito</strong>
                </Text>
              </Item>
            </Items>
          </Section.Content>
        </Section.Informations>

        <Section.Illustration>
          <img src={successIllustration} alt="" width={'100%'} />
        </Section.Illustration>
      </Sections>
    </Container>
  )
}
