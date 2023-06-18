import { Text } from '@/components'

import {
  Container,
  Header,
  Icon,
  PaymentOption,
  PaymentOptions,
  VStack,
} from './styles'

interface OptionProps {
  id: string
  name: string
  checked?: boolean
  title: string
  icon: any
}

function Option({ id, name, checked, title, icon }: OptionProps) {
  return (
    <PaymentOption>
      <input
        type="radio"
        id={id}
        value={id}
        name={name}
        defaultChecked={checked}
        onChange={(e) => console.log(e.target.value)}
      />
      <label htmlFor={id}>
        {icon} {title}
      </label>
    </PaymentOption>
  )
}

export function Payment() {
  return (
    <Container>
      <Header>
        <Icon.Currency />
        <VStack>
          <Text size="m" color="base-subtitle">
            Pagamento
          </Text>
          <Text size="s" color="base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Text>
        </VStack>
      </Header>

      <PaymentOptions>
        <Option
          id="credit-card"
          name="payment"
          title="Cartão de Crédito"
          icon={<Icon.CreditCard />}
          checked
        />

        <Option
          id="debit-card"
          name="payment"
          title="Cartão de Débito"
          icon={<Icon.Bank />}
        />

        <Option
          id="money"
          name="payment"
          title="Dinheiro"
          icon={<Icon.Money />}
        />
      </PaymentOptions>
    </Container>
  )
}
