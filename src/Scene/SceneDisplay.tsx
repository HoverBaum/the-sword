/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Spacer, useMediaQuery } from '@geist-ui/core'
import { ComponentType, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Pause } from './Pause'
import { RootState } from '../store'
import { Scene } from '../story'
import { AudioPlayer } from './AudioPlayer'
import { Credit } from './Credit'
import { ProtagonistStatus } from './ProtagonistStatus'

export type SceneProps = {
  scene: Scene
}

/**
 * Display the scene of the story.
 * Also adds control elements.
 */
export const SceneDisplay: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: RootState) => state.story)
  const isSM = useMediaQuery('sm')
  const isXS = useMediaQuery('xs')

  const isMobile = useMemo(() => isXS || isSM, [isXS, isSM])

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
        background-color: ${scene.backgroundColor};
        background-image: url(${scene?.image.file});
        ${isMobile &&
        css`
          background-image: none;
        `}
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        padding: ${isMobile ? 2 : 4}rem;
        color: ${scene.textColor || 'inherit'};
      `}
    >
      <Pause />
      <AudioPlayer sound={scene?.sound} />
      <ProtagonistStatus />

      {/* Text and choices go here. */}
      {/* TODO refactor the entire Story -> SceneDisplay -> Children structure. */}
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
        {isMobile && <img src={scene.image.file} />}
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
