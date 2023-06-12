import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

const BaseIcon = css`
  color: ${({ theme }) => theme.purple};
`

const CurrencyIcon = styled(CurrencyDollar).attrs({
  width: 22,
  height: 22,
})`
  ${BaseIcon}
  margin-top: 1px;
`

const CreditCardIcon = styled(CreditCard).attrs({
  width: 16,
  height: 16,
})`
  ${BaseIcon}
`

const BankIcon = styled(Bank).attrs({
  width: 16,
  height: 16,
})`
  ${BaseIcon}
`

const MoneyIcon = styled(Money).attrs({
  width: 16,
  height: 16,
})`
  ${BaseIcon}
`

export const Icon = {
  Currency: CurrencyIcon,
  CreditCard: CreditCardIcon,
  Bank: BankIcon,
  Money: MoneyIcon,
}

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

export const PaymentOption = styled.div`
  display: flex;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  label {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-button']};
    padding: 1rem;
    color: ${({ theme }) => theme['base-text']};
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    border: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['base-hover']};
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  input {
    display: none;
  }

  input:checked ~ label {
    background-color: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme.purple};
  }
`

// export const Option = styled.input.attrs({
//   type: 'radio',
// })`
//   border: red;

//   :checked ~ span {
//     background-color: ${({ theme }) => theme.yellow};
//   }
// `
