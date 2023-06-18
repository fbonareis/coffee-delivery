import { Trash } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  gap: 1rem;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 64px;
    height: 64px;
  }
`

export const HStack = styled.div`
  display: flex;
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Name = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Price = styled.p`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 800;
  color: ${({ theme }) => theme['base-text']};
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  border-radius: 6px;
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-size: 12px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['base-hover']};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

const TrashIcon = styled(Trash).attrs({
  width: 16,
  height: 16,
  weight: 'regular',
})`
  color: ${({ theme }) => theme.purple};
`

export const Icon = {
  Trash: TrashIcon,
}
