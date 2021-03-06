/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Spacer, Text, useTheme } from '@geist-ui/core'
import { User } from '@geist-ui/icons'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useIsMobile } from '../mediaQueries'
import { fadeIn } from '../animations'

export const ProtagonistStatus: ComponentType = () => {
  const { mood } = useSelector((state: RootState) => state.story)
  const { palette } = useTheme()
  const isMobile = useIsMobile()

  return (
    <div
      css={css`
        opacity: 0.8;
        position: fixed;
        top: 0;
        left: 66%;
        padding-top: 4rem;
        padding-bottom: 1rem;
        border-left: 1px solid ${palette.border};
        padding-left: 4rem;
        min-height: 4rem;

        ${isMobile &&
        css`
          padding: 0rem;
          border-left: none;
          left: 50%;
          transform: translateX(-50%);
        `}
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          transition: all 0.3s ease-in-out;
          ${!mood &&
          css`
            opacity: 0;
          `}
        `}
      >
        <User size={20} />
        <Spacer w={0.33} />
        <div
          key={mood}
          css={css`
            animation: ${fadeIn} 0.5s ease-in-out forwards;
          `}
        >
          <Text span font="1.25rem">
            {mood}
          </Text>
        </div>
      </div>
    </div>
  )
}
