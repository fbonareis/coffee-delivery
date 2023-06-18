import { ReactNode } from 'react'

import { BaseText, BaseTextProps } from './styles'

interface TextProps extends BaseTextProps {
  children: ReactNode
}

export function Text({ children, ...props }: TextProps) {
  return <BaseText {...props}>{children}</BaseText>
}
