import { Text } from '../../../../Components/Text'
import { Container, Header, Icon, VStack } from './styles'

export function DeliveryAddress() {
  return (
    <Container>
      <Header>
        <Icon.Map />
        <VStack>
          <Text size="m" color="base-subtitle">
            Endereço de Entrega
          </Text>
          <Text size="s" color="base-text">
            Informe o endereço onde deseja receber seu pedido
          </Text>
        </VStack>
      </Header>
    </Container>
  )
}
