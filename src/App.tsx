/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Choices } from './Choices'
import { SceneDisplay } from './Scene/SceneDisplay'
import { StoryState } from './store'
import { TextLine } from './TextLine'

function App() {
  const { storyLines } = useSelector((state: StoryState) => state.story)

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
        <div
          css={css`
            max-width: 40rem;
          `}
        >
          {storyLines.map((line) => (
            <TextLine storyLine={line} key={line.text} />
          ))}

          <Choices />
        </div>
      </SceneDisplay>
    </div>
  )
}

export default App
