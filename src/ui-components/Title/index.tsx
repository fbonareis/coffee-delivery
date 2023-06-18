import { ReactNode } from 'react'

import { BaseTitle, BaseTitleProps } from './styles'

interface TitleProps extends BaseTitleProps {
  children: ReactNode
}

export function Title({ children, ...props }: TitleProps) {
  return <BaseTitle {...props}>{children}</BaseTitle>
}
