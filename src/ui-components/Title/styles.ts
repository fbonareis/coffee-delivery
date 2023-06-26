import styled, { DefaultTheme } from 'styled-components'

export interface BaseTitleProps {
  size?: keyof DefaultTheme['fontSize']['title']
  color?: keyof DefaultTheme
  weight?: keyof DefaultTheme['fontWeight']
}

export const BaseTitle = styled.h2<BaseTitleProps>`
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  font-size: ${({ theme, size }) => size && theme.fontSize.title[size]};
  font-weight: ${({ theme, weight }) => weight && theme.fontWeight[weight]};
  color: ${({ theme, color }) => color && theme[color]};
`
