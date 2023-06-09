import { ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
  margin-top: 1.5rem;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -1.5rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.span`
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme['yellow-dark']};
  font-weight: 700;
  text-align: center;
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
  font-weight: 700;
  text-align: center;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-label']};
  text-align: center;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Price = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: 24px;
  line-height: 130%;
  font-weight: 800;
  color: ${({ theme }) => theme['base-text']};
  flex: 1;

  span {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: normal;
  }
`

export const QuantitySelector = styled.div`
  display: flex;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['base-button']};
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;

  input[type='number'] {
    width: 1.25rem;
    background-color: transparent;
    border: none;
    text-align: center;
    font-size: 1rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.purple};
    font-size: 14px;
    line-height: 130%;

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
      cursor: pointer;
    }

    :disabled {
      color: ${({ theme }) => theme['base-hover']};
      cursor: not-allowed;
    }
  }
`

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-dark']};
  border: none;

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
    cursor: pointer;
  }

  :disabled {
    background-color: ${({ theme }) => theme['base-hover']};
    cursor: not-allowed;
  }
`

export const CartIcon = styled(ShoppingCart).attrs({
  weight: 'fill',
  size: 22,
})`
  color: ${({ theme }) => theme.white};
`
