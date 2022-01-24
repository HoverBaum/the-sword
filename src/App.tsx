/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react"
import { Text } from "@geist-ui/core"
import { useSelector } from "react-redux"
import { Choices } from "./Choices"
import { SceneDisplay } from "./Scene/SceneDisplay"
import { StoryState } from "./store"

function App() {
  const { paragraphs, title } = useSelector((state: StoryState) => state.story)

  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <SceneDisplay>
        <Text h1>{title}</Text>
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
      </SceneDisplay>
    </div>
  )
}

export default App
