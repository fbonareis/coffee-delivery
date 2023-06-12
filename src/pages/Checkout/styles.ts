import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
`

export const Sections = styled.div`
  display: flex;
  gap: 2rem;
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
  width: 640px;

  ${SectionContent} {
    border-radius: 6px;
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
