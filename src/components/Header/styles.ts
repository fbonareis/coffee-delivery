import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-height: 6.25rem;
  padding: 0 2rem 0 2rem;
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  font-size: 14px;
  line-height: 130%;
`

export const LocationIcon = styled(MapPin).attrs({
  weight: 'fill',
  size: 22,
})`
  color: ${({ theme }) => theme.purple};
`

interface CartProps {
  items: number
}

export const CartIcon = styled(ShoppingCart).attrs({
  weight: 'fill',
  size: 22,
})`
  color: ${({ theme }) => theme['yellow-dark']};
`

export const Cart = styled.div<CartProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['yellow-light']};
  position: relative;

  transition: all 0.2s;

  &::after {
    content: '${({ items }) => items}';
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    font-size: 14px;
    line-height: 130%;
    font-weight: bold;
    position: absolute;
    top: -10px;
    right: -10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.yellow};

    ${CartIcon} {
      color: ${({ theme }) => theme['yellow-light']};
    }
  }
`
