import { MapPin } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

const MapIcon = styled(MapPin).attrs({
  width: 22,
  height: 22,
})`
  color: ${({ theme }) => theme['yellow-dark']};
  margin-top: 1px;
`

export const Icon = {
  Map: MapIcon,
}

export const Content = styled.div`
  margin-top: 2rem;
`

export const FormContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px auto 60px;
  grid-template-rows: auto;
  grid-template-areas:
    'cep cep cep'
    'street street street'
    'number complement complement'
    'city state state_short';
`

export const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? 'red' : theme['base-button'])};
  color: ${({ theme }) => theme['base-text']};
  background-color: ${({ theme }) => theme['base-input']};
  padding: 0.75rem;
  font-size: 14px;
  line-height: 130%;

  ::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:active,
  &:focus {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const InputError = styled.span`
  font-size: 12px;
  line-height: 130%;
  color: red;
`
