import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import styled, { DefaultTheme } from 'styled-components'

export const Container = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 6.25rem 0px 6.25rem 0px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  :first-child {
    width: 37.75rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Highlights = styled.ul`
  display: flex;
  margin: 3.75rem 0 0 0;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 0 0 calc(50% - 0.5rem);
  }
`

interface HighlightIconProps {
  background: keyof DefaultTheme
}

const HighlightIcon = styled.div<HighlightIconProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, background }) => theme[background]};
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
`

const HighlightText = styled.span`
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
`

export const Highlight = {
  Icon: HighlightIcon,
  Text: HighlightText,
}

const IconBaseAttrs = {
  weight: 'fill',
  size: 16,
}

const ShoppingCartIcon = styled(ShoppingCart).attrs({
  IconBaseAttrs,
})``

const CoffeeIcon = styled(Coffee).attrs({
  IconBaseAttrs,
})``

const PackageIcon = styled(Package).attrs({
  IconBaseAttrs,
})``

const TimerIcon = styled(Timer).attrs({
  IconBaseAttrs,
})``

export const Icon = {
  ShoppingCart: ShoppingCartIcon,
  Coffee: CoffeeIcon,
  Package: PackageIcon,
  Timer: TimerIcon,
}
