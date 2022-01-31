/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@geist-ui/core'
import { PauseFill } from '@geist-ui/icons'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Pause } from '../Pause'
import { RootState } from '../store'
import { Scene } from '../story'
import { AudioPlayer } from './AudioPlayer'
import { Credit } from './Credit'
import { ProtagonistStatus } from './ProtagonistStatus'

export type SceneProps = {
  scene: Scene
}

export const SceneDisplay: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: RootState) => state.story)
  const { palette } = useTheme()
  const navigate = useNavigate()

  if (!scene) return <div>{children}</div>

  return (
    <div
      css={css`
        background-image: url(${scene?.image.file});
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        height: 100vh;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
        width: 100vw;
        box-sizing: border-box;
        padding: 4rem;
        color: ${scene.textColor || 'inherit'};
      `}
    >
      <Pause />
      <AudioPlayer sound={scene?.sound} />

      <div
        css={css`
          opacity: 0.8;
          position: fixed;
          top: 0;
          left: 66%;
          padding-top: 4rem;
          border-left: 1px solid ${palette.accents_5};
        `}
      >
        <ProtagonistStatus />
      </div>

      {children}

      <Credit
        href={scene.image.creditLink}
        backgroundColor={scene.backgroundColor}
      >
        Image: {scene.image.credit}
      </Credit>
    </div>
  )
}
