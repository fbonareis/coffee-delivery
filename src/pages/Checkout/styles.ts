import styled from 'styled-components'

import { device } from '@/utils'

export const CheckoutContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem 5rem 2rem;

  @media ${device.mobileL} {
    padding: 0 2rem 2rem 2rem;
  }
`

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-size: 18px;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-bottom: 1rem;
`

export const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const SectionContent = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionCompleteCheckout = styled(BaseSection)`
  width: auto;

  ${SectionContent} {
    border-radius: 6px;
  }

  @media ${device.laptop} {
    width: 640px;
  }
`

export const SectionSummary = styled(BaseSection)`
  flex: 1;
  flex-direction: column;

  ${SectionContent} {
    border-radius: 6px 44px 6px 44px;
  }
`

export const Section = {
  Title: SectionTitle,
  CompleteCheckout: SectionCompleteCheckout,
  Summary: SectionSummary,
  Content: SectionContent,
}
