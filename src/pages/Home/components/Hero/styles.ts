import {
  Coffee,
  IconProps,
  Package,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'
import styled, { DefaultTheme } from 'styled-components'

import { device } from '@/utils'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 3rem 0px;

  p {
    text-align: center;
  }

  @media ${device.laptop} {
    flex-direction: row;
    padding: 6.25rem 0px 6.25rem 0px;

    p {
      text-align: left;
    }
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  :first-child {
    width: auto;

    @media ${device.laptop} {
      width: 37.75rem;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Highlights = styled.ul`
  display: flex;
  margin: 2.5rem 0 0 0;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 0 0 calc(50% - 0.5rem);
    flex-direction: column;

    @media ${device.laptop} {
      flex-direction: row;
    }
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

export const Highlight = {
  Icon: HighlightIcon,
}

const BaseIconProps: IconProps = {
  weight: 'fill',
  size: 16,
}

const ShoppingCartIcon = styled(ShoppingCart).attrs(BaseIconProps)``

const CoffeeIcon = styled(Coffee).attrs(BaseIconProps)``

const PackageIcon = styled(Package).attrs(BaseIconProps)``

const TimerIcon = styled(Timer).attrs(BaseIconProps)``

export const Icon = {
  ShoppingCart: ShoppingCartIcon,
  Coffee: CoffeeIcon,
  Package: PackageIcon,
  Timer: TimerIcon,
}
