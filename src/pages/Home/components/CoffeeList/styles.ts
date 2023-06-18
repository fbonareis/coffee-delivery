import styled from 'styled-components'

import { device } from '@/utils'

export const Container = styled.section`
  padding-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
  }
`

export const List = styled.ul`
  display: grid;

  justify-content: space-between;
  grid-gap: 1.75rem;
  //grid-template-columns: minmax(255px, max-content);
  grid-template-columns: 1fr;

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
