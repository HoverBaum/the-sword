import { useSelector } from 'react-redux'
import { StoryState } from './store'
import { makeChoice, resetStory } from './story.slice'

export const useStory = () => {
  const { paragraphs, choices, author, title } = useSelector(
    (state: StoryState) => state.story
  )

  return {
    paragraphs,
    choices,
    author,
    title,
    makeChoice,
    resetStory,
  }
}
