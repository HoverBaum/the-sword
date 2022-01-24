/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ComponentType } from "react"
import { useSelector } from "react-redux"
import { StoryState } from "../store"
import { Scene } from "../story"
import { AudioPlayer } from "./AudioPlayer"

export type SceneProps = {
  scene: Scene
}

export const SceneDisplay: ComponentType = ({ children }) => {
  const { scene } = useSelector((state: StoryState) => state.story)

  return (
    <div
      css={css`
        background-image: url(${scene?.src});
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
        color: ${scene?.textColor || "inherit"};
      `}
    >
      <AudioPlayer sound={scene?.sound} />
      {children}
    </div>
  )
}
