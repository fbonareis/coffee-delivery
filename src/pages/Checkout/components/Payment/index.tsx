import { useFormContext } from 'react-hook-form'

import { Text } from '@/ui-components'

import { CheckoutFormData } from '../..'
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
  title: string
  icon: any
}

function Option({ id, title, icon }: OptionProps) {
  const { register } = useFormContext<CheckoutFormData>()
  return (
    <PaymentOption>
      <input type="radio" id={id} value={id} {...register('payment')} />
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
          title="Cartão de Crédito"
          icon={<Icon.CreditCard />}
        />
        <Option id="debit-card" title="Cartão de Débito" icon={<Icon.Bank />} />
        <Option id="money" title="Dinheiro" icon={<Icon.Money />} />
      </PaymentOptions>
    </Container>
  )
}
