/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@geist-ui/core'
import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { StoryState } from '../store'
import { Scene } from '../story'
import { AudioPlayer } from './AudioPlayer'
import { Credit } from './Credit'
import { ProtagonistStatus } from './ProtagonistStatus'

export type SceneProps = {
  scene: Scene
}

export const SceneDisplay: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: StoryState) => state.story)
  const { palette } = useTheme()

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
