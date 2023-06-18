import { IconProps, Minus, Plus } from '@phosphor-icons/react'
import styled, { css } from 'styled-components'

const BaseIconStyle = css`
  color: ${({ theme }) => theme.purple};
`

const BaseIconProps: IconProps = {
  width: 16,
  height: 16,
  weight: 'bold',
}

const MinusIcon = styled(Minus).attrs(BaseIconProps)`
  ${BaseIconStyle}
`

const PlusIcon = styled(Plus).attrs(BaseIconProps)`
  ${BaseIconStyle}
`

export const Icon = {
  Minus: MinusIcon,
  Plus: PlusIcon,
}

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['base-button']};
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 0.5rem;
`

export const InputNumber = styled.input.attrs({
  type: 'number',
})`
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
`

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 130%;
  transition: color 0.2s;

  &:hover ${MinusIcon}, &:hover ${PlusIcon} {
    color: ${({ theme }) => theme['purple-dark']};
    cursor: pointer;
  }

  :disabled ${MinusIcon} {
    color: ${({ theme }) => theme['base-hover']};
    cursor: not-allowed;
  }
`
