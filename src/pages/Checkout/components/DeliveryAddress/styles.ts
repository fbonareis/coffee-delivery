import { MapPin } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
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
