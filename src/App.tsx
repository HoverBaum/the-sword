/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { StoryState } from './store'
import { makeChoice, resetStory } from './story.slice'

function App() {
  const { paragraphs, choices, title, background } = useSelector(
    (state: StoryState) => state.story
  )
  const dispatch = useDispatch()

  return (
    <div
      css={css`
        background-image: url(${background?.src});
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        padding: 4rem;
        color: ${background?.textColor || 'inherit'};
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
      <h1>{title}</h1>
      <button onClick={() => dispatch(resetStory)}>reset</button>
      <br />
      <div
        css={css`
          max-width: 40rem;
          max-height: 100%;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {choices.map((choice) => (
          <>
            <br />
            <button
              key={choice.index + choice.text}
              onClick={() => dispatch(makeChoice(choice))}
            >
              {choice.text}
            </button>
            <br />
          </>
        ))}
      </div>
    </div>
  )
}

export default App
