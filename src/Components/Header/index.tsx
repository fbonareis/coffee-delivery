import { useContext } from 'react'
import { Link } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { AppContext } from '../../contexts'
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
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </Link>

      <ActionsGroup>
        <Location>
          <LocationIcon />
          Cascavel, PR
        </Location>

        <Link to="/checkout">
          <Cart items={cart.summary.quantityTotal}>
            <CartIcon />
          </Cart>
        </Link>
      </ActionsGroup>
    </HeaderContainer>
  )
}
