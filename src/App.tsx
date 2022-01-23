/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react"
import { Button, Text } from "@geist-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Choices } from "./Choices"
import { AudioPlayer } from "./components/AudioPlayer"
import { StoryState } from "./store"
import { resetStory } from "./story.slice"

function App() {
  const { paragraphs, title, scene } = useSelector(
    (state: StoryState) => state.story
  )
  const dispatch = useDispatch()

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
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <AudioPlayer sound={scene?.sound} />
      <Text h1>{title}</Text>
      <Button onClick={() => dispatch(resetStory)}>reset</Button>
      <br />
      <div
        css={css`
          max-width: 40rem;
        `}
      >
        {paragraphs.map((paragraph) => (
          <Text p key={paragraph}>
            {paragraph}
          </Text>
        ))}

        <Choices />
      </div>
    </div>
  )
}

export default App
