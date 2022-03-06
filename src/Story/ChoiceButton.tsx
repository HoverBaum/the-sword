/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, ButtonProps, Spacer } from '@geist-ui/core'
import { ChevronDown } from '@geist-ui/icons'
import { ComponentType, useEffect, useRef, useState } from 'react'
import { pageTurnSoundAsset } from '../assets'
import { useSound } from '../useSound'

export type ChoiceButtonProps = {
  text: string
  autoFocus?: boolean
  onClick: () => void
}

export const ChoiceButton: ComponentType<ChoiceButtonProps> = ({
  text,
  autoFocus,
  onClick,
}) => {
  const isContinue = /continue/i.test(text)
  const { playSoundEffect } = useSound()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // For readability we make text bold on focus and hover.
  // To reduce motion we figure out the bold width and force
  // buttons to use that.
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!buttonRef.current) return
    setWidth(buttonRef.current.clientWidth)
  }, [buttonRef.current])

  const playFocusSound = () => {
    playSoundEffect(pageTurnSoundAsset)
  }

  // We sadly need two buttons here to make display of continue buttons work properly.
  // That is why we gather shared props here.
  const buttonProps: ButtonProps = {
    onFocus: playFocusSound,
    onClick,
    autoFocus,
    type: 'secondary',
    ghost: true,
  }

  console.log('Width', width)

  return (
    <div
      css={css`
        & button:hover,
        & button:focus {
          font-weight: bold;
        }
        // Here is the "magic" to force the right width.
        ${width > 0 &&
        css`
          & button.btn {
            width: ${width}px;
            display: flex;
          }
        `}
        // We need initially bold text to get the "bol width".
        ${width === 0 &&
        css`
          & button.btn {
            font-weight: bold;
          }
        `}
      `}
    >
      <Spacer h={2} />
      {!isContinue && (
        <Button ref={buttonRef} {...buttonProps}>
          {text}
        </Button>
      )}
      {isContinue && (
        // Continue buttons don't need bold magic.
        <Button {...buttonProps} icon={<ChevronDown />} auto></Button>
      )}
    </div>
  )
}
