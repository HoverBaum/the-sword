/** @jsxImportSource @emotion/react */
import { Button, Spacer } from '@geist-ui/core'
import { ChevronDown } from '@geist-ui/icons'
import { ComponentType } from 'react'
import { pageTurnSoundAsset } from '../assets'
import { useSound } from '../useSound'

export type ChoiceButtonProps = {
  text: string
  autoFocus: boolean
  onClick: () => void
}

export const ChoiceButton: ComponentType<ChoiceButtonProps> = ({
  text,
  autoFocus,
  onClick,
}) => {
  const isContinue = /continue/i.test(text)
  const { play } = useSound()

  const playFocusSound = () => {
    play(pageTurnSoundAsset, 0.3)
  }

  return (
    <div>
      <Spacer h={2} />
      {!isContinue && (
        <Button
          onFocus={playFocusSound}
          onClick={onClick}
          autoFocus={autoFocus}
        >
          {text}
        </Button>
      )}
      {isContinue && (
        <Button
          onFocus={playFocusSound}
          onClick={onClick}
          autoFocus={autoFocus}
          icon={<ChevronDown />}
          auto
        ></Button>
      )}
    </div>
  )
}