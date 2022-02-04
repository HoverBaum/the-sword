/** @jsxImportSource @emotion/react */
import { Button, Spacer } from '@geist-ui/core'
import { ChevronDown } from '@geist-ui/icons'
import { ComponentType } from 'react'

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

  return (
    <div>
      <Spacer h={2} />
      {!isContinue && (
        <Button onClick={onClick} autoFocus={autoFocus}>
          {text}
        </Button>
      )}
      {isContinue && (
        <Button
          onClick={onClick}
          autoFocus={autoFocus}
          icon={<ChevronDown />}
          auto
        ></Button>
      )}
    </div>
  )
}
