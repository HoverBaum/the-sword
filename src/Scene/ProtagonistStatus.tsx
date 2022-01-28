/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Text } from '@geist-ui/core'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { StoryState } from '../store'

export const ProtagonistStatus: ComponentType = () => {
  const { mood } = useSelector((state: StoryState) => state.story)

  return (
    <div
      css={css`
        padding-left: 4rem;
        min-height: 5rem;
      `}
    >
      <Text span font="1.25rem">
        {mood}
      </Text>
    </div>
  )
}
