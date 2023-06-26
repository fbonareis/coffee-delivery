import { CurrencyDollar, IconProps, MapPin, Timer } from '@phosphor-icons/react'
import styled, { DefaultTheme } from 'styled-components'

import { device } from '@/utils'

export const Container = styled.div`
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
  margin-top: 2.5rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SectionContent = styled.div`
  padding: 1.5rem;
  margin-bottom: 0.75rem;

  border-radius: 6px 36px 6px 36px;
  border: double 1px transparent;
  background-image: linear-gradient(
      ${({ theme }) => theme.background},
      ${({ theme }) => theme.background}
    ),
    radial-gradient(
      circle at top left,
      ${({ theme }) => theme['yellow-dark']},
      ${({ theme }) => theme.purple}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    padding: 2.5rem;
  }
`

export const SectionInformations = styled(BaseSection)``

export const SectionIllustration = styled(BaseSection)``

export const Section = {
  Content: SectionContent,
  Informations: SectionInformations,
  Illustration: SectionIllustration,
}

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Icon = styled.div<{ background: keyof DefaultTheme }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme, background }) => theme[background]};
  border-radius: 50%;
  flex: 0 0 32px;
`

const BaseIconProps: IconProps = {
  weight: 'fill',
  size: 16,
}

const IconMap = styled(MapPin).attrs(BaseIconProps)``

const IconTimer = styled(Timer).attrs(BaseIconProps)``

const IconCurrency = styled(CurrencyDollar).attrs(BaseIconProps)``

export const Icons = {
  MapPin: IconMap,
  Timer: IconTimer,
  Currency: IconCurrency,
}
