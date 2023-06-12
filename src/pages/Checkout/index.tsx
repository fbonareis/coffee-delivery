import { useContext } from 'react'

import { AppContext } from '../../contexts'
import { CartList } from './components/CartList'
import { CartSummary } from './components/CartSummary'
import { DeliveryAddress } from './components/DeliveryAddress'
import { Payment } from './components/Payment'
import { CheckoutContainer, Section, Sections } from './styles'

export function Checkout() {
  const { cart } = useContext(AppContext)

  return (
    <CheckoutContainer>
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
    </CheckoutContainer>
  )
}
