/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Spacer, useTheme } from '@geist-ui/core'
import { ComponentType, useEffect } from 'react'
import { useSelector } from 'react-redux'
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

  useEffect(() => {
    const display = document.querySelector('#sceneDisplay')
    if (!display) return
    setTimeout(() => {
      display.scrollTo({
        top: display.scrollHeight,
        behavior: 'smooth',
      })
    })
  }, [children])

  if (!scene) return <div>{children}</div>

  return (
    <div
      css={css`
        background-image: url(${scene?.image.file});
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        height: 100vh;
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

      <div
        id="sceneDisplay"
        css={css`
          height: 100%;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {children}
        <Spacer h={10} />
      </div>

      <Credit
        href={scene.image.creditLink}
        backgroundColor={scene.backgroundColor}
      >
        Image: {scene.image.credit}
      </Credit>
    </div>
  )
}
