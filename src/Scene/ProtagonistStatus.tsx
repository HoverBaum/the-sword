/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Spacer, Text, useTheme } from '@geist-ui/core'
import { User } from '@geist-ui/icons'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const ProtagonistStatus: ComponentType = () => {
  const { mood } = useSelector((state: RootState) => state.story)
  const { palette } = useTheme()

  return (
    <div
      css={css`
        opacity: 0.8;
        position: fixed;
        top: 0;
        left: 66%;
        padding-top: 4rem;
        padding-bottom: 1rem;
        border-left: 1px solid ${palette.accents_5};
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
