import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { StoryState } from './store'
import { makeChoice, resetStory } from './story.slice'

function App() {
  const { paragraphs, choices, title } = useSelector(
    (state: StoryState) => state.story
  )
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => dispatch(resetStory)}>reset</button>
      <br />
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {choices.map((choice) => (
        <button
          key={choice.index + choice.text}
          onClick={() => dispatch(makeChoice(choice))}
        >
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default App
