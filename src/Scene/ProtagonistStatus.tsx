/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Spacer, Text } from '@geist-ui/core'
import { User } from '@geist-ui/icons'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const ProtagonistStatus: ComponentType = () => {
  const { mood } = useSelector((state: RootState) => state.story)

  return (
    <div
      css={css`
        padding-left: 4rem;
        min-height: 4rem;
        display: flex;
        align-items: center;
      `}
    >
      <User size={20} />
      <Spacer w={0.33} />
      <Text span font="1.25rem">
        {mood}
      </Text>
    </div>
  )
}
