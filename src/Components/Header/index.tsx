import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import {
  ActionsGroup,
  Cart,
  CartIcon,
  HeaderContainer,
  Location,
  LocationIcon,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" />

      <ActionsGroup>
        <Location>
          <LocationIcon />
          Cascavel, PR
        </Location>

        <Cart items={8}>
          <CartIcon />
        </Cart>
      </ActionsGroup>
    </HeaderContainer>
  )
}
