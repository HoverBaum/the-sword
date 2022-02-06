/** @jsxImportSource @emotion/react */
import { Button, ButtonProps, Spacer } from '@geist-ui/core'
import { ChevronDown } from '@geist-ui/icons'
import { ComponentType } from 'react'
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

  const playFocusSound = () => {
    playSoundEffect(pageTurnSoundAsset, 0.3)
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

  return (
    <div>
      <Spacer h={2} />
      {!isContinue && <Button {...buttonProps}>{text}</Button>}
      {isContinue && (
        <Button {...buttonProps} icon={<ChevronDown />} auto></Button>
      )}
    </div>
  )
}
