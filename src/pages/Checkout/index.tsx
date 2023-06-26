import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { AppContext } from '@/contexts'

import { CartList } from './components/CartList'
import { CartSummary } from './components/CartSummary'
import { DeliveryAddress } from './components/DeliveryAddress'
import { Payment } from './components/Payment'
import { CheckoutContainer, Section, Sections } from './styles'

const checkoutFormValidationSchema = zod.object({
  address: zod.object({
    cep: zod.string().min(1, 'Campo obrigatório'),
    street: zod.string().min(1, 'Campo obrigatório'),
    number: zod.string().min(1, 'Campo obrigatório'),
    complement: zod.string(),
    city: zod.string().min(1, 'Campo obrigatório'),
    state: zod.string().min(1, 'Campo obrigatório'),
    state_short: zod.string().min(1, 'Campo obrigatório'),
  }),
  payment: zod.string(),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { cart } = useContext(AppContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        state_short: '',
      },
      payment: 'credit-card',
    },
  })

  const { handleSubmit } = checkoutForm

  function handleSubmitCheckout(data: CheckoutFormData) {
    const { address, payment } = data

    navigate('/success', {
      state: {
        address,
        payment,
      },
    })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitCheckout)} action="">
        <FormProvider {...checkoutForm}>
          <Sections>
            <Section.CompleteCheckout>
              <Section.Title>Complete seu pedido</Section.Title>
              <Section.Content>
                <DeliveryAddress />
              </Section.Content>
              <Section.Content>
                <Payment />
              </Section.Content>
            </Section.CompleteCheckout>

            <Section.Summary>
              <Section.Title>Cafés Selecionados</Section.Title>
              <Section.Content>
                <CartList items={cart.items} />
                <CartSummary
                  subTotal={cart.summary.subTotal}
                  delivery={3.5}
                  total={33.5}
                />
              </Section.Content>
            </Section.Summary>
          </Sections>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
