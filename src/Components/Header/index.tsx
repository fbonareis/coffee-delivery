import { useContext } from 'react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { AppContext } from '../../contexts/AppContext'
import {
  ActionsGroup,
  Cart,
  CartIcon,
  HeaderContainer,
  Location,
  LocationIcon,
} from './styles'

export function Header() {
  const { cart } = useContext(AppContext)

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" />

      <ActionsGroup>
        <Location>
          <LocationIcon />
          Cascavel, PR
        </Location>

        <Cart items={cart.summary.quantityTotal}>
          <CartIcon />
        </Cart>
      </ActionsGroup>
    </HeaderContainer>
  )
}
