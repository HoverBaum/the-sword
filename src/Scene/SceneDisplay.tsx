/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Divider, Spacer } from '@geist-ui/core'
import { ComponentType, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Pause } from './Pause'
import { RootState } from '../store'
import { Scene } from '../story'
import { AudioPlayer } from './AudioPlayer'
import { Credit } from './Credit'
import { ProtagonistStatus } from './ProtagonistStatus'
import { useIsMediumDown, useIsMobile } from '../mediaQueries'

export type SceneProps = {
  scene: Scene
}

/**
 * Display the scene of the story.
 * Also adds control elements.
 */
export const SceneDisplay: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: RootState) => state.story)
  const isMobile = useIsMobile()
  const isMediumDown = useIsMediumDown()

  useEffect(() => {
    if (isMobile) return
    const display = document.querySelector('#sceneDisplay')
    if (!display) return
    setTimeout(() => {
      display.scrollTo({
        top: display.scrollHeight,
        behavior: 'smooth',
      })
    })
  }, [children, isMobile])

  if (!scene) return <div>{children}</div>

  return (
    <div
      css={css`
        background-color: ${scene.backgroundColor};
        background-image: linear-gradient(
            to right,
            ${scene.backgroundColor} 0%,
            ${scene.backgroundColor} 40%,
            rgba(0, 0, 0, 0) 70%
          ),
          radial-gradient(
            circle at bottom right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 20%,
            ${scene.backgroundColor} 60%
          ),
          url(${scene?.image.file});
        ${isMobile &&
        css`
          background-image: none;
        `}
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        color: ${scene.textColor || 'inherit'};
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        padding: ${isMobile ? 2 : 4}rem;
        ${isMobile &&
        css`
          padding-top: 3rem;
        `}
      `}
    >
      <Pause />
      <AudioPlayer sound={scene?.sound} />
      <ProtagonistStatus />

      {isMobile && (
        <Divider
          css={css`
            // Once again overruling geist ui.
            margin-bottom: 0 !important;
          `}
        />
      )}

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
        <Spacer h={isMediumDown ? 4 : 10} />
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
