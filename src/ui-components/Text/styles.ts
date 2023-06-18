import styled, { DefaultTheme } from 'styled-components'

export interface BaseTextProps {
  size?: keyof DefaultTheme['fontSize']['text']
  color?: keyof DefaultTheme
  weight?: keyof DefaultTheme['fontWeight']
}

export const BaseText = styled.p<BaseTextProps>`
  font-family: Roboto, sans-serif;
  line-height: 130%;
  font-size: ${({ theme, size }) => size && theme.fontSize.text[size]};
  font-weight: ${({ theme, weight }) => weight && theme.fontWeight[weight]};
  color: ${({ theme, color }) => color && theme[color]};
`
