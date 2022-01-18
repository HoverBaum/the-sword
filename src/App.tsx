import './App.css'
import { useStory } from './useStory'

function App() {
  const { paragraphs, choices, reset, makeChoice } = useStory()

  return (
    <div>
      <h1>Story</h1>
      <button onClick={reset}>reset</button>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {choices.map((choice) => (
        <button
          key={choice.index + choice.text}
          onClick={() => makeChoice(choice.index)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default App
