import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { Text } from '@/ui-components'

import { CheckoutFormData } from './../../index'
import {
  Container,
  Content,
  FormContainer,
  FormControl,
  Header,
  Icon,
  Input,
  InputError,
  VStack,
} from './styles'

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

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
      <Content>
        <FormContainer>
          <FormControl style={{ gridArea: 'cep' }}>
            <Input
              style={{ width: '184px' }}
              type="text"
              placeholder="CEP"
              {...register('address.cep')}
              hasError={!!errors.address?.cep}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.cep" />
            </InputError>
          </FormControl>

          <FormControl style={{ gridArea: 'street' }}>
            <Input
              type="text"
              placeholder="Endereço"
              {...register('address.street')}
              hasError={!!errors.address?.street}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.street" />
            </InputError>
          </FormControl>

          <FormControl style={{ gridArea: 'number' }}>
            <Input
              type="text"
              placeholder="Número"
              {...register('address.number')}
              hasError={!!errors.address?.number}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.number" />
            </InputError>
          </FormControl>

          <FormControl style={{ gridArea: 'complement' }}>
            <Input
              type="text"
              placeholder="Complemento"
              {...register('address.complement')}
            />
          </FormControl>

          <FormControl style={{ gridArea: 'city' }}>
            <Input
              type="text"
              placeholder="Cidade"
              {...register('address.city')}
              hasError={!!errors.address?.city}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.city" />
            </InputError>
          </FormControl>

          <FormControl style={{ gridArea: 'state' }}>
            <Input
              type="text"
              placeholder="Estado"
              {...register('address.state')}
              hasError={!!errors.address?.state}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.state" />
            </InputError>
          </FormControl>

          <FormControl style={{ gridArea: 'state_short' }}>
            <Input
              type="text"
              placeholder="UF"
              {...register('address.state_short')}
              hasError={!!errors.address?.state_short}
            />
            <InputError>
              <ErrorMessage errors={errors} name="address.state_short" />
            </InputError>
          </FormControl>
        </FormContainer>
      </Content>
    </Container>
  )
}
