import React from 'react'

import * as Styled from './styles'

type Props = {
  children: React.ReactNode
  wide?: boolean
  href: string
  withPrice?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  children,
  wide,
  withPrice,
  href,
  onClick
}) => (
  <Styled.ButtonWrapper
    href={href}
    wide={wide}
    withPrice={withPrice}
    onClick={onClick}
  >
    {children}
  </Styled.ButtonWrapper>
)

export default Button
