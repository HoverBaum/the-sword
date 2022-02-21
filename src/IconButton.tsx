/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react'
import { Button } from '@geist-ui/core'
import { ComponentType, ReactNode, useState } from 'react'

type IconButtonProps = {
  icon: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  styling?: SerializedStyles
}

export const IconButton: ComponentType<IconButtonProps> = ({
  icon,
  styling,
  onClick,
}) => {
  const [isFocussed, setIsFocussed] = useState(false)

  const onFocus = () => {
    setIsFocussed(true)
  }

  const onBlur = () => {
    setIsFocussed(false)
  }

  return (
    <Button
      auto
      type={isFocussed ? 'secondary' : 'abort'}
      ghost={isFocussed}
      iconRight={icon}
      onClick={onClick}
      css={styling}
      onFocus={onFocus}
      onMouseEnter={onFocus}
      onBlur={onBlur}
      onMouseLeave={onBlur}
    ></Button>
  )
}
